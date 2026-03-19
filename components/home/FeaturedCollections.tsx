'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/components/shared/SectionHeading'
import { mockCollections } from '@/lib/mockData'

export default function FeaturedCollections() {
  // Show first 3 collections
  const featuredCollections = mockCollections.slice(0, 3)

  return (
    <section className="py-20 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          title="Curated Collections"
          subtitle="Each collection is a story, not a category"
          ctaText="View All Collections"
          ctaHref="/collections"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={`/collections/${collection.slug}`} className="group block">
                {/* Image */}
                <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                  <Image
                    src={collection.coverImage}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-cormorant text-2xl md:text-3xl text-text-primary group-hover:text-accent-gold transition-colors duration-300">
                    {collection.title}
                  </h3>
                  <p className="font-dm-sans text-sm text-text-secondary leading-relaxed line-clamp-2">
                    {collection.narrative}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    {collection.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-dm-sans text-xs text-text-tertiary border border-border-subtle px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="font-dm-sans text-sm text-accent-gold pt-2">
                    Explore Collection →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
