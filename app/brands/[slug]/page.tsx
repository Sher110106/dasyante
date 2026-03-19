import { notFound } from 'next/navigation'
import Image from 'next/image'
import ProductCard from '@/components/products/ProductCard'
import { getBrandBySlug, mockProducts } from '@/lib/mockData'

export default function BrandDetailPage({ params }: { params: { slug: string } }) {
  const brand = getBrandBySlug(params.slug)

  if (!brand) {
    notFound()
  }

  // Get products from this brand
  const brandProducts = mockProducts.filter((p) => p.brand === brand.name).slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Brand Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={brand.coverImage}
            alt={brand.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          {/* Brand Logo */}
          <div className="relative w-32 h-32 mx-auto mb-8 bg-white/10 backdrop-blur-md p-6 rounded-full">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>

          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            {brand.name}
          </h1>
          <p className="font-dm-sans text-xl md:text-2xl text-white/90 italic">
            {brand.tagline}
          </p>
        </div>
      </section>

      {/* Brand Story Sections */}
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Founder Story */}
        <section className="py-16 md:py-20 border-b border-border-subtle">
          <h2 className="font-dm-sans text-xs uppercase tracking-wide text-accent-gold mb-4">
            Founder Story
          </h2>
          <p className="font-dm-sans text-lg md:text-xl text-text-secondary leading-relaxed">
            {brand.founderStory}
          </p>
        </section>

        {/* Design Philosophy */}
        <section className="py-16 md:py-20 border-b border-border-subtle">
          <h2 className="font-dm-sans text-xs uppercase tracking-wide text-accent-gold mb-4">
            Design Philosophy
          </h2>
          <p className="font-dm-sans text-lg md:text-xl text-text-secondary leading-relaxed">
            {brand.philosophy}
          </p>
        </section>

        {/* Signature Style */}
        <section className="py-16 md:py-20 border-b border-border-subtle">
          <h2 className="font-dm-sans text-xs uppercase tracking-wide text-accent-gold mb-4">
            Signature Style
          </h2>
          <p className="font-dm-sans text-lg md:text-xl text-text-secondary leading-relaxed">
            {brand.signatureStyle}
          </p>
        </section>

        {/* What Makes Them Unique */}
        <section className="py-16 md:py-20">
          <h2 className="font-dm-sans text-xs uppercase tracking-wide text-accent-gold mb-4">
            What Makes Them Different
          </h2>
          <p className="font-dm-sans text-lg md:text-xl text-text-secondary leading-relaxed">
            {brand.whatMakesThemUnique}
          </p>
        </section>
      </div>

      {/* Featured Products from Brand */}
      {brandProducts.length > 0 && (
        <section className="py-20 md:py-28 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="font-cormorant text-3xl md:text-4xl text-text-primary mb-12 text-center">
              Featured Pieces from {brand.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {brandProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href="/collections"
                className="inline-block font-dm-sans text-sm text-accent-gold hover:text-accent-gold-dark transition-colors duration-300 border-b border-accent-gold pb-1"
              >
                View All Collections →
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
