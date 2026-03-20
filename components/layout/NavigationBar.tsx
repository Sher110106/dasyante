'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Collections', href: '/collections' },
  { label: 'Brands', href: '/brands' },
  { label: 'Stories', href: '/stories' },
  { label: 'About', href: '/about' },
]

function ISTClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  return (
    <span className="font-dm-sans text-xs uppercase tracking-section text-text-secondary tabular-nums">
      IST {time}
    </span>
  )
}

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-bg-primary border-b border-border-subtle"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="px-6 md:px-10">
          {/* Desktop: 3-col layout */}
          <div className="hidden md:grid md:grid-cols-3 items-center h-16 lg:h-20">
            {/* Left: Brand */}
            <Link
              href="/"
              className="font-lovelo text-sm lg:text-base tracking-brand uppercase text-text-primary hover:text-accent-gold transition-colors duration-300"
            >
              DASYANTE
            </Link>

            {/* Center: Nav links */}
            <div className="flex items-center justify-center gap-6 lg:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-dm-sans text-[11px] uppercase tracking-framer-heading text-text-secondary hover:text-text-primary transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-accent-gold group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right: IST Clock */}
            <div className="flex justify-end">
              <ISTClock />
            </div>
          </div>

          {/* Mobile: Logo + hamburger */}
          <div className="flex md:hidden items-center justify-between h-14">
            <Link
              href="/"
              className="font-lovelo text-sm tracking-brand uppercase text-text-primary"
            >
              DASYANTE
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-text-primary p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-bg-primary z-40 md:hidden flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col items-center gap-6 md:gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="font-dm-sans text-2xl uppercase tracking-framer-heading text-text-primary hover:text-accent-gold transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-14 md:h-16 lg:h-20" />
    </>
  )
}
