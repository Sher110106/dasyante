'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/**
 * "Begin the Journey" — 1×2 full-bleed image grid.
 * First card: Indian Minimalism collection. Second card: Coming Soon.
 */
const works = [
  {
    slug: 'indian-minimalism',
    title: 'Indian Minimalism',
    subtitle: 'Sterling silver. Indian craft. Daily wear.',
    href: '/collections/indian-minimalism',
    image: '/collection.png',
    objPos: '50% 15%',
    comingSoon: false,
  },
  {
    slug: 'coming-soon',
    title: 'More Coming Soon',
    subtitle: 'New collections in the works',
    href: null,
    image: '/home_2.jpg',
    objPos: '50% 55%',
    comingSoon: true,
  },
]

export default function WorksGrid() {
  return (
    <section className="bg-bg-primary border-t border-border-subtle">
      {/* Section header */}
      <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-border-subtle">
        <h2
          className="font-dm-sans text-text-primary uppercase"
          style={{ fontSize: 'clamp(20px, 3.5vw, 40px)', letterSpacing: '-0.06em', lineHeight: 1 }}
        >
          Begin the Journey
        </h2>
        <Link
          href="/collections"
          className="font-dm-sans text-[10px] uppercase tracking-section text-text-secondary hover:text-accent-gold transition-colors duration-300"
        >
          Enter →
        </Link>
      </div>

      {/* 1×2 grid — full bleed, no gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {works.map((work, i) => (
          <motion.div
            key={work.slug}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
          >
            {work.comingSoon ? (
              <div className="group relative block overflow-hidden" style={{ aspectRatio: '4/5' }}>
                {/* Full-bleed image — desaturated for coming soon */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.image}
                  alt={work.title}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: work.objPos,
                    filter: 'grayscale(60%) brightness(0.6)',
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.20) 50%, transparent 100%)' }}
                />

                {/* Coming Soon badge */}
                <div className="absolute top-5 left-5 md:top-6 md:left-6">
                  <span className="font-dm-sans text-[10px] uppercase tracking-section text-accent-gold border border-accent-gold/40 px-3 py-1">
                    Coming Soon
                  </span>
                </div>

                {/* Bottom-left text */}
                <div className="absolute bottom-0 left-0 p-5 md:p-6">
                  <p
                    className="font-dm-sans text-white/60 uppercase mb-1"
                    style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', letterSpacing: '-0.06em', lineHeight: 1 }}
                  >
                    {work.title}
                  </p>
                  <p className="font-dm-sans text-white/40 text-xs uppercase tracking-section">
                    {work.subtitle}
                  </p>
                </div>
              </div>
            ) : (
              <Link href={work.href!} className="group relative block overflow-hidden" style={{ aspectRatio: '4/5' }}>
                {/* Full-bleed image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.image}
                  alt={work.title}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: work.objPos,
                    transition: 'transform 800ms cubic-bezier(0.16,1,0.3,1)',
                  }}
                  className="group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.12) 50%, transparent 100%)' }}
                />

                {/* Bottom-left text */}
                <div className="absolute bottom-0 left-0 p-5 md:p-6">
                  <p
                    className="font-dm-sans text-white uppercase mb-1"
                    style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', letterSpacing: '-0.06em', lineHeight: 1 }}
                  >
                    {work.title}
                  </p>
                  <p className="font-dm-sans text-white/60 text-xs uppercase tracking-section">
                    {work.subtitle}
                  </p>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-accent-gold transition-all duration-500 pointer-events-none" />
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
