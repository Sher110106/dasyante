# Dasyante — Design & Implementation Notes

## Overview

This document captures the design decisions and technical implementation of the Dasyante waitlist landing page. Use it as a reference for future iterations.

---

## Current Version: v1.0

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS variables |
| Animation | Framer Motion |
| Form | React Hook Form |
| Database | JSONBin (v3 API) |
| Deployment | Vercel |

### Typography

| Role | Font | Source | Weight |
|------|------|--------|--------|
| Brand name | Lovelo | Local (`public/fonts/Lovelo-Black.woff2`) | 900 (Black) |
| Hero tagline | Cormorant Garamond | `next/font/google` | 300 (Light) |
| Body / UI | DM Sans | `next/font/google` | 300, 400 |

### Color System

All colors are defined as CSS variables in `app/globals.css`:

```css
:root {
  --bg-primary:       #0A0A0A;   /* Near-black, warmer than pure #000 */
  --bg-surface:       #111010;   /* Cards, input backgrounds */
  --text-primary:     #F5F0EB;   /* Warm off-white, never pure #FFF */
  --text-secondary:   #7A7470;   /* Muted warm grey */
  --text-tertiary:    #3D3835;   /* Barely-there text, dividers */
  --accent-gold:      #C9A96E;   /* Aged gold — the only accent color */
  --accent-gold-dim:  #C9A96E18; /* Gold at ~10% opacity for glows */
  --border-subtle:    #1E1C1A;   /* Input and card borders */
  --border-focus:     #C9A96E55; /* Gold at 33% opacity on focus */
  --error-amber:      #8B5A2B99; /* Warm amber for errors */
}
```

### File Structure

```
app/
├── layout.tsx              # Root layout, fonts, metadata, cursor + parallax
├── page.tsx                # Main 3-row grid: nav / hero / footer
├── globals.css             # CSS variables, font-face, grid background
└── api/waitlist/
    └── route.ts            # POST handler → JSONBin

components/
├── landing/
│   ├── HeroSection.tsx     # Brand name + tagline + form wrapper
│   ├── WaitlistForm.tsx   # Email input + submit + states
│   └── FooterStrip.tsx    # Bottom contact info
└── ui/
    ├── CustomCursor.tsx   # Gold dot cursor (desktop only)
    ├── GridVignette.tsx  # Radial fade overlay
    └── GridParallax.tsx  # Background drift on mouse move

lib/
└── fonts.ts               # next/font declarations

public/
└── fonts/
    └── Lovelo-Black.woff2 # Brand font
```

---

## Implementation Details

### 1. Page Layout

- Single full-viewport (`100dvh`), no scrolling
- CSS Grid: 3 rows (nav / hero / footer)
- Mobile: stacked form, smaller brand name
- Desktop: centered hero, full animations enabled

### 2. Animations

**Initial load (staggered reveal):**
- `staggerChildren: 0.18`, `delayChildren: 0.3`
- Brand name letters: `rotateX: 90° → 0°`, staggered 60ms per letter
- Tagline + form: fade-up with `expo-out` easing

**Custom cursor (desktop only):**
- 6px gold dot → expands to 28px hollow ring on interactive elements
- Spring physics: `{ stiffness: 500, damping: 30, mass: 0.5 }`
- ~10-20ms lag for smooth but responsive feel

**Background grid (desktop only):**
- Mathematical checkbox grid: 6x6px unfilled squares, 20px spacing, 6% opacity
- Inline SVG data URI in `body` background
- Grid parallax drift: ±8px movement on mouse move (ratio 0.015)
- Vignette overlay: radial gradient from transparent center to #0A0A0A at edges
- Brand name floats in pure darkness at center, grid emerges in periphery
- Disabled on mobile — grid is static

### 3. Waitlist Form

- Single row (desktop) / stacked (mobile)
- No labels — placeholder only
- Borderless visual connection between input + button
- Gold caret in input
- Gold underline on button hover (animated `scaleX`)
- Validation on submit → warm amber error (not red)
- Success: form fades, "You're on the list." appears in italic Cormorant

### 4. API Integration

**JSONBin Setup:**
- Bin ID: `699712a0ae596e708f3758db`
- Private bin, accessed via master key
- Data structure:
```json
{
  "emails": [
    { "email": "user@example.com", "joinedAt": "2026-02-19T..." }
  ]
}
```

**Route: `POST /api/waitlist`**
1. Validate email format
2. Read bin from JSONBin
3. Check for duplicates (case-insensitive)
4. Append new entry with timestamp
5. Write back to bin
6. Return success or error

---

## How to Make Changes

### Adding a New Font

1. Drop font file into `public/fonts/`
2. Add `@font-face` in `app/globals.css`:
```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```
3. Add to `tailwind.config.ts`:
```ts
fontFamily: {
  yourfont: ['YourFont', 'fallback', 'sans-serif'],
}
```

### Changing Colors

Edit the CSS variables in `app/globals.css` — Tailwind automatically picks them up via the extended theme.

### Adding Form Fields

1. Update `WaitlistForm.tsx` — add inputs to the form
2. Update `app/api/waitlist/route.ts` — add fields to the request body and JSONBin schema

### Switching from JSONBin

Replace the `getBin()` / `updateBin()` calls in the route with your preferred service:
- **Supabase**: `supabase.from('waitlist').insert({...})`
- **Mailchimp**: `POST /lists/{list_id}/members`
- **Loops**: `POST /api/v1/contacts/create`

### Disabling Animations

For reduced-motion preferences, wrap animations with:
```tsx
import { useReducedMotion } from 'framer-motion'

const shouldReduceMotion = useReducedMotion()
```

---

## Environment Variables

```env
JSONBIN_ACCESS_KEY=<your-master-key>
JSONBIN_BIN_ID=<bin-id>
```

For local development, add these to `.env.local`. For production (Vercel), add via project Settings > Environment Variables.

---

## Todo for Future Versions

- [x] Replace placeholder Lovelo font with real `Lovelo-Black.woff2` (added by user)
- [ ] Add OG image (1200x630, black bg with brand name)
- [ ] Add email confirmation (send welcome email via Loops/Mailchimp)
- [ ] Add analytics (page views, conversion rate)
- [ ] Add loading skeleton states

---

## Troubleshooting

**Cursor not appearing on mobile?** Expected — it's disabled via `window.matchMedia('(pointer: fine)')`.

**JSONBin returning 401?** Check the access key doesn't have backslash escaping. The `.env` value should be `$2a$10$...` not `\$2a$10$...`.

**Form not submitting?** Check browser console for CORS or network errors. Verify the API route is deployed.

---

*Last updated: February 2026*
