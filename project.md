# Dasyante — Landing Page Design Document
### Waitlist Experience for the Demi-Fine Jewellery Marketplace

---

## 1. Design Philosophy

The Dasyante landing page should feel like walking into a private preview of something that does not exist yet — hushed, deliberate, and magnetic. Not loud. Not crowded. The page exists for one purpose: to make the right person type their email.

The references to study before writing a single line of code are Apple's product pages (how they use cinematic typography and white space as a weapon), Stripe's homepage (how something technically complex is made to feel effortlessly understandable), and the editorial silence of brands like The Row or Bottega Veneta — where restraint is the loudest statement in the room.

Black background. Everything else is ornament.

---

## 2. Tech Stack

**Framework:** Next.js 14 (App Router)
**Language:** TypeScript
**Styling:** Tailwind CSS with a custom design token config
**Animation:** Framer Motion — this is non-negotiable. It gives you the spring physics, viewport-triggered reveals, and gesture-based interactions that CSS alone cannot replicate at this quality level.
**Form / Waitlist:** React Hook Form + a lightweight backend route (`/api/waitlist`) writing to a database (Supabase or Planetscale) or a third-party service like Loops or Mailchimp via their API
**Font Loading:** `next/font` with `display: swap` and preload enabled
**Deployment:** Vercel

---

## 3. Typography

Typography is the entire personality of this page. Get this wrong and nothing else matters.

### Typeface Stack

**Display — Lovelo (Brand Name Only)**
Lovelo is a geometric, rounded display font with a jewellery-house weight to it. The word "DASYANTE" is set exclusively in Lovelo Black or Lovelo Line. It should never appear in any other weight or style. Load it as a local font via `next/font/local` since it is not on Google Fonts.

```ts
// lib/fonts.ts
import localFont from 'next/font/local'

export const lovelo = localFont({
  src: './fonts/Lovelo-Black.woff2',
  variable: '--font-lovelo',
  display: 'swap',
})
```

**Primary Body — Cormorant Garamond**
A high-contrast serif with old-world editorial elegance. Use it for the hero tagline, body copy, and any longer-form text. It pairs beautifully with Lovelo because it brings warmth where Lovelo is geometric. Load via `next/font/google`.

Weights used: 300 (Light), 400 (Regular), 500 (Medium)

**Secondary / UI — DM Sans**
Used only for UI elements: input placeholder, button label, small labels, legal text. Its neutrality prevents it from competing with Cormorant. Keep it at weight 300 or 400 only.

### Type Scale

| Role | Font | Size | Weight | Letter Spacing |
|---|---|---|---|---|
| Brand name | Lovelo | clamp(48px, 8vw, 120px) | Black | 0.15em |
| Hero tagline | Cormorant Garamond | clamp(18px, 2.5vw, 32px) | 300 | 0.04em |
| Section label | DM Sans | 11px | 400 | 0.2em, uppercase |
| Body | Cormorant Garamond | 18px | 400 | 0.01em |
| Input text | DM Sans | 14px | 300 | 0.05em |
| Button | DM Sans | 12px | 400 | 0.18em, uppercase |

The brand name should always be all-caps. Use `text-transform: uppercase` in Tailwind rather than typing it in caps — this gives you more control.

---

## 4. Colour System

Define everything as CSS variables inside `globals.css`. Tailwind's config should extend to reference these tokens.

```css
:root {
  --bg-primary:       #0A0A0A;   /* Near-black — warmer than pure #000 */
  --bg-surface:       #111010;   /* Cards, input backgrounds */
  --text-primary:     #F5F0EB;   /* Warm off-white — never pure #FFF */
  --text-secondary:   #7A7470;   /* Muted warm grey for supporting copy */
  --text-tertiary:    #3D3835;   /* Barely-there text, dividers, hints */
  --accent-gold:      #C9A96E;   /* Aged gold — the only colour on the page */
  --accent-gold-dim:  #C9A96E18; /* Gold at ~10% opacity for glows, borders */
  --border-subtle:    #1E1C1A;   /* Input and card borders */
  --border-focus:     #C9A96E55; /* Gold at 33% opacity on input focus */
}
```

