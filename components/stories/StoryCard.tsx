import Image from 'next/image'
import Link from 'next/link'
import { Story } from '@/lib/mockData'

interface StoryCardProps {
  story: Story
}

const categoryLabels = {
  'how-to-choose': 'How to Choose',
  'what-this-means': 'What This Means',
  'avoid-mistake': 'Avoid This Mistake',
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Link href={`/stories/${story.slug}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[16/10] mb-6 overflow-hidden bg-bg-tertiary border border-border-subtle">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-bg-primary border border-border-subtle px-3 py-1">
          <span className="font-dm-sans text-[10px] text-text-secondary uppercase tracking-section">
            {categoryLabels[story.category]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-cormorant text-2xl md:text-3xl text-text-primary group-hover:text-accent-gold transition-colors duration-300 leading-tight">
          {story.title}
        </h3>
        <p className="font-dm-sans text-sm text-text-secondary leading-relaxed line-clamp-2">
          {story.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs font-dm-sans text-text-tertiary pt-2">
          <span>{story.readTime} min read</span>
          <span>•</span>
          <span>{new Date(story.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <div className="font-dm-sans text-sm text-accent-gold pt-2">
          Read More →
        </div>
      </div>
    </Link>
  )
}
