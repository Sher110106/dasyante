import Link from 'next/link'

const discoverLinks = [
  { label: 'Collections', href: '/collections' },
  { label: 'Brands', href: '/brands' },
  { label: 'Stories', href: '/stories' },
  { label: 'About', href: '/about' },
]

const helpLinks = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Shipping & Returns', href: '/shipping' },
  { label: 'Size Guide', href: '/size-guide' },
]

const companyLinks = [
  { label: 'About Dasyante', href: '/about' },
  { label: 'Partner with Us', href: '/partners' },
  { label: 'Careers', href: '/careers' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-subtle">
      {/* Get in touch */}
      <div className="px-6 md:px-10 pt-16 md:pt-20 pb-8">
        <Link
          href="/contact"
          className="font-cormorant text-text-primary hover:text-accent-gold transition-colors duration-300"
          style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1 }}
        >
          Get in touch
        </Link>
      </div>

      {/* Nav links (slim middle row) */}
      <div className="px-6 md:px-10 py-8 border-t border-border-subtle">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-3xl">
          <div>
            <p className="font-dm-sans text-[10px] uppercase tracking-section text-text-secondary mb-4">Discover</p>
            <ul className="space-y-2">
              {discoverLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-dm-sans text-[10px] uppercase tracking-section text-text-secondary mb-4">Help</p>
            <ul className="space-y-2">
              {helpLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-dm-sans text-[10px] uppercase tracking-section text-text-secondary mb-4">Company</p>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar: socials + copyright */}
      <div className="px-6 md:px-10 py-6 border-t border-border-subtle">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:help@dasyante.com"
              className="font-dm-sans text-xs uppercase tracking-section text-text-secondary hover:text-accent-gold transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="https://www.instagram.com/dasyante/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans text-xs uppercase tracking-section text-text-secondary hover:text-accent-gold transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/dasyante/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans text-xs uppercase tracking-section text-text-secondary hover:text-accent-gold transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <p className="font-dm-sans text-xs uppercase tracking-section text-text-secondary">
            ©2026 Dasyante
          </p>
        </div>
      </div>
    </footer>
  )
}