The gold accent `#C9A96E` appears in exactly four places: the animated caret in the email input, the CTA button label, the thin horizontal rule beneath the brand name on hover, and one barely-visible radial glow behind the logo. It should feel discovered, not announced.

---

## 5. Page Layout and Structure

The page is a single full-viewport screen. No scrolling. No sections below the fold. Everything lives in one moment.

```
Viewport: 100dvh, overflow hidden

Layout (CSS Grid, 3 rows):
  Row 1 — Top nav strip: small "DASYANTE" label left, "Coming Soon" badge right
  Row 2 — Hero centre: brand name + tagline + email form (takes most of the space)
  Row 3 — Footer strip: one-line descriptor + year right-aligned
```

The hero content sits in a vertically and horizontally centred flex column. On mobile, everything is centre-aligned. On desktop, consider a subtle left-of-centre positioning to break the symmetry — but only if it feels right in execution.

There are no images. No product photography. No illustrations. The entire visual weight of the page comes from the typography and the one ambient background effect described below.

---

## 6. Background Treatment

No plain black. Depth is everything.

**Radial Gradient Orb (CSS)**
A single radial gradient sits behind the brand name, centred, extending roughly 600–900px. It goes from `#C9A96E06` (gold at 4% opacity) at the centre outward to fully transparent. This creates a feeling that the text is lit from within.

```css
.hero-glow {
  position: absolute;
  width: 900px;
  height: 900px;
  background: radial-gradient(circle at center, #C9A96E08 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
}
```

**Grain Texture Overlay**
A subtle grain texture sits on top of everything at 3–4% opacity. This is what separates a flat digital interface from something that feels physical. Implement it with an SVG `feTurbulence` filter or a PNG noise tile repeated across the entire `body`. It should not be visible at a glance — it should only be felt.

```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url('/noise.png');
  opacity: 0.04;
  pointer-events: none;
  z-index: 9999;
}
```

The `noise.png` can be generated once from grainy-gradients.vercel.app and committed to `/public`.

---

## 7. Animations — Framer Motion Specifications

Every animation should feel like it is breathing, not performing. The goal is presence, not spectacle. Study how Linear and Vercel's marketing pages handle entrance — slow, staggered, inevitable.

### 7.1 Initial Page Load — Staggered Reveal

The entire hero block fades and rises in on load. Use a parent `motion.div` with `staggerChildren` and individual `motion.span` and `motion.p` children.

```
Parent container:
  initial: { opacity: 0 }
  animate: { opacity: 1 }
  transition: { staggerChildren: 0.18, delayChildren: 0.3 }

Brand name "DASYANTE":
  initial: { opacity: 0, y: 24 }
  animate: { opacity: 1, y: 0 }
  transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
  — This cubic-bezier is an "expo out" curve. It feels like a heavy object settling.

Tagline:
  initial: { opacity: 0, y: 16 }
  animate: { opacity: 1, y: 0 }
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }

Email input and button:
  initial: { opacity: 0, y: 10 }
  animate: { opacity: 1, y: 0 }
  transition: { duration: 0.7, ease: 'easeOut' }

Footer:
  initial: { opacity: 0 }
  animate: { opacity: 1 }
  transition: { duration: 1.2, delay: 1.2 }
```

The brand name should feel like it is the last word before silence. Give it the most dramatic entrance.

### 7.2 Brand Name — Letter-by-Letter Entrance

Split "DASYANTE" into individual `motion.span` characters and stagger each letter:

```
Each letter:
  initial: { opacity: 0, y: 30, rotateX: 90 }
  animate: { opacity: 1, y: 0, rotateX: 0 }
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }
```

Set `perspective: 400px` on the parent container for the `rotateX` to be visible. The effect is that each letter flips up into place. Understated when done slowly. Extraordinary at `staggerDelay: 0.06`.

### 7.3 Email Input — Focus State

On focus, the input border transitions from `var(--border-subtle)` to `var(--border-focus)` with a simultaneous gold glow beneath it.

