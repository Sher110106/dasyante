'use client'

import { motion } from 'framer-motion'
import WaitlistForm from '@/components/landing/WaitlistForm'

export default function WaitlistSection() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary border-t border-border-subtle">
      <div className="max-w-2xl mx-auto px-6 md:px-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center"
        >
          <p className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-4">
            More on the way
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl text-text-primary mb-3">
            Be the first to know
          </h2>
          <p className="font-dm-sans text-sm text-text-secondary leading-relaxed mb-10 max-w-sm">
            New collections, new brands, and new pieces — straight to your inbox before anyone else sees them.
          </p>
          <WaitlistForm />
        </motion.div>
      </div>
    </section>
  )
}
