'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/shared/Button'

export default function PhilosophySection() {
  return (
    <section className="py-20 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative aspect-square overflow-hidden order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/IMG_5181.jpg"
              alt="Dasyante Philosophy"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h3 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold">
                Our Philosophy
              </h3>
              <h2 className="font-cormorant text-4xl md:text-5xl text-text-primary leading-tight">
                We are not a marketplace. We are a curator.
              </h2>
            </div>

            <div className="space-y-6 font-dm-sans text-base md:text-lg text-text-secondary leading-relaxed">
              <p>
                The problem with jewellery today isn't a lack of options—it's a lack of understanding. You can browse thousands of pieces, but how do you know which one is yours?
              </p>
              <p>
                We believe jewellery should be chosen through story, not scroll. Through context, not categories. We don't sell you what's trending—we show you what matters.
              </p>
              <p>
                Every brand is vetted for craft. Every piece is chosen for intent. Every collection is built to help you find what you didn't know you were looking for.
              </p>
            </div>

            <Button variant="ghost" size="lg" href="/about">
              Read Our Full Story
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
