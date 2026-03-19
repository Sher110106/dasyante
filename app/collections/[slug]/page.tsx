import { notFound } from 'next/navigation'
import Image from 'next/image'
import ProductCard from '@/components/products/ProductCard'
import { getCollectionBySlug, getProductsByCollectionId } from '@/lib/mockData'

export default function CollectionDetailPage({ params }: { params: { slug: string } }) {
  const collection = getCollectionBySlug(params.slug)

  if (!collection) {
    notFound()
  }

  const products = getProductsByCollectionId(collection.id)

  return (
    <div className="min-h-screen">
      {/* Collection Hero */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={collection.coverImage}
            alt={collection.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-12 md:pb-16">
          <div className="max-w-3xl">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {collection.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-dm-sans text-xs text-white/80 border border-white/30 px-3 py-1 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              {collection.title}
            </h1>

            {/* Narrative */}
            <p className="font-dm-sans text-lg md:text-xl text-white/90 leading-relaxed">
              {collection.narrative}
            </p>
          </div>
        </div>
      </section>

      {/* Collection Description */}
      <section className="py-12 md:py-16 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-cormorant text-2xl md:text-3xl text-text-primary mb-6">
            Why This Collection
          </h2>
          <p className="font-dm-sans text-base md:text-lg text-text-secondary leading-relaxed">
            {collection.whyThisCollection}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <h2 className="font-cormorant text-3xl md:text-4xl text-text-primary mb-2">
              The Collection
            </h2>
            <p className="font-dm-sans text-sm text-text-secondary">
              {products.length} pieces, curated with intent
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="font-dm-sans text-base text-text-secondary mb-4">
            Want to understand the stories behind these pieces?
          </p>
          <a
            href="/stories"
            className="inline-block font-dm-sans text-sm text-accent-gold hover:text-accent-gold-dark transition-colors duration-300 border-b border-accent-gold pb-1"
          >
            Explore Our Stories →
          </a>
        </div>
      </section>
    </div>
  )
}
