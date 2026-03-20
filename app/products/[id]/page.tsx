import { notFound } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/shared/Button'
import { getProductById, mockProducts } from '@/lib/mockData'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  // Get related products (same collection, exclude current)
  const relatedProducts = mockProducts
    .filter((p) => p.collectionId === product.collectionId && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Product Hero - Two Column Layout */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-bg-tertiary overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnail Images (if multiple) */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.slice(1).map((image, index) => (
                    <div key={index} className="relative aspect-square bg-bg-tertiary overflow-hidden">
                      <Image
                        src={image}
                        alt={`${product.name} - ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Information */}
            <div className="space-y-8">
              {/* Brand & Name */}
              <div>
                <p className="font-dm-sans text-xs text-text-tertiary uppercase tracking-wide mb-2">
                  {product.brand}
                </p>
                <h1 className="font-cormorant text-4xl md:text-5xl text-text-primary mb-4">
                  {product.name}
                </h1>
              </div>

              {/* Story First - Most Important Section */}
              <div className="bg-bg-tertiary p-8 space-y-6">
                <h2 className="font-cormorant text-2xl text-text-primary">The Story</h2>

                <div className="space-y-4 font-dm-sans text-base text-text-secondary leading-relaxed">
                  <div>
                    <h3 className="font-dm-sans text-sm uppercase tracking-wide text-accent-gold mb-2">
                      Why this exists
                    </h3>
                    <p>{product.story.whyExists}</p>
                  </div>

                  <div>
                    <h3 className="font-dm-sans text-sm uppercase tracking-wide text-accent-gold mb-2">
                      Who it's for
                    </h3>
                    <p>{product.story.whoItsFor}</p>
                  </div>

                  <div>
                    <h3 className="font-dm-sans text-sm uppercase tracking-wide text-accent-gold mb-2">
                      When to wear
                    </h3>
                    <p>{product.story.whenToWear}</p>
                  </div>
                </div>
              </div>

              {/* Product Details - Collapsible */}
              <details className="border-t border-border-subtle pt-6">
                <summary className="font-dm-sans text-sm uppercase tracking-wide text-text-primary cursor-pointer mb-4">
                  Materials & Details
                </summary>
                <div className="space-y-4 font-dm-sans text-sm text-text-secondary pl-4">
                  <div>
                    <p className="text-text-primary font-medium mb-1">Materials</p>
                    <ul className="space-y-1">
                      {product.materials.map((material, index) => (
                        <li key={index}>• {material}</li>
                      ))}
                    </ul>
                  </div>
                  {product.dimensions && (
                    <div>
                      <p className="text-text-primary font-medium mb-1">Dimensions</p>
                      <p>{product.dimensions}</p>
                    </div>
                  )}
                  {product.weight && (
                    <div>
                      <p className="text-text-primary font-medium mb-1">Weight</p>
                      <p>{product.weight}</p>
                    </div>
                  )}
                </div>
              </details>

              {/* Decision Support */}
              {product.pairsWith && product.pairsWith.length > 0 && (
                <div className="border-t border-border-subtle pt-6">
                  <h3 className="font-dm-sans text-sm uppercase tracking-wide text-text-primary mb-3">
                    Pairs well with
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.pairsWith.map((item, index) => (
                      <span
                        key={index}
                        className="font-dm-sans text-xs text-text-secondary border border-border-subtle px-3 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="pt-4">
                <Button
                  variant="solid"
                  size="lg"
                  className="w-full"
                  href={`/contact?topic=Order+or+Inquiry&product=${encodeURIComponent(product.name)}`}
                >
                  Inquire About This Piece
                </Button>
                <p className="font-dm-sans text-xs text-text-tertiary text-center mt-4">
                  Currently available for inquiry only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-bg-tertiary">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="font-cormorant text-3xl md:text-4xl text-text-primary mb-12">
              You might also like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((relatedProduct) => (
                <a
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group block"
                >
                  <div className="relative aspect-square mb-4 overflow-hidden bg-bg-primary">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="font-dm-sans text-xs text-text-tertiary uppercase mb-1">
                    {relatedProduct.brand}
                  </p>
                  <h3 className="font-cormorant text-lg text-text-primary group-hover:text-accent-gold transition-colors">
                    {relatedProduct.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
