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
    title: 'Quiet Gold for Everyday Identity',
    slug: 'quiet-gold-everyday',
    narrative: 'For those who prefer their jewellery to whisper, not shout. Pieces that feel like they\'ve always been yours.',
    description: 'Minimal gold pieces designed for daily wear, chosen for their understated elegance and timeless appeal.',
    tags: ['Daily wear', 'Minimal', 'Understated'],
    productCount: 24,
    coverImage: '/IMG_5181.jpg',
    whyThisCollection: 'Because jewellery doesn\'t need to announce itself to matter. These pieces are for people who value presence over performance—gold that feels earned, not worn.'
  },
  {
    id: '2',
    title: 'Statement Pieces for Considered Moments',
    slug: 'statement-pieces',
    narrative: 'Bold design with intention. For occasions that deserve something memorable.',
    description: 'Distinctive pieces that command attention without losing sophistication. Each piece tells a story worth remembering.',
    tags: ['Statement', 'Occasion', 'Bold'],
    productCount: 18,
    coverImage: '/IMG_5181.jpg',
    whyThisCollection: 'Not every moment is quiet. These pieces exist for the times when you want to be remembered—celebrations, milestones, or simply because you felt like it.'
  },
  {
    id: '3',
    title: 'Fusion: Where Tradition Meets Now',
    slug: 'fusion-tradition',
    narrative: 'Contemporary designs rooted in cultural motifs. Jewellery that honors heritage without feeling dated.',
    description: 'Modern interpretations of traditional designs, crafted for those who want to carry their roots forward.',
    tags: ['Fusion', 'Cultural', 'Modern'],
    productCount: 20,
    coverImage: '/IMG_5181.jpg',
    whyThisCollection: 'Heritage shouldn\'t feel like a costume. This collection bridges the gap between where you\'re from and who you are now—tradition that feels alive, not archived.'
  },
  {
    id: '4',
    title: 'Gifts That Won\'t Be Forgotten',
    slug: 'meaningful-gifts',
    narrative: 'Pieces chosen for their ability to communicate what words can\'t. Thoughtful, never generic.',
    description: 'Curated specifically for gifting—items that show you understand the person, not just their taste.',
    tags: ['Gifting', 'Meaningful', 'Thoughtful'],
    productCount: 22,
    coverImage: '/IMG_5181.jpg',
    whyThisCollection: 'The best gifts aren\'t about price—they\'re about understanding. This collection helps you give something that feels personal, not purchased.'
  }
]

