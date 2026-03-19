# Media Asset Guidelines for Dasyante

This document outlines the ideal media assets for each placeholder in the Dasyante website. Replace these placeholders with high-quality, professionally shot content that aligns with our luxury brand aesthetic.

---

## Current Placeholders

### 1. `/public/IMG_5181.jpg` (Static Image)
**Current Usage:** Hero background, collection covers, product images, philosophy section, brand logos

### 2. `/public/4910096-hd_1920_1080_30fps.mp4` (Video)
**Current Usage:** Video showcase section on homepage

---

## Detailed Replacement Guidelines

### Hero Section (`components/home/Hero.tsx`)
**Current:** `/IMG_5181.jpg`

**Ideal Replacement:**
- **Type:** High-resolution photograph (minimum 2400x1350px)
- **Subject:** Close-up of jewellery in a lifestyle context
  - Examples: Hands wearing rings naturally, necklace on a model in soft lighting, earrings in an editorial setup
- **Mood:** Elegant, cinematic, slightly moody
- **Lighting:** Natural or studio lighting with soft shadows
- **Color Palette:** Warm tones, muted backgrounds to allow white text overlay
- **Composition:** Center-focused with negative space for text overlay
- **Style:** Editorial fashion photography, not e-commerce catalog shots
- **Avoid:** Busy backgrounds, harsh lighting, overly product-focused shots

---

### Collection Cover Images (`lib/mockData.ts` - `coverImage` fields)
**Current:** `/IMG_5181.jpg` (used for all 4 collections)

**Ideal Replacement (4 unique images needed):**

#### Collection 1: "Quiet Gold for Everyday Identity"
- **Subject:** Minimal gold jewellery worn in a daily context (coffee shop, workspace, natural setting)
- **Mood:** Effortless, understated, lived-in elegance
- **Example:** Close-up of hands with thin band rings, shot in natural light

#### Collection 2: "Statement Pieces for Considered Moments"
- **Subject:** Bold, sculptural jewellery on a model or styled dramatically
- **Mood:** Confident, striking, memorable
- **Example:** Large cuff bracelet or statement earrings with dramatic lighting

#### Collection 3: "Fusion: Where Tradition Meets Now"
- **Subject:** Contemporary jewellery with cultural motifs in a modern setting
- **Mood:** Bridging heritage and modernity
- **Example:** Lotus-inspired earrings on a model in contemporary clothing

#### Collection 4: "Gifts That Won't Be Forgotten"
- **Subject:** Jewellery in a gifting context (elegant packaging, hands exchanging a piece)
- **Mood:** Thoughtful, intimate, meaningful
- **Example:** Beautifully wrapped jewellery box or hands holding a delicate piece

**Specifications:**
- Aspect ratio: 3:4 (vertical/portrait)
- Minimum resolution: 1200x1600px
- Format: JPG or WebP
- File size: Keep under 500KB for web performance

---

### Product Images (`lib/mockData.ts` - `images` fields)
**Current:** `/IMG_5181.jpg` (used for all products)

**Ideal Replacement (5 products x 2-3 images each = 10-15 unique images):**

#### For Each Product:
1. **Main Image:** Clean product shot on neutral background
   - White or light grey background
   - Professional lighting showing texture and detail
   - Square aspect ratio (1:1)
   - Minimum 1200x1200px

2. **Lifestyle Image:** Product worn/styled in context
   - Model wearing the piece naturally
   - Lifestyle setting (not studio)
   - Shows scale and how piece looks when worn

3. **Detail Shot (optional):** Close-up of craftsmanship
   - Macro photography showing texture, engraving, or unique details
   - Highlights materials and quality

**Style Guidelines:**
- Clean, minimal aesthetic
- Consistent lighting across all products
- High contrast for gold to pop against background
- No harsh shadows
- Show true color and finish of materials

---

### Video Showcase (`components/home/VideoShowcase.tsx`)
**Current:** `/4910096-hd_1920_1080_30fps.mp4`

**Ideal Replacement:**
- **Duration:** 30-60 seconds (looping video)
- **Resolution:** Minimum 1920x1080px (Full HD), prefer 4K if possible
- **Frame Rate:** 24-30fps
- **Format:** MP4 (H.264 codec for web compatibility)
- **File Size:** Under 20MB (optimize for web)

**Content Options:**
1. **Craftsmanship B-Roll:**
   - Close-ups of hands working on jewellery
   - Artisan at work (filing, polishing, setting stones)
   - Slow-motion shots of tools, materials, process
   - No faces needed—focus on hands and craft

2. **Lifestyle Montage:**
   - Models wearing jewellery in various elegant settings
   - Slow camera movements (pans, slides, dolly shots)
   - Soft, cinematic color grading
   - Natural movements (hands adjusting a ring, touching a necklace)

3. **Product Hero Video:**
   - 360° rotation of hero product on turntable
   - Dramatic lighting revealing details
   - Macro shots showing texture and craftsmanship
   - Slow-motion for added luxury feel

**Mood & Style:**
- Cinematic, not commercial
- Warm color grading (slightly desaturated, film-like)
- Slow movements (no quick cuts)
- Natural or studio lighting (no harsh fluorescents)
- Minimal or no text overlay needed
- Background music not required (video will be muted on site)

