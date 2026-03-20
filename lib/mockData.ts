// Mock data structures for Dasyante marketplace

export interface Product {
  id: string
  name: string
  brand: string
  price: number
  images: string[]
  story: {
    whyExists: string
    whoItsFor: string
    whenToWear: string
  }
  description: string
  materials: string[]
  dimensions?: string
  weight?: string
  occasions: string[]
  style: string[]
  collectionId: string
  storyTag: string
  pairsWith?: string[]
}

export interface Collection {
  id: string
  title: string
  slug: string
  narrative: string
  description: string
  tags: string[]
  productCount: number
  coverImage: string
  whyThisCollection: string
}

export interface Brand {
  id: string
  name: string
  slug: string
  founderStory: string
  philosophy: string
  signatureStyle: string
  whatMakesThemUnique: string
  tagline: string
  logo: string
  coverImage: string
}

export interface Story {
  id: string
  title: string
  slug: string
  category: 'how-to-choose' | 'what-this-means' | 'avoid-mistake'
  excerpt: string
  content: string
  image: string
  readTime: number
  publishedAt: string
}

// Mock Collections Data
export const mockCollections: Collection[] = [
  {
    id: '1',
    title: 'Indian Minimalism',
    slug: 'indian-minimalism',
    narrative: 'Where understated Indian craft meets modern demi-fine jewellery. Pieces made to be worn every day, not stored.',
    description: 'Curated sterling silver pieces from Indian designers — handcrafted with traditional techniques, finished for contemporary life.',
    tags: ['Sterling Silver', 'Demi-Fine', 'Indian Craft'],
    productCount: 5,
    coverImage: '/collection.png',
    whyThisCollection: 'Indian jewellery has always known restraint — it\'s there in jadau work, in delicate moissanite settings, in the weight of a single gemstone. This collection gathers that sensibility into five pieces that wear lightly and mean quietly.'
  }
]

