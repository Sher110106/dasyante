import SectionHeading from '@/components/shared/SectionHeading'
import CollectionCard from '@/components/collections/CollectionCard'
import { mockCollections } from '@/lib/mockData'

export default function CollectionsPage() {
  return (
    <div className="min-h-screen py-20 md:py-28 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Page Header */}
        <div className="mb-10 md:mb-16">
          <SectionHeading
            title="Curated Collections"
            subtitle="Each collection tells a story, not just a category. Explore jewellery chosen for intent, not inventory."
            align="center"
          />
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {mockCollections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="font-dm-sans text-base text-text-secondary leading-relaxed">
            Can't find what you're looking for?{' '}
            <a
              href="/stories"
              className="text-accent-gold hover:text-accent-gold-dark transition-colors duration-300 border-b border-accent-gold"
            >
              Start with a story
            </a>
            {' '}instead of a search.
          </p>
        </div>
      </div>
    </div>
  )
}
