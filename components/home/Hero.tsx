'use client'

import { motion } from 'framer-motion'
import OrbitalCarousel from './OrbitalCarousel'

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-bg-primary"
      style={{ height: '100dvh', position: 'sticky', top: 0, zIndex: 1 }}
    >
      {/* Subtle gold glow behind brand name — always present */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 35% at 50% 50%, rgba(201,169,110,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      {/* Rotating jewellery orbit */}
      <OrbitalCarousel />

      {/* Center text — sits above the carousel */}
      <motion.div
        className="relative flex flex-col items-center justify-center text-center gap-4 md:gap-5 px-5 w-full"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        {/* Brand name */}
        <motion.h1
          className="font-lovelo text-text-primary uppercase leading-none"
          style={{ fontSize: 'clamp(44px, 9vw, 120px)', letterSpacing: '-0.04em' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          DASYANTE
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="font-dm-sans text-text-secondary uppercase tracking-section"
          style={{ fontSize: 'clamp(11px, 3vw, 14px)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
        >
          A quieter way to wear silver
        </motion.p>

      </motion.div>

      {/* Scroll line */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-[1px] h-10 bg-border-subtle mx-auto"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
