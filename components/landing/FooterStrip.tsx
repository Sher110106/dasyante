'use client'

import { motion } from 'framer-motion'

export default function FooterStrip() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.2 }}
      className="relative z-10 flex items-center justify-between px-6 md:px-10 py-4"
    >
      <p
        className="font-dm-sans tracking-section uppercase"
        style={{
          fontSize: '11px',
          color: 'var(--text-tertiary)',
        }}
      >
        DASYANTE — A curated marketplace for demi-fine jewellery
      </p>
      <p
        className="font-dm-sans tracking-section"
        style={{
          fontSize: '11px',
          color: 'var(--text-tertiary)',
        }}
      >
        2025
      </p>
    </motion.footer>
  )
}
