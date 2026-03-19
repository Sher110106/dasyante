import SectionHeading from '@/components/shared/SectionHeading'
import BrandCard from '@/components/brands/BrandCard'
import { mockBrands } from '@/lib/mockData'

export default function BrandsPage() {
  return (
    <div className="min-h-screen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Page Header */}
        <div className="mb-16">
          <SectionHeading
            title="Our Curated Brands"
            subtitle="Each brand is chosen for intent, not just inventory. We partner with makers who value craft over scale, and permanence over trends."
            align="center"
          />
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {mockBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Partner CTA */}
        <div className="mt-20 text-center max-w-2xl mx-auto border-t border-border-subtle pt-12">
          <h3 className="font-cormorant text-2xl md:text-3xl text-text-primary mb-4">
            Want to partner with us?
          </h3>
          <p className="font-dm-sans text-base text-text-secondary mb-6">
            We're always looking for brands that value story over scale. If you believe jewellery should be chosen for meaning, not marketing, we'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block font-dm-sans text-sm text-accent-gold hover:text-accent-gold-dark transition-colors duration-300 border-b border-accent-gold pb-1"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </div>
  )
}
