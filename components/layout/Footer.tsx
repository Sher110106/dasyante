'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage('Thank you for subscribing!')
        setEmail('')
      } else {
        setMessage(data.error || 'Something went wrong')
      }
    } catch {
      setMessage('Unable to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-bg-secondary">
      {/* Newsletter Section */}
      <div className="border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-dm-sans text-xs uppercase tracking-section text-text-primary mb-4">
              Subscribe to our Newsletter
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="flex-1 px-4 py-3 border border-border-subtle text-sm font-dm-sans text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-text-primary text-white font-dm-sans text-xs uppercase tracking-btn hover:bg-accent-gold-dark transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {message && (
              <p className="mt-3 text-sm font-dm-sans text-text-secondary">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Column 1: DISCOVER */}
          <div>
            <h4 className="font-dm-sans text-xs uppercase tracking-section text-text-primary mb-6">
              Discover
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/collections"
                  className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: HELP */}
          <div>
            <h4 className="font-dm-sans text-xs uppercase tracking-section text-text-primary mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div>
            <h4 className="font-dm-sans text-xs uppercase tracking-section text-text-primary mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  About Dasyante
                </Link>
              </li>
              <li>
                <Link
                  href="/about#curation"
                  className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  Our Curation
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: FOLLOW US */}
          <div>
            <h4 className="font-dm-sans text-xs uppercase tracking-section text-text-primary mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/dasyante/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/dasyante/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-dm-sans text-text-tertiary">
            <p>© 2026 Dasyante</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-accent-gold transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-accent-gold transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
