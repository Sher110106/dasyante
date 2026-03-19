import Image from 'next/image'
import Link from 'next/link'
import { Collection } from '@/lib/mockData'

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link href={`/collections/${collection.slug}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-bg-secondary">
        <Image
          src={collection.coverImage}
          alt={collection.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Product Count Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1">
          <span className="font-dm-sans text-xs text-text-primary">
            {collection.productCount} pieces
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-cormorant text-2xl md:text-3xl text-text-primary group-hover:text-accent-gold transition-colors duration-300">
          {collection.title}
        </h3>
        <p className="font-dm-sans text-sm text-text-secondary leading-relaxed line-clamp-2">
          {collection.narrative}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {collection.tags.map((tag) => (
            <span
              key={tag}
              className="font-dm-sans text-xs text-text-tertiary border border-border-subtle px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="font-dm-sans text-sm text-accent-gold pt-2">
          Explore Collection →
        </div>
      </div>
    </Link>
  )
}