// Mock Products Data
export const mockProducts: Product[] = [
  {
    id: '6',
    name: 'Luna Pearl Drop Necklace',
    brand: 'White Velvet',
    price: 0,
    images: ['/6.webp'],
    story: {
      whyExists: 'A single pearl suspended beneath a CZ accent — the kind of necklace that finishes an outfit without competing with it.',
      whoItsFor: 'You want something with a little femininity but not too much. A piece that reads refined at a distance and delicate up close.',
      whenToWear: 'Every day or for soft occasion wear. It sits well under a collar or over a simple neckline.'
    },
    description: 'A minimalist necklace in 925 hallmarked sterling silver with a rose gold finish. Features a single luminous synthetic pearl beneath a sparkling cubic zirconia accent, on an adjustable box chain.',
    materials: ['925 Sterling Silver', 'Rose gold finish', 'Synthetic pearl', 'Cubic zirconia'],
    occasions: ['Daily', 'Occasion'],
    style: ['Minimal', 'Feminine'],
    collectionId: '1',
    storyTag: 'Luminous, quietly feminine',
    pairsWith: ['Dew Drop Elegance Kada', 'Inaya Polki Chain Necklace']
  },
  {
    id: '2',
    name: 'Inaya Polki Chain Necklace',
    brand: 'Nuvi Jewels',
    price: 0,
    images: ['/2.webp'],
    story: {
      whyExists: 'Five drop-shaped moissanites that move with you. This necklace was made for the person who wants something refined, not something that asks for attention.',
      whoItsFor: 'For brunches, casual outings, light occasion wear. You want subtle sparkle — jewellery that rewards closer looking.',
      whenToWear: 'When you want to feel put together without trying. Weekend lunches, work calls, low-key celebrations.'
    },
    description: 'A delicate chain necklace in 925 sterling silver with a gold-plated finish. Adorned with five bezel-set drop-shaped Belur moissanite stones for subtle sparkle and graceful movement. Handcrafted — each piece slightly unique.',
    materials: ['925 Sterling Silver', 'Gold-plated finish', 'Belur moissanite'],
    occasions: ['Daily', 'Occasion'],
    style: ['Minimal', 'Refined'],
    collectionId: '1',
    storyTag: 'Subtle sparkle, graceful movement',
    pairsWith: ['White Juliette Earrings', 'Jhilmil Chain Bracelet']
  },
  {
    id: '3',
    name: 'Jhilmil Chain Bracelet',
    brand: 'Nuvi Jewels',
    price: 0,
    images: ['/3.webp'],
    story: {
      whyExists: 'Traditional jadau detailing on a slender modern chain. The green aventurine grounds it — it reads as minimal until you look closely.',
      whoItsFor: 'You appreciate craft but don\'t want it announced. You want a bracelet that starts a conversation only when someone leans in.',
      whenToWear: 'Daily. Layer it or wear it alone — either way it holds its own.'
    },
    description: 'A minimal bracelet in 925 sterling silver with 22-carat gold plating. Features a slender chain design accented with green aventurine and handcrafted white jadau detailing. Each piece is handmade and one of a kind.',
    materials: ['925 Sterling Silver', '22k Gold plating', 'Green aventurine', 'Handcrafted jadau'],
    occasions: ['Daily'],
    style: ['Fusion', 'Minimal'],
    collectionId: '1',
    storyTag: 'Traditional craft, modern wrist',
    pairsWith: ['White Juliette Earrings', 'Inaya Polki Chain Necklace']
  },
  {
    id: '4',
    name: 'Amour 0.96ct Pear Moissanite Twin Solitaire Necklace',
    brand: 'Idhani',
    price: 0,
    images: ['/4.webp'],
    story: {
      whyExists: 'Two pear-shaped moissanites, lab-certified and high-brilliance, set simply. For people who want the look of luxury without the compromise on material or ethics.',
      whoItsFor: 'You know what you want. You\'ve looked at diamonds, you\'ve done the research, and you chose moissanite intentionally.',
      whenToWear: 'Every day, or every special day. Thick plating and a lifetime stone warranty mean this one grows with you.'
    },
    description: 'A minimalist luxury necklace featuring two pear-shaped moissanite stones totaling 0.96 carats, set in 925 sterling silver. High brilliance, lab-certified stones with thick durable plating. Backed by a lifetime stone warranty.',
    materials: ['925 Sterling Silver', 'Lab-certified moissanite (0.96ct)', 'Thick durable plating'],
    occasions: ['Daily', 'Occasion'],
    style: ['Minimal', 'Luxury'],
    collectionId: '1',
    storyTag: 'Intentional luxury',
    pairsWith: ['White Juliette Earrings', 'Aquamarine Ring']
  },
  {
    id: '7',
    name: 'Dew Drop Elegance Kada',
    brand: 'White Velvet',
    price: 0,
    images: ['/7.webp'],
    story: {
      whyExists: 'An open cuff with twin teardrop motifs in micro-pavé CZ — substantial enough to notice, light enough to forget you\'re wearing it.',
      whoItsFor: 'You want a bracelet that works with both a linen shirt and a formal kurta. Something adjustable, versatile, and worth keeping.',
      whenToWear: 'Casual days and dressed-up ones. The open structure means it fits most wrists and slides on without ceremony.'
    },
    description: 'A refined adjustable cuff in 925 hallmarked sterling silver with rose gold plating. Open-ended with twin teardrop motifs encrusted in micro-pavé cubic zirconia. Lightweight and versatile.',
    materials: ['925 Sterling Silver', 'Rose gold plating', 'Micro-pavé cubic zirconia'],
    occasions: ['Daily', 'Occasion'],
    style: ['Minimal', 'Refined'],
    collectionId: '1',
    storyTag: 'Grace, adjustable',
    pairsWith: ['Luna Pearl Drop Necklace', 'Jhilmil Chain Bracelet']
  }
]

