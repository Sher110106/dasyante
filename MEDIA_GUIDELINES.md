# Dasyante — Media Guidelines

All current placeholders use `/IMG_5181.jpg` and the brand video.
Replace each slot with the recommended shot type below.

---

## 1. Hero — Orbital Carousel (`components/home/OrbitalCarousel.tsx`)

8 cards orbit the center text. Replace each `src` in the `ITEMS` array.

| Slot | Type | Recommended Shot | Mood |
|------|------|-----------------|------|
| 0 | Image | Close-up of a sterling silver ring on fingertip | Intimate, textured |
| 1 | Image | Layered silver chain necklace against bare skin | Minimal, tonal |
| 2 | **Video** | Short loop of a silver bangle being worn / moving | Kinetic, aspirational |
| 3 | Image | Architectural silver earring, clean dark background | Editorial |
| 4 | Image | Flat lay of 3 silver pieces on dark stone surface | Still life |
| 5 | Image | Hand wearing multiple rings, soft warm light | Lifestyle |
| 6 | Image | Portrait — woman in silver choker, looking away | Character-led |
| 7 | Image | Macro of hallmark / silver surface texture | Craft, detail |

**Image specs:** JPG or WebP · ~300×400px portrait (component crops) · sRGB
**Video (slot 2):** MP4 H.264 · 8–15s seamless loop · muted autoplay · min 720×960px
**Tip:** Dark or warm mid-tone backgrounds read best against `#0F0F0F`

---

## 2. Works Grid — "Begin the Journey" (`components/home/WorksGrid.tsx`)

4 full-bleed editorial images. Most prominent images on the site.

| Slot | Title | Subtitle | Recommended Shot |
|------|-------|----------|-----------------|
| 0 | Sculptural Silver | She grew up around tradition | Woman in traditional Indian setting wearing heavy silver |
| 1 | Everyday Layers | She chooses what feels like her | Modern woman with layered silver chains and a blazer |
| 2 | Soft Minimal | But her life today is different | Soft side-lit portrait, single minimal silver piece |
| 3 | Statement Silence | Jewellery that moves with her | Motion shot — silver cuff or earrings mid-movement |

**Specs:** JPG or WebP · min 800×1000px portrait · must read under a dark bottom gradient
**Tip:** Avoid light/white images. Mid-to-dark tones work best with the text overlay.

---

## 3. Philosophy Section (`components/home/PhilosophySection.tsx`)

- Portrait of founder/maker working, or close-up of hands holding a silver piece
- Square or 4:3 · min 800×800px

---

## 4. About Page Hero (`app/about/page.tsx`)

- Wide editorial: artisan workshop, or a curated still life of the brand aesthetic
- Landscape or 3:2

---

## 5. Contact Page (`app/contact/page.tsx`)

- Elegant close-up: single silver piece on dark surface or in hand
- Portrait 0.75 ratio · min 600×800px

---

## 6. Video Showcase (`components/home/VideoShowcase.tsx`)

Replace `/4910096-hd_1920_1080_30fps.mp4` with a brand film.

- 60–90 second brand film: craftsmanship, styling, jewellery in motion
- MP4 H.264 · 1920×1080 min · has audio (this player is unmuted)

---

## General Rules

1. **Backgrounds**: Dark or warm mid-tones always. No pure white studio shots.
2. **Palette**: Warm skin tones, aged silver, dark stone, linen all work with `#C9A96E` gold.
3. **No text on images**: All text is CSS overlays. Keep images clean.
4. **Compression**: Target < 300KB per image. Use squoosh.app or ImageOptim.
5. **Naming**: `hero-ring-01.jpg`, `works-sculptural-silver.jpg` — descriptive, no spaces.