```css
input:focus {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 1px var(--accent-gold-dim), 0 4px 24px var(--accent-gold-dim);
  transition: all 0.3s ease;
}

input {
  caret-color: var(--accent-gold);
}
```

The caret inside the input is gold. This is a small detail that registers subconsciously and ties the form to the brand colour.

### 7.4 Submit Button — Micro-interaction

The CTA button text is "Join the Waitlist" in DM Sans, uppercase, 12px, tracked wide.

On hover: the button does not change colour. Instead, a thin gold underline animates in from left to right using a `::after` pseudo-element with `transform: scaleX(0)` to `scaleX(1)`, `transform-origin: left`, `transition: 0.35s ease`.

On successful submit: use Framer Motion's `AnimatePresence` to swap the button text. The current text exits with `opacity: 0, y: -8` and "You're in." enters with `opacity: 1, y: 0`. Duration 0.4s.

### 7.5 Custom Cursor (Desktop Only)

Replace the default cursor with a 6px filled circle in `var(--accent-gold)` at 80% opacity. On hover over interactive elements (input, button), it expands to 28px and becomes hollow — border only, transparent fill. Track `mousemove` via a `useEffect` listener and update position with `transform: translate()` for GPU compositing, not `top/left`. Add a `spring: { stiffness: 120, damping: 18 }` so it trails slightly behind the real cursor.

This single detail elevates the page from "nice website" to "I remember this website."

### 7.6 Background Orb — Mouse Parallax

The hero glow div should respond gently to mouse movement. On `mousemove`, apply Framer Motion's `useMotionValue` and `useTransform` to shift the orb by at most ±30px in X and ±20px in Y. Dampen the movement with `spring: { stiffness: 40, damping: 30 }`. This is barely perceptible but creates a sense of physical depth that the brain registers without being able to articulate.

---

## 8. The Email Form — Detailed Spec

The form is the entire reason the page exists. Treat it accordingly.

### Layout

On desktop: a single row — `[email input ————————————————] [Join the Waitlist]`
On mobile: stacked vertically, full width for both elements.

Input width on desktop: `min(480px, 60vw)`
The button sits flush to the right of the input with no gap — they should read as a single unified element.

### Input Styling

```
Background:       transparent
Border:           1px solid var(--border-subtle)
Border-radius:    0  — No rounded corners. This is not a SaaS product.
Padding:          14px 20px
Font:             DM Sans, 14px, weight 300
Color:            var(--text-primary)
Placeholder:      "your@email.com" — lowercase, no instruction text
```

No label above the input. No asterisk. No "Enter your email" copy. The placeholder is the entire instruction.

### Button Styling

```
Background:       transparent
Border:           1px solid var(--border-subtle)
Border-left:      none  — connects seamlessly to the input
Padding:          14px 28px
Font:             DM Sans, 12px, weight 400, uppercase, letter-spacing: 0.18em
Color:            var(--accent-gold)
```

The button has no background fill. The gold text is the only element of colour in this section of the page.

### Validation and Error States

Do not show inline validation until after the first submit attempt. On error (invalid email), the input border transitions to a warm amber — not red. Red is jarring. Use `#8B5A2B` at 60% opacity. The error message appears below the form in DM Sans, 11px, `var(--text-secondary)`, with a Framer Motion fade-in (`opacity: 0` to `1`, `y: 4` to `0`).

On success: the entire form dissolves with `opacity: 0, y: -10` and a confirmation line appears in Cormorant Garamond, italic, 22px, warm white — "You're on the list."

---

## 9. Copy — Exact Text

Every word on this page matters. There are not many of them.

**Brand Name (Lovelo, hero):**
DASYANTE

**Tagline (Cormorant Garamond, Light):**
Curated jewellery. Trusted brands. One place.

**Sub-tagline (DM Sans, small, secondary colour — optional):**
A new way to discover demi-fine jewellery — launching soon.

**Input placeholder:**
your@email.com

**Button:**
Join the Waitlist

**Success confirmation:**
You're on the list.

**Footer strip (DM Sans, 11px, tertiary colour):**
DASYANTE — A curated marketplace for demi-fine jewellery          2025

