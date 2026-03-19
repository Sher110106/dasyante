import Image from 'next/image'
import Link from 'next/link'
import { Brand } from '@/lib/mockData'

interface BrandCardProps {
  brand: Brand
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link href={`/brands/${brand.slug}`} className="group block">
      <div className="border border-border-subtle bg-white transition-all duration-500 group-hover:border-accent-gold group-hover:shadow-lg">
        {/* Logo/Image */}
        <div className="relative aspect-square p-8 flex items-center justify-center bg-bg-secondary">
          <div className="relative w-32 h-32">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center space-y-3">
          <h3 className="font-cormorant text-2xl text-text-primary group-hover:text-accent-gold transition-colors duration-300">
            {brand.name}
          </h3>
          <p className="font-dm-sans text-sm text-text-secondary italic">
            {brand.tagline}
          </p>
          <div className="font-dm-sans text-sm text-accent-gold pt-2">
            Discover Brand →
          </div>
        </div>
      </div>
    </Link>
  )
}
