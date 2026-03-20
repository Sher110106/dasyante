import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getStoryBySlug, mockStories } from '@/lib/mockData'

const categoryLabels = {
  'how-to-choose': 'How to Choose',
  'what-this-means': 'What This Means',
  'avoid-mistake': 'Avoid This Mistake',
}

export default function StoryDetailPage({ params }: { params: { slug: string } }) {
  const story = getStoryBySlug(params.slug)

  if (!story) {
    notFound()
  }

  // Get related stories (same category, exclude current)
  const relatedStories = mockStories
    .filter((s) => s.category === story.category && s.id !== story.id)
    .slice(0, 2)

  return (
    <div className="min-h-screen">
      {/* Story Hero */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            style={{ objectPosition: '50% 8%' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 pb-12 md:pb-16 w-full">
          {/* Category Badge */}
          <div className="inline-block bg-bg-primary px-4 py-2 mb-6">
            <span className="font-dm-sans text-xs text-text-primary uppercase tracking-wide">
              {categoryLabels[story.category]}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            {story.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm font-dm-sans text-white/80">
            <span>{story.readTime} min read</span>
            <span>•</span>
            <span>{new Date(story.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          {/* Excerpt/Intro */}
          <p className="font-cormorant italic text-xl md:text-2xl text-text-secondary leading-relaxed mb-12 pb-12 border-b border-border-subtle">
            {story.excerpt}
          </p>

          {/* Main Content — rich renderer */}
          <div className="space-y-0">
            {story.content.split('\n\n').map((block, index) => {
              // ## Section heading
              if (block.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-cormorant text-3xl md:text-4xl text-text-primary mt-16 mb-6 pb-4 border-b border-border-subtle" style={{ letterSpacing: '-0.02em' }}>
                    {block.slice(3)}
                  </h2>
                )
              }
              // ### Brand / subsection label
              if (block.startsWith('### ')) {
                return (
                  <p key={index} className="font-dm-sans text-[10px] uppercase tracking-section text-accent-gold mt-12 mb-3">
                    {block.slice(4)}
                  </p>
                )
              }
              // **Bold intro line** (piece title)
              if (block.startsWith('**') && block.endsWith('**')) {
                return (
                  <p key={index} className="font-cormorant text-xl md:text-2xl text-text-primary mb-4" style={{ letterSpacing: '-0.01em' }}>
                    {block.slice(2, -2)}
                  </p>
                )
              }
              // — attribution / sign-off
              if (block.startsWith('— ')) {
                return (
                  <p key={index} className="font-cormorant italic text-lg text-accent-gold mt-6 mb-2">
                    {block}
                  </p>
                )
              }
              // "Why we chose it:" pull line
              if (block.startsWith('Why we chose it:')) {
                return (
                  <p key={index} className="font-dm-sans text-sm text-text-secondary leading-relaxed mt-4 mb-10 pl-4 border-l border-accent-gold/30 italic">
                    {block}
                  </p>
                )
              }
              // Normal paragraph
              return (
                <p key={index} className="font-dm-sans text-base md:text-lg text-text-secondary leading-relaxed mb-5" style={{ letterSpacing: '-0.01em' }}>
                  {block}
                </p>
              )
            })}
          </div>

          {/* Closing CTA */}
          <div className="mt-20 pt-16 border-t border-border-subtle text-center">
            <p className="font-cormorant italic text-2xl text-text-primary mb-2">
              Find the pieces that belong to you.
            </p>
            <p className="font-dm-sans text-sm text-text-secondary mb-8">
              Every piece in this edit is available to inquire about now.
            </p>
            <a
              href="/collections"
              className="inline-block font-dm-sans text-sm text-accent-gold border-b border-accent-gold pb-1 hover:opacity-70 transition-opacity"
            >
              Explore Indian Minimalism →
            </a>
          </div>
        </div>
      </article>

      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <section className="py-16 md:py-24 bg-bg-tertiary">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="font-cormorant text-3xl md:text-4xl text-text-primary mb-12">
              Related Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {relatedStories.map((relatedStory) => (
                <a
                  key={relatedStory.id}
                  href={`/stories/${relatedStory.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] mb-6 overflow-hidden bg-bg-primary">
                    <Image
                      src={relatedStory.image}
                      alt={relatedStory.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3">
                    <span className="inline-block font-dm-sans text-xs text-accent-gold uppercase tracking-wide">
                      {categoryLabels[relatedStory.category]}
                    </span>
                    <h3 className="font-cormorant text-2xl text-text-primary group-hover:text-accent-gold transition-colors">
                      {relatedStory.title}
                    </h3>
                    <p className="font-dm-sans text-sm text-text-secondary line-clamp-2">
                      {relatedStory.excerpt}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