No other copy. No feature lists. No brand logos. No social proof blurbs. Nothing. The restraint is the brand statement.

---

## 10. Component File Structure

```
/app
  layout.tsx              — Root layout, fonts, metadata, custom cursor
  page.tsx                — Main landing page composition

/components
  /landing
    HeroSection.tsx       — Brand name + tagline + form wrapper
    WaitlistForm.tsx      — Email input + submit + state transitions
    FooterStrip.tsx       — Bottom text row
  /ui
    CustomCursor.tsx      — Global cursor tracker component
    GrainOverlay.tsx      — Fixed noise texture layer
    HeroGlow.tsx          — Radial background orb with parallax

/lib
  fonts.ts                — next/font declarations (Lovelo local, Cormorant, DM Sans)

/styles
  globals.css             — CSS variables, body reset, grain overlay

/public
  fonts/
    Lovelo-Black.woff2
  noise.png               — Pre-generated grain texture

/app/api
  /waitlist
    route.ts              — POST handler, email validation, DB write or API call
```

---

## 11. Performance and Technical Requirements

**Core Web Vitals targets:** LCP under 1.2s, CLS of 0, INP negligible.

**Font strategy:** Lovelo as `next/font/local` with `preload: true`. Cormorant and DM Sans via `next/font/google` with `display: 'swap'` and only the specific weights needed. Never load full font families.

**Animation performance:** All Framer Motion animations must use `transform` and `opacity` only — these are GPU-composited. Never animate `height`, `width`, `top`, `left`, or `margin` directly. The parallax orb and custom cursor must use `transform: translate()` exclusively.

**Graceful degradation:** The static HTML should render correctly without JavaScript. Animations are enhancement only. The form should degrade to a standard HTML submit.

**Metadata in `layout.tsx`:**
```tsx
export const metadata = {
  title: 'Dasyante — Coming Soon',
  description: 'A curated marketplace for demi-fine jewellery. Join the waitlist.',
  openGraph: {
    title: 'Dasyante',
    description: 'Curated jewellery. Trusted brands. One place.',
  }
}
```

Generate the OG image as a static 1200x630 PNG — black background, "DASYANTE" centred in Lovelo, tagline below in Cormorant. This ensures the link preview on WhatsApp and Instagram DMs looks like the brand from day one.

---

## 12. Responsive Behaviour

**Desktop (above 1024px):**
Full layout as described. Custom cursor active. Parallax orb active. Letter-by-letter entrance animation.

**Tablet (768px to 1024px):**
Single-column centred layout. Form stacks. Tagline font size scales down via `clamp`. Custom cursor stays.

**Mobile (below 768px):**
Form is full-width stacked. Brand name scales to fit viewport width with `clamp(36px, 12vw, 64px)`. Parallax orb disabled — replace with a static centred glow. No custom cursor.

---

## 13. What to Avoid

These are as important as what to do.

- No hero image or background photograph. The emptiness is intentional.
- No gradient text on the brand name. Lovelo in flat warm white is enough.
- No animated counting numbers such as "1,247 people on the waitlist." This cheapens it.
- No modal or popup of any kind.
- No sticky header, hamburger menu, or navigation links.
- No testimonials, quote blocks, or social proof.
- No feature grid, bullet list, or "How it works" section on the waitlist page.
- No floating shapes, abstract blobs, or generative art backgrounds.
- Never use pure `#000000` black or pure `#FFFFFF` white. The warmth in `#0A0A0A` and `#F5F0EB` is everything.
- Never use `border-radius` on the input or button. It signals SaaS, not jewellery.
- Never use Inter, Roboto, or any system font. They are invisible and forgettable.

---

## 14. The One Thing to Get Right

If every other decision on this page is wrong but this one is right, the page still works:

**The brand name, DASYANTE, in Lovelo, at scale, on a dark background, with the gold glow behind it, must feel like it belongs on the wall of a concept store in Paris.**

Every other decision on this page exists to protect and frame that single moment.

---

*Dasyante Pre-Launch — Document v1.0*