// Mock Brands Data
export const mockBrands: Brand[] = [
  {
    id: '4',
    name: 'White Velvet',
    slug: 'white-velvet',
    tagline: 'Rose gold softness, sterling precision',
    founderStory: 'White Velvet was built around a single material pairing: 925 hallmarked sterling silver with a rose gold finish. Soft, warm, and feminine — but hallmarked, durable, and properly made.',
    philosophy: 'Feminine jewellery doesn\'t have to sacrifice quality. White Velvet uses 925-certified silver as the base for every piece, finished in rose gold plating that holds. CZ stones set with care, not as afterthoughts.',
    signatureStyle: 'Pearl drops, teardrop motifs, open cuffs with pavé detailing. Pieces that read soft at a glance but hold up in daily wear.',
    whatMakesThemUnique: 'Every piece is hallmarked 925 — not just described as silver. The rose gold finish is a deliberate aesthetic choice, not a cost-cutting substitute for yellow gold.',
    logo: '/white-velvet-logo.avif',
    coverImage: '/home1.jpg'
  },
  {
    id: '2',
    name: 'Nuvi Jewels',
    slug: 'nuvi-jewels',
    tagline: 'Handcrafted. One of a kind.',
    founderStory: 'Nuvi Jewels started as a small workshop making gold-plated silver pieces with traditional Indian detailing. The founding principle: that handcrafted jewellery should feel personal — slight variations are not flaws, they\'re the point.',
    philosophy: 'Every piece from Nuvi Jewels is made by hand, which means no two are identical. They use 925 sterling silver as a base, finished with 22-carat gold plating and accented with jadau work and semi-precious stones.',
    signatureStyle: 'Slender chains with jadau accents, bezel-set moissanite drops, and delicate bracelet designs that blend Indian craft traditions with contemporary silhouettes.',
    whatMakesThemUnique: 'The handcraft is real — natural variations in jadau work and stone placement make each piece unique. They don\'t try to hide this; they name it.',
    logo: '/nuvi-jewels-logo.avif',
    coverImage: '/home_2.jpg'
  },
  {
    id: '3',
    name: 'Idhani',
    slug: 'idhani',
    tagline: 'Minimalist luxury, without compromise',
    founderStory: 'Idhani was founded by people who had grown tired of choosing between beautiful jewellery and responsible materials. Lab-certified moissanite offered a path: the same brilliance as a diamond, with full traceability and no ethical ambiguity.',
    philosophy: 'Luxury should be intentional. Idhani designs around lab-certified moissanites — stones with measurable, consistent quality — set in 925 sterling silver with thick, durable plating. Backed by a lifetime stone warranty because they mean it.',
    signatureStyle: 'Twin solitaires, pear settings, and clean geometric necklace forms. Pieces that look like an edit, not an accumulation.',
    whatMakesThemUnique: 'A lifetime stone warranty on every piece. They stand behind the quality of every moissanite they set — if a stone ever clouds or chips, they replace it.',
    logo: '/idhani-logo.avif',
    coverImage: '/PreciousMetals_1.jpg'
  }
]