**Technical Requirements:**
- Aspect ratio: 16:9 (horizontal)
- No watermarks or branding
- Smooth, professional editing
- Color-corrected and graded
- Audio not required (will be muted)

---

### Philosophy Section (`components/home/PhilosophySection.tsx`)
**Current:** `/IMG_5181.jpg`

**Ideal Replacement:**
- **Subject:** Behind-the-scenes or founder/team imagery
  - Examples: Founder curating pieces, team selecting inventory, hands sorting through jewellery samples
- **Mood:** Authentic, thoughtful, intentional
- **Aspect Ratio:** Square (1:1)
- **Minimum Resolution:** 1200x1200px
- **Style:** Documentary-style, slightly editorial
- **Avoid:** Overly posed shots, stock photo aesthetic

---

### Brand Logos/Covers (`lib/mockData.ts` - Brand `logo` and `coverImage`)
**Current:** `/IMG_5181.jpg` (used for all 3 brands)

**Ideal Replacement (6 images needed: 3 logos + 3 covers):**

#### Logos (3 needed):
- Clean, vector-based brand logos
- Transparent background (PNG format)
- Minimum 400x400px
- Should work on both light and dark backgrounds

#### Cover Images (3 needed):
- Wide, cinematic brand hero shots
- Aspect ratio: 16:9 or 21:9 (horizontal)
- Minimum resolution: 1920x1080px
- Represents brand aesthetic and philosophy
- Could be: Workshop imagery, founder portrait, signature product styling

---

### Story Article Images (`lib/mockData.ts` - Story `image` fields)
**Current:** `/IMG_5181.jpg` (used for all 3 articles)

**Ideal Replacement (3 images needed):**

#### Article 1: "How to Build a Jewellery Collection"
- Flat lay of various jewellery pieces showing a curated collection
- Organized, minimal styling on neutral background

#### Article 2: "What Gold Purity Actually Means"
- Close-up of different gold pieces showing color variations (18k vs 22k)
- Educational, comparative imagery

#### Article 3: "Buying Jewellery in the Wrong Scale"
- Side-by-side comparison showing scale differences
- Model wearing different scales of jewellery for comparison

**Specifications:**
- Aspect ratio: 16:9 (horizontal)
- Minimum resolution: 1920x1080px
- Format: JPG or WebP
- Clear, informative, editorial style

---

## General Photography Guidelines

### Do:
- Use natural, soft lighting when possible
- Shoot in high resolution (minimum 1920px on shortest side)
- Maintain consistent color grading across all images
- Show jewellery in realistic, aspirational contexts
- Capture texture, detail, and craftsmanship
- Use models that represent your target audience
- Keep backgrounds simple and uncluttered
- Show true-to-life colors of metals and stones

### Don't:
- Use stock photography that feels generic
- Over-edit or heavily filter images
- Use harsh, unflattering lighting
- Shoot only product shots (need lifestyle context)
- Include busy, distracting backgrounds
- Use inconsistent styling across images
- Compress images too much (maintain quality)

---

## Optimization Guidelines

Before uploading final assets:
1. **Resize** to recommended dimensions
2. **Compress** using tools like TinyPNG or Squoosh (aim for <300KB for images, <20MB for video)
3. **Convert** to WebP format where supported for better performance
4. **Rename** files descriptively (e.g., `hero-minimal-rings.jpg` not `IMG_5181.jpg`)
5. **Test** on retina displays to ensure quality

---

## Priority Replacement Order

If replacing assets incrementally, prioritize in this order:
1. **Hero image** (most visible, sets entire brand tone)
2. **Video showcase** (high-impact, engaging content)
3. **Collection cover images** (4 images, key navigation)
4. **Product main images** (5 images minimum for featured products)
5. **Philosophy section image** (brand authenticity)
6. **Story article images** (3 images, content depth)
7. **Brand logos/covers** (6 images, brand partnerships)
8. **Product lifestyle/detail shots** (enhanced product pages)

---

## File Naming Convention

Use this structure for organized asset management:
- Hero: `hero-[description].jpg` (e.g., `hero-gold-rings-hands.jpg`)
- Collections: `collection-[slug]-cover.jpg` (e.g., `collection-quiet-gold-cover.jpg`)
- Products: `product-[id]-[variant].jpg` (e.g., `product-1-main.jpg`, `product-1-lifestyle.jpg`)
- Video: `video-[description].mp4` (e.g., `video-craftsmanship-broll.mp4`)
- Brands: `brand-[slug]-[type].jpg` (e.g., `brand-minimal-studio-logo.png`)

---

## Need Help Sourcing Assets?

Consider these options:
1. **Professional Photoshoot:** Hire a jewelry/fashion photographer
2. **Unsplash/Pexels:** Free high-quality stock (ensure commercial license)
3. **Adobe Stock:** Premium stock photography with jewelry-specific searches
4. **Local Artisans:** Collaborate with jewelers for authentic craftsmanship shots
5. **User-Generated Content:** Request high-quality photos from early customers (with permission)

---

*Last Updated: March 2026*
