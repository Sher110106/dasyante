# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Dasyante** is a waitlist landing page for a curated demi-fine jewellery marketplace. This is a single-page, full-viewport Next.js application with no scrolling, focused entirely on capturing emails through a refined, animation-rich experience.

The design philosophy emphasizes restraint, cinematic typography, and subtle animations. The entire page exists to create one perfect moment: making the right person type their email.

## Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Architecture

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS variables
- **Animation**: Framer Motion (spring physics, viewport reveals, gesture interactions)
- **Forms**: React Hook Form
- **Database**: JSONBin v3 API (email storage)
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

### Typography System

The page uses three distinct fonts with specific roles:

1. **Lovelo** (local font at `public/fonts/Lovelo-Black.woff2`)
   - Used ONLY for the brand name "DASYANTE"
   - Weight: 900 (Black)
   - Loaded via `@font-face` in `app/globals.css`

2. **Cormorant Garamond** (Google Font)
   - Hero tagline, body copy, success messages
   - Weights: 300 (Light), 400 (Regular), 500 (Medium)
   - High-contrast serif for editorial elegance

3. **DM Sans** (Google Font)
   - UI elements: inputs, buttons, labels, legal text
   - Weights: 300, 400
   - Neutral sans-serif that doesn't compete with Cormorant

Font declarations are in `lib/fonts.ts` using `next/font/google` and `next/font/local`.

### Color System

All colors are defined as CSS variables in `app/globals.css`:

- `--bg-primary`: #0A0A0A (near-black background, warmer than pure black)
- `--text-primary`: #F5F0EB (warm off-white, never pure white)
- `--accent-gold`: #C9A96E (aged gold — the only accent color on the page)
- `--border-subtle`: #1E1C1A (input/card borders)
- `--error-amber`: #8B5A2B99 (warm amber for validation errors, NOT red)

The gold accent appears in exactly four places: email input caret, CTA button text, brand name underline on hover, and a subtle radial glow behind the logo.

Tailwind config extends these variables as utility classes (e.g., `text-accent-gold`, `bg-primary`).

### Page Layout Structure

Single full-viewport screen (`100dvh`, `overflow: hidden`). No scrolling.

CSS Grid with 3 rows:
1. **Top nav strip**: Small brand label + "Coming Soon" badge
2. **Hero center**: Brand name + tagline + email form (takes most space)
3. **Footer strip**: One-line descriptor + year

See `app/page.tsx` for the grid implementation.

### Component Architecture

```
app/
├── layout.tsx              # Root layout, fonts, metadata, CustomCursor, GridParallax
├── page.tsx                # Main 3-row grid: nav / hero / footer
├── globals.css             # CSS variables, @font-face, grid background SVG
└── api/waitlist/
    └── route.ts            # POST handler → JSONBin API

components/
├── landing/
│   ├── HeroSection.tsx     # Brand name + tagline + form wrapper
│   ├── WaitlistForm.tsx    # Email input + submit + state transitions
│   └── FooterStrip.tsx     # Bottom contact info
└── ui/
    ├── CustomCursor.tsx    # Gold dot cursor (desktop only, pointer: fine)
    ├── GridVignette.tsx    # Radial fade overlay on grid background
    ├── GridParallax.tsx    # Background drift on mouse move (desktop only)
    ├── GrainOverlay.tsx    # Subtle grain texture (unused in current version)
    └── HeroGlow.tsx        # Radial gold glow behind brand name (unused)

lib/
└── fonts.ts                # next/font declarations

public/
└── fonts/
    └── Lovelo-Black.woff2  # Brand font
```

### Background Treatment

The `body` element has an inline SVG data URI creating a mathematical grid pattern:
- 6×6px unfilled squares, 20px spacing, ~25% opacity
- White stroke on dark background
- Static on mobile, parallax-enabled on desktop via `GridParallax` component

`GridVignette.tsx` overlays a radial gradient fade (transparent center → dark edges) so the brand name appears to float in darkness while the grid emerges in the periphery.

### Animation Philosophy

All animations use `transform` and `opacity` only (GPU-composited) for 60fps performance. Never animate `height`, `width`, `top`, `left`, or `margin`.

Key animations:
- **Page load**: Staggered reveal with `staggerChildren: 0.18`, `delayChildren: 0.3`
- **Brand name**: Letter-by-letter entrance with `rotateX: 90° → 0°`, stagger 60ms per letter
- **Custom cursor**: Spring physics (`stiffness: 500, damping: 30, mass: 0.5`), 6px gold dot expands to 28px hollow ring on interactive elements
- **Grid parallax**: ±8px drift on mouse move, disabled on mobile

