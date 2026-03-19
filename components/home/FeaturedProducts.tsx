'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/components/shared/SectionHeading'
import { mockProducts } from '@/lib/mockData'

export default function FeaturedProducts() {
  // Show first 4 products
  const featuredProducts = mockProducts.slice(0, 4)

  return (
    <section className="py-20 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          title="Featured Pieces"
          subtitle="Chosen for you, curated through story"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/products/${product.id}`} className="group block">
                {/* Image */}
                <div className="relative aspect-square mb-4 overflow-hidden bg-bg-secondary">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <p className="font-dm-sans text-xs text-text-tertiary uppercase tracking-wide">
                    {product.brand}
                  </p>
                  <h3 className="font-cormorant text-lg md:text-xl text-text-primary group-hover:text-accent-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="font-dm-sans text-sm text-text-secondary italic">
                    {product.storyTag}
                  </p>
                  <p className="font-dm-sans text-sm text-text-primary font-medium pt-1">
                    ₹{product.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/collections"
            className="inline-block font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300 border-b border-text-tertiary hover:border-accent-gold pb-1"
          >
            Explore All Collections →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
