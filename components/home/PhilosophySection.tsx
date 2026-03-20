'use client'

import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'

export default function PhilosophySection() {
  return (
    <section className="relative overflow-hidden border-t border-border-subtle" style={{ minHeight: '70vh' }}>
      {/* Full-bleed background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/home_2.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: '50% 40%',
        }}
      />
      {/* Dark overlay — heavier so text remains readable */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.70) 60%, rgba(10,10,10,0.50) 100%)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <motion.div
          className="space-y-8 max-w-2xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-5">
            <p className="font-dm-sans text-[10px] uppercase tracking-section text-accent-gold">
              Our Philosophy
            </p>
            <h2 className="font-cormorant leading-tight" style={{ fontSize: 'clamp(32px, 5vw, 64px)', color: 'var(--text-primary)' }}>
              We are not a marketplace.<br />We are a curator.
            </h2>
          </div>

          <div className="space-y-4 font-dm-sans text-text-secondary leading-relaxed" style={{ fontSize: 'clamp(14px, 1.8vw, 18px)', letterSpacing: '-0.02em' }}>
            <p>
              The problem with jewellery today isn't a lack of options — it's a lack of understanding. You can browse thousands of pieces, but how do you know which one is yours?
            </p>
            <p>
              We believe jewellery should be chosen through story, not scroll. Through context, not categories. We don't sell you what's trending — we show you what matters.
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
    </section>
  )
}