See `components/landing/HeroSection.tsx` for staggered reveal implementation.

### Waitlist Form Flow

1. Single-row layout (desktop) / stacked (mobile)
2. Borderless visual connection between input + button
3. Gold caret in input (`caret-color: var(--accent-gold)`)
4. Validation on submit → warm amber error (not red)
5. Success state: form fades, italic Cormorant message "You're on the list." appears

Component: `components/landing/WaitlistForm.tsx`

### API Integration

**Endpoint**: `POST /api/waitlist`

**Flow**:
1. Validate email format
2. Read current bin from JSONBin (`GET /v3/b/{BIN_ID}/latest`)
3. Check for duplicate (case-insensitive)
4. Append new entry with `joinedAt` timestamp
5. Write back to bin (`PUT /v3/b/{BIN_ID}`)
6. Return success or error

**Data structure** in JSONBin:
```json
{
  "emails": [
    { "email": "user@example.com", "joinedAt": "2026-02-19T..." }
  ]
}
```

**Environment variables** (required):
- `JSONBIN_ACCESS_KEY`: JSONBin master key
- `JSONBIN_BIN_ID`: Bin ID (currently `699712a0ae596e708f3758db`)

For local dev: `.env.local`
For production: Vercel project settings → Environment Variables

## Design Constraints

When making changes, respect these intentional design decisions:

### What to ALWAYS do:
- Use warm near-black (#0A0A0A) instead of pure black
- Use warm off-white (#F5F0EB) instead of pure white
- Keep gold accent usage minimal and deliberate
- Use Framer Motion for all animations (NOT CSS transitions for complex animations)
- Ensure animations use only `transform` and `opacity` for GPU compositing
- Disable custom cursor and parallax on mobile (`pointer: fine` media query)
- Use warm amber (#8B5A2B99) for errors, NOT red

### What to NEVER do:
- Add rounded corners (`border-radius`) to inputs or buttons
- Use generic system fonts (Inter, Roboto)
- Add gradient text to brand name
- Add scrolling sections, modals, or popups
- Add testimonials, social proof, or feature grids
- Use Lovelo for anything other than "DASYANTE"
- Animate `height`, `width`, `top`, `left`, or `margin` directly

## Responsive Behavior

**Desktop (>1024px)**:
- Full layout with custom cursor and parallax active
- Letter-by-letter brand name entrance animation

**Tablet (768px–1024px)**:
- Single-column centered layout
- Form stacks
- Tagline scales via `clamp()`
- Custom cursor remains active

**Mobile (<768px)**:
- Full-width stacked form
- Brand name scales to `clamp(36px, 12vw, 64px)`
- Parallax disabled (static centered glow)
- No custom cursor

## Adding/Changing Features

### Switching from JSONBin

Replace `getBin()` / `updateBin()` calls in `app/api/waitlist/route.ts`:

**Supabase**:
```ts
await supabase.from('waitlist').insert({ email: normalizedEmail, joined_at: new Date() })
```

**Mailchimp**:
```ts
await fetch(`https://api.mailchimp.com/3.0/lists/{list_id}/members`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${API_KEY}` },
  body: JSON.stringify({ email_address: normalizedEmail, status: 'subscribed' })
})
```

### Adding Form Fields

1. Update `WaitlistForm.tsx` — add inputs to the form
2. Update `app/api/waitlist/route.ts` — validate and store new fields in JSONBin schema

### Changing Colors

Edit CSS variables in `app/globals.css` — Tailwind automatically picks them up via the extended theme in `tailwind.config.ts`.

### Adding a New Font

1. Drop font file into `public/fonts/`
2. Add `@font-face` declaration in `app/globals.css`
3. Add to `tailwind.config.ts` `fontFamily` section

## Performance Requirements

- **Core Web Vitals targets**: LCP <1.2s, CLS of 0
- **Font loading**: Lovelo via `next/font/local` with `preload: true`, Google fonts with `display: 'swap'`
- **Animation performance**: All transforms GPU-accelerated
- **Graceful degradation**: Static HTML renders correctly without JavaScript

## Key Reference Documents

- `DESIGN.md`: Detailed design decisions, implementation notes, color system, typography scale
- `project.md`: Original design philosophy document with Apple/Stripe/The Row references
- Both files contain the "why" behind design choices — read them before making visual changes

## Development Notes

- The grid background is an inline SVG data URI in `body` CSS for zero HTTP requests
- Custom cursor only activates on `pointer: fine` devices (desktop with precise pointer)
- GridParallax uses `window.matchMedia` to disable on mobile
- Vercel Analytics is included in `layout.tsx`
- Font files must be in `public/fonts/` to be accessible via `/fonts/` URL path
