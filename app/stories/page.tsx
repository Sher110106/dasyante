import Link from 'next/link'
import Image from 'next/image'
import { mockStories } from '@/lib/mockData'

export default function StoriesPage() {
  const [featured, ...rest] = mockStories

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Page header */}
      <div className="px-6 md:px-10 pt-20 md:pt-28 pb-12 md:pb-16 border-b border-border-subtle max-w-7xl mx-auto">
        <p className="font-dm-sans text-[10px] uppercase tracking-section text-accent-gold mb-4">
          Vol. 01 — March 2026
        </p>
        <h1 className="font-cormorant leading-none" style={{ fontSize: 'clamp(36px, 6vw, 80px)', color: 'var(--text-primary)' }}>
          Where Stories<br />Become Style
        </h1>
      </div>

      {/* Featured story — full-bleed hero */}
      {featured && (
        <Link href={`/stories/${featured.slug}`} className="group block">
          <div className="relative overflow-hidden" style={{ minHeight: '70vh' }}>
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: '50% 8%' }}
              priority
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.10) 100%)' }} />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 max-w-4xl">
              <span className="inline-block font-dm-sans text-[10px] uppercase tracking-section text-accent-gold border border-accent-gold/40 px-3 py-1 mb-6">
                Issue One · Editorial
              </span>
              <h2 className="font-cormorant text-white mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
                {featured.title}
              </h2>
              <p className="font-dm-sans text-white/70 leading-relaxed mb-8 max-w-2xl" style={{ fontSize: 'clamp(13px, 1.5vw, 16px)' }}>
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 font-dm-sans text-xs text-white/50 uppercase tracking-section">
                <span>{featured.readTime} min read</span>
                <span>·</span>
                <span>{new Date(featured.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span className="ml-4 text-accent-gold group-hover:underline">Read the story →</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Remaining stories (grid) */}
      {rest.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {rest.map((story) => (
              <Link key={story.id} href={`/stories/${story.slug}`} className="group block">
                <div className="relative aspect-[4/3] mb-5 overflow-hidden bg-bg-tertiary">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="font-dm-sans text-[10px] uppercase tracking-section text-accent-gold mb-2">{story.readTime} min read</p>
                <h3 className="font-cormorant text-2xl text-text-primary group-hover:text-accent-gold transition-colors duration-300 mb-2">{story.title}</h3>
                <p className="font-dm-sans text-sm text-text-secondary line-clamp-2">{story.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 pt-4 border-t border-border-subtle">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-12">
          <p className="font-cormorant text-2xl md:text-3xl text-text-primary" style={{ letterSpacing: '-0.02em' }}>
            Ready to find the pieces?
          </p>
          <Link
            href="/collections"
            className="font-dm-sans text-sm text-accent-gold border-b border-accent-gold pb-1 hover:opacity-70 transition-opacity"
          >
            Browse Collections →
          </Link>
        </div>
      </div>
    </div>
  )
}