// Mock Products Data
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Thin Band Ring',
    brand: 'Minimal Studio',
    price: 8500,
    images: [
      '/IMG_5181.jpg',
      '/IMG_5181.jpg'
    ],
    story: {
      whyExists: 'For people who want to wear gold every day without thinking about it. This ring was designed to disappear into your life—never demanding attention, always quietly present.',
      whoItsFor: 'You\'re someone who values restraint over loudness. You prefer pieces that feel like they\'ve always been yours, not something you just bought.',
      whenToWear: 'Every day. With anything. That\'s the point.'
    },
    description: 'A delicate 18k gold band with a brushed finish. Stackable, comfortable, and designed to age beautifully with you.',
    materials: ['18k Yellow Gold', 'Brushed finish'],
    dimensions: '1.5mm width',
    weight: '2.1g',
    occasions: ['Daily'],
    style: ['Minimal'],
    collectionId: '1',
    storyTag: 'For quiet confidence',
    pairsWith: ['Simple gold hoops', 'Layered necklaces']
  },
  {
    id: '2',
    name: 'Sleeper Hoops',
    brand: 'Minimal Studio',
    price: 12000,
    images: [
      '/IMG_5181.jpg'
    ],
    story: {
      whyExists: 'Because you shouldn\'t have to take your earrings off. These are made to stay in—lightweight enough to forget, substantial enough to matter.',
      whoItsFor: 'For those who don\'t want jewellery to be a decision every morning. You value pieces that just work.',
      whenToWear: 'Always. Sleep in them, shower in them, forget you\'re wearing them.'
    },
    description: 'Classic huggie hoops in 18k gold with secure hinged closure. So comfortable you\'ll forget they\'re there.',
    materials: ['18k Yellow Gold', 'Hinged closure'],
    dimensions: '12mm diameter',
    weight: '1.8g',
    occasions: ['Daily'],
    style: ['Minimal'],
    collectionId: '1',
    storyTag: 'Effortless everyday',
    pairsWith: ['Thin band ring', 'Delicate chain necklace']
  },
  {
    id: '3',
    name: 'Lotus Drop Earrings',
    brand: 'Heritage House',
    price: 24000,
    images: [
      '/IMG_5181.jpg'
    ],
    story: {
      whyExists: 'Inspired by traditional lotus motifs but reimagined for now. These exist for people who want to honor their roots without feeling like they\'re wearing a costume.',
      whoItsFor: 'You appreciate where you come from but don\'t want your jewellery to feel dated. You want tradition that feels alive.',
      whenToWear: 'Celebrations, family gatherings, or whenever you want to feel rooted and modern at once.'
    },
    description: 'Contemporary lotus-inspired drop earrings in 22k gold with delicate petal detailing. Traditional craft, modern sensibility.',
    materials: ['22k Yellow Gold', 'Handcrafted'],
    dimensions: '25mm drop length',
    weight: '4.2g',
    occasions: ['Occasion', 'Daily'],
    style: ['Fusion'],
    collectionId: '3',
    storyTag: 'Heritage, reimagined',
    pairsWith: ['Simple gold bangles', 'Minimal chain']
  },
  {
    id: '4',
    name: 'Sculptural Cuff',
    brand: 'Form & Function',
    price: 32000,
    images: [
      '/IMG_5181.jpg'
    ],
    story: {
      whyExists: 'For moments when you want to be remembered. This cuff is intentionally bold—it\'s not trying to blend in.',
      whoItsFor: 'You don\'t wear jewellery to fit in. You wear it because it says something about who you are.',
      whenToWear: 'Celebrations, important meetings, or days when you need to feel like the most interesting person in the room.'
    },
    description: 'An architectural cuff bracelet with asymmetric design. Handcrafted in 18k gold with a hammered texture finish.',
    materials: ['18k Yellow Gold', 'Hammered texture', 'Adjustable fit'],
    dimensions: '60mm opening, adjustable',
    weight: '24.5g',
    occasions: ['Occasion'],
    style: ['Statement'],
    collectionId: '2',
    storyTag: 'Unapologetically bold',
    pairsWith: ['Simple rings', 'Minimal earrings']
  },
  {
    id: '5',
    name: 'Delicate Chain Necklace',
    brand: 'Minimal Studio',
    price: 15000,
    images: [
      '/IMG_5181.jpg'
    ],
    story: {
      whyExists: 'The perfect layering piece. Designed to work with everything you already own and everything you\'ll buy next.',
      whoItsFor: 'You like building a collection, not starting over. You want versatile pieces that make everything else look better.',
      whenToWear: 'Every single day. Layer it, wear it alone, forget it\'s there—it works either way.'
    },
    description: 'An ultra-fine 18k gold chain with adjustable length. Perfect for layering or wearing solo.',
    materials: ['18k Yellow Gold', 'Cable chain'],
    dimensions: '16-18" adjustable length',
    weight: '2.5g',
    occasions: ['Daily'],
    style: ['Minimal'],
    collectionId: '1',
    storyTag: 'Layers beautifully',
    pairsWith: ['Thin band ring', 'Sleeper hoops']
  }
]

// Mock Brands Data
export const mockBrands: Brand[] = [
  {
    id: '1',
    name: 'Minimal Studio',
    slug: 'minimal-studio',
    tagline: 'Jewellery that disappears into your life',
    founderStory: 'Founded by Priya Sharma in 2018 after years of searching for jewellery that felt effortless. Frustrated by pieces that demanded too much attention, she started Minimal Studio with one rule: if you have to think about it, it\'s too much.',
    philosophy: 'We believe the best jewellery is the kind you forget you\'re wearing. Every piece is designed for daily life—lightweight, stackable, and built to age beautifully. No trends, no loudness, just gold that works.',
    signatureStyle: 'Ultra-fine bands, delicate chains, and sleeper hoops that never come off. Everything is designed to layer seamlessly and feel weightless.',
    whatMakesThemUnique: 'Unlike most "minimal" brands that still chase trends, Minimal Studio designs pieces meant to be worn for decades. They use only recycled gold and offer free lifetime polishing—because they want you to keep wearing it, not replace it.',
    logo: '/IMG_5181.jpg',
    coverImage: '/IMG_5181.jpg'
  },
  {
    id: '2',
    name: 'Heritage House',
    slug: 'heritage-house',
    tagline: 'Tradition that feels alive',
    founderStory: 'Started by third-generation goldsmith Arjun Mehta, who grew up surrounded by traditional jewellery that no one actually wore. He asked a simple question: what if we kept the craft but changed the context?',
    philosophy: 'Traditional motifs deserve modern interpretations. We take centuries-old designs—lotus patterns, temple jewelry elements, kundan work—and reimagine them for people who want to honor their roots without feeling like they\'re in a museum.',
    signatureStyle: 'Contemporary fusion pieces that blend classical Indian motifs with clean, wearable silhouettes. Think lotus-inspired hoops, not full temple sets.',
    whatMakesThemUnique: 'They work directly with hereditary karigars (craftspeople) in Jaipur, paying fair wages and reviving dying techniques. But instead of replicating the past, they collaborate on designs that actually fit into modern life.',
    logo: '/IMG_5181.jpg',
    coverImage: '/IMG_5181.jpg'
  },
  {
    id: '3',
    name: 'Form & Function',
    slug: 'form-function',
    tagline: 'Sculptural pieces with purpose',
    founderStory: 'Founded by architect-turned-jeweler Maya Iyer, who was frustrated by how boring most "fine" jewellery felt. She wanted pieces that looked like art but functioned like everyday objects—bold, but not impractical.',
    philosophy: 'Jewellery should be as interesting as you are. We design sculptural, asymmetric pieces that make a statement without being costume-y. Every piece is meant to be worn, not stored.',
    signatureStyle: 'Architectural cuffs, geometric earrings, and statement rings that look like miniature sculptures. Bold silhouettes with clean finishes.',
    whatMakesThemUnique: 'They don\'t follow seasonal trends—each piece is designed to be timeless. They also offer a "try before you buy" program for statement pieces, because they know bold jewellery is a commitment.',
    logo: '/IMG_5181.jpg',
    coverImage: '/IMG_5181.jpg'
  }
]

