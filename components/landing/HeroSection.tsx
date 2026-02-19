'use client'

import { motion } from 'framer-motion'
import WaitlistForm from './WaitlistForm'

const brandName = 'DASYANTE'

const expoOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

const letterVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: expoOut,
      delay: 0.3 + i * 0.06,
    },
  }),
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: expoOut,
    },
  },
}

const formVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
    },
  },
}

export default function HeroSection() {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center text-center px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Brand Name — Letter by Letter */}
      <div className="mb-6" style={{ perspective: '400px' }}>
        <h1 className="font-lovelo text-brand-mobile md:text-brand tracking-brand uppercase leading-none">
          {brandName.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
              style={{ color: 'var(--text-primary)' }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* Tagline */}
      <motion.p
        variants={fadeUpVariants}
        className="font-cormorant text-hero-tagline font-light tracking-tagline mb-3"
        style={{ color: 'var(--text-primary)' }}
      >
        Curated jewellery. Trusted brands. One place.
      </motion.p>

      {/* Sub-tagline */}
      <motion.p
        variants={fadeUpVariants}
        className="font-dm-sans text-section-label tracking-section uppercase mb-10"
        style={{ color: 'var(--text-secondary)' }}
      >
        A new way to discover jewellery online — launching soon.
      </motion.p>

      {/* Email Form */}
      <motion.div variants={formVariants} className="w-full flex justify-center">
        <WaitlistForm />
      </motion.div>
    </motion.div>
  )
}
