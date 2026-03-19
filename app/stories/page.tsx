'use client'

import { useState } from 'react'
import SectionHeading from '@/components/shared/SectionHeading'
import StoryCard from '@/components/stories/StoryCard'
import { getStoriesByCategory } from '@/lib/mockData'

const categories = [
  { value: 'all', label: 'All Stories' },
  { value: 'how-to-choose', label: 'How to Choose' },
  { value: 'what-this-means', label: 'What This Means' },
  { value: 'avoid-mistake', label: 'Avoid This Mistake' },
]

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const stories = getStoriesByCategory(activeCategory === 'all' ? undefined : activeCategory)

  return (
    <div className="min-h-screen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Page Header */}
        <div className="mb-12">
          <SectionHeading
            title="Learn Your Taste"
            subtitle="Practical guides, cultural context, and anti-patterns in jewellery buying. Because understanding matters more than browsing."
            align="center"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`font-dm-sans text-sm px-6 py-3 transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-accent-gold text-white'
                  : 'bg-bg-secondary text-text-secondary hover:bg-accent-gold-light hover:text-text-primary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        {/* No Results */}
        {stories.length === 0 && (
          <div className="text-center py-20">
            <p className="font-dm-sans text-base text-text-secondary">
              No stories in this category yet. Check back soon!
            </p>
          </div>
        )}

        {/* Bottom Message */}
        <div className="mt-20 text-center max-w-2xl mx-auto border-t border-border-subtle pt-12">
          <h3 className="font-cormorant text-2xl md:text-3xl text-text-primary mb-4">
            Ready to explore?
          </h3>
          <p className="font-dm-sans text-base text-text-secondary mb-6">
            Now that you understand the context, discover pieces that match your taste.
          </p>
          <a
            href="/collections"
            className="inline-block font-dm-sans text-sm text-accent-gold hover:text-accent-gold-dark transition-colors duration-300 border-b border-accent-gold pb-1"
          >
            Browse Collections →
          </a>
        </div>
      </div>
    </div>
  )
}