// Mock Stories Data
export const mockStories: Story[] = [
  {
    id: '1',
    title: 'Indian Minimalism — Issue One',
    slug: 'indian-minimalism-issue-one',
    category: 'what-this-means',
    excerpt: 'She grew up around tradition. Temple bells. Heirloom gold. Her mother\'s jewellery box — heavy with history, dense with meaning, beautiful in a way that asked something of you before you could wear it. Her life today is different. This is our first conversation with her.',
    content: `## Editor's Note

She grew up around tradition. Temple bells. Heirloom gold. Her mother's jewellery box — heavy with history, dense with meaning, beautiful in a way that asked something of you before you could wear it.

Her life today is different. Faster. Lighter. More her own. She didn't stop loving what she came from. She just needed jewellery that could keep up with who she became.

We looked at the Indian jewellery landscape and saw two worlds that refused to speak to each other — maximalist bridal abundance on one side, imported western minimalism on the other. And in between: a real woman, living a real life, with almost no one making something specifically for her.

This is our first conversation with her.

Indian Minimalism is our opening profile — a curation of brands and pieces that understand restraint as craft, not compromise. That know a single clean line can carry as much weight as a room full of gold. That believe the most powerful jewellery is the kind that feels like it was always yours.

We are not a trend. We are a return.

— The Dasyante Team

## What Indian Minimalism Actually Means

Pieces that whisper, not shout.

Minimalism, in the Western canon, is often a rejection. A clearing out. Whiteness. Absence. The idea that beauty lives in what you remove.

Indian aesthetics have never worked that way. In India, every motif carries memory. A lotus isn't decoration — it's cosmology. A geometric border isn't ornament — it's centuries of craft vocabulary.

Indian Minimalism is not the absence of India. It is India, distilled.

### ROOTEDNESS

Forms borrowed from temple architecture, geometric manuscript borders, tribal silver traditions — simplified until only the essential remains. The reference is Indian. The execution is spare. This is not fusion. This is inheritance, edited.

### MATERIALITY

925 sterling silver. Moissanite. Semi-precious stone. Gold vermeil. These brands are not making costume jewellery. They are making considered objects — things meant to last, to be worn daily, to acquire meaning through use. A ring that feels like second skin. A chain that disappears into your collarbone and belongs there.

### WEARABILITY WITHOUT OCCASION

This is perhaps the most radical part. Indian Minimalism refuses the idea that Indian jewellery requires an event. These pieces move with her — from morning coffee to late-night conversations, from work meetings to wedding functions. No occasion required. Just a life.

## The Edit — Six Pieces, One Story

### Idhani

**Amour 0.96 ct Pear Moissanite Twin Solitaire Necklace — 925 Silver · Gold Vermeil**

Two pear-cut moissanites. One clean chain. No excess. This is the piece Indian minimalism was made for — the brilliance of a diamond, the honesty of silver, worn to a Monday meeting and a Saturday wedding without changing. The twin solitaire isn't decoration. It's a quiet declaration.

Why we chose it: Moissanite carries the fire of a gemstone without the weight of occasion. This necklace belongs to the woman who stopped waiting for a reason to wear something beautiful.

### White Velvet

**Luna Pearl Drop Necklace — 925 Silver · Rose Gold**

A single pearl. A box chain that disappears into the collarbone. Nothing more. The Luna doesn't ask for attention — it already has it. Pearl has been Indian for centuries, worn by queens and grandmothers alike. White Velvet gives it back to the everyday woman, in silver, at a price that doesn't ask her to choose.

Why we chose it: Because a pearl on a clean chain is perhaps the oldest form of Indian minimalism. This piece remembers that without being nostalgic about it.

### Nuvi Jewels

**Jhilmil Chain Bracelet — 925 Silver · 22K Gold Plated**

Green aventurine. White jadau. A chain that moves like water. The Jhilmil is Indian craft vocabulary worn on the wrist — temple geometry, tribal stone-setting, reduced to a single delicate bracelet. Nothing is decorative here. Everything means something.

Why we chose it: Because it carries centuries of Indian craft tradition without the weight of it. A bracelet you wear to work on Tuesday and forget you're wearing — until someone asks.

### White Velvet

**Dew Drop Elegance Kada — 925 Silver · Rose Gold**

An open bangle. Two dew drops in pavé. A circle that doesn't close — and doesn't need to. The kada is perhaps India's oldest jewellery form. White Velvet strips it to its bones — one clean arc of rose gold silver, two stone-set ends, nothing between them. Worn alone it whispers. Stacked it still whispers.

Why we chose it: The kada has always been Indian. This one just stopped trying to prove it.

### Idhani

**Luna 1.75 ct Pear Moissanite Solitaire Ring — 925 Silver · Gold Vermeil**

One pear. Three stones. A ring that looks like it belongs on a hand that knows what it wants. The Luna sits at the intersection of Indian bridal memory and modern daily wear. Pear-cut moissanite — the shape of a teardrop, the weight of nothing. You don't save this ring for occasions. You wear it and the occasion comes to you.

Why we chose it: Because Indian women deserve a solitaire that doesn't cost a year's salary or require a reason. Idhani made that possible.

### Nuvi Jewels

**Inaya Polki Chain Necklace — 925 Silver · Gold Plated · Bezel-set Moissanite**

Five drops of light. One clean chain. Worn against an ivory kurta at noon. The Inaya doesn't announce itself — it catches the light at the right moment and disappears again. Polki-inspired stones in a modern bezel setting. Indian reference, contemporary restraint.

Why we chose it: Polki has always been India's most intimate jewellery — not for show, but for the woman herself. Nuvi brings that sensibility into everyday silver. This is heirloom thinking at a wearable scale.`,
    image: '/story-cover.png',
    readTime: 12,
    publishedAt: '2026-03-21'
  }
]

// Helper functions to get data
export function getCollectionBySlug(slug: string): Collection | undefined {
  return mockCollections.find(c => c.slug === slug)
}

export function getProductsByCollectionId(collectionId: string): Product[] {
  return mockProducts.filter(p => p.collectionId === collectionId)
}

export function getProductById(id: string): Product | undefined {
  return mockProducts.find(p => p.id === id)
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return mockBrands.find(b => b.slug === slug)
}

export function getStoryBySlug(slug: string): Story | undefined {
  return mockStories.find(s => s.slug === slug)
}

export function getStoriesByCategory(category?: string): Story[] {
  if (!category || category === 'all') return mockStories
  return mockStories.filter(s => s.category === category)
}
