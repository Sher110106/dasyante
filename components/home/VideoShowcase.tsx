'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="relative py-20 md:py-32 bg-bg-primary border-t border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Text Content */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-cormorant text-3xl md:text-5xl lg:text-6xl text-text-primary mb-6 leading-tight">
            Crafted with intention, worn with meaning
          </h2>
          <p className="font-dm-sans text-lg text-text-secondary leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
            Every piece tells a story. Every story deserves to be understood. We don't curate for trends—we curate for permanence.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="relative aspect-video w-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/4910096-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>

          {/* Optional overlay for text on video */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Caption */}
        <motion.p
          className="text-center mt-6 font-dm-sans text-sm text-text-tertiary italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Behind every piece: artisans, stories, and intentional design
        </motion.p>
      </div>
    </section>
  )
}