// Mock Stories Data
export const mockStories: Story[] = [
  {
    id: '1',
    title: 'How to Build a Jewellery Collection You\'ll Actually Wear',
    slug: 'build-jewellery-collection',
    category: 'how-to-choose',
    excerpt: 'Stop buying pieces for "someday" and start with items that fit your actual life. Here\'s how to choose jewellery you won\'t regret.',
    content: 'Most jewellery collections are built backwards. People buy pieces for imagined occasions—fancy dinners, weddings, "when I lose weight"—and end up with drawers full of things they never wear. The best collections start with daily wear and build from there. Begin with pieces you can forget you\'re wearing: thin band rings, sleeper hoops, delicate chains. These are your foundation. Once you\'ve lived with them for a few months, you\'ll understand your taste better. Then add one statement piece—something you genuinely love, not something you think you should own. Repeat this cycle. The goal isn\'t a complete collection; it\'s a working one.',
    image: '/IMG_5181.jpg',
    readTime: 5,
    publishedAt: '2026-03-10'
  },
  {
    id: '2',
    title: 'What Gold Purity Actually Means (And Why It Matters)',
    slug: 'gold-purity-guide',
    category: 'what-this-means',
    excerpt: 'The difference between 18k, 22k, and 24k isn\'t just price—it\'s about durability, color, and how the piece will age.',
    content: '24k gold is pure, but it\'s also soft—too soft for daily wear. That\'s why jewellery is usually 18k (75% gold, 25% alloy) or 22k (91.6% gold). Here\'s what matters: 18k is more durable and scratch-resistant. It\'s ideal for rings and bracelets that take daily abuse. 22k is softer, richer in color, and better for earrings or necklaces that don\'t get constant wear. Neither is "better"—it depends on what you\'re buying and how you\'ll use it. The real mistake? Buying 22k for a ring you plan to wear every day, then being surprised when it scratches. Know your karats, match them to your life.',
    image: '/IMG_5181.jpg',
    readTime: 4,
    publishedAt: '2026-03-12'
  },
  {
    id: '3',
    title: 'Avoid This Mistake: Buying Jewellery in the Wrong Scale',
    slug: 'jewellery-scale-mistake',
    category: 'avoid-mistake',
    excerpt: 'The most common jewellery regret? Buying pieces that don\'t match your actual frame or style. Here\'s how to get the proportions right.',
    content: 'Scale is everything in jewellery, but most people ignore it. A delicate chain might look perfect on someone petite but disappear on someone taller. A chunky cuff might overwhelm a smaller wrist but look understated on a larger frame. Here\'s the rule: try pieces on your body, not in the photo. If you\'re buying online, check the dimensions. A 1.5mm ring band is whisper-thin; a 3mm band is noticeably bolder. A 16" necklace sits at the collarbone; an 18" chain falls lower. Small differences matter. And if you\'re unsure? Start smaller. It\'s easier to go bolder later than to regret a statement piece that feels wrong.',
    image: '/IMG_5181.jpg',
    readTime: 6,
    publishedAt: '2026-03-15'
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
