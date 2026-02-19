'use client'

import { motion } from 'framer-motion'

export default function FooterStrip() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.2 }}
      className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-6 md:px-10 py-4 gap-2 sm:gap-0"
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

      <div
        className="flex items-center gap-4 font-dm-sans"
        style={{
          fontSize: '11px',
          color: 'var(--text-tertiary)',
        }}
      >
        <a
          href="mailto:help@dasyante.com"
          className="transition-colors duration-300 hover:text-[var(--text-secondary)]"
          style={{ letterSpacing: '0.05em' }}
        >
          help@dasyante.com
        </a>
        <span style={{ color: 'var(--border-subtle)' }}>|</span>
        <a
          href="tel:+918699771093"
          className="transition-colors duration-300 hover:text-[var(--text-secondary)]"
          style={{ letterSpacing: '0.05em' }}
        >
          +91 86997 71093
        </a>
        <span style={{ color: 'var(--border-subtle)' }}>|</span>
        <span className="tracking-section">2026</span>
      </div>
    </motion.footer>
  )
}
