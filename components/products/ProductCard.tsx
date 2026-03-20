import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/mockData'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      {/* Image */}
      <div className="relative aspect-square mb-4 overflow-hidden bg-bg-secondary">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <p className="font-dm-sans text-xs text-text-tertiary uppercase tracking-wide">
          {product.brand}
        </p>
        <h3 className="font-cormorant text-lg md:text-xl text-text-primary group-hover:text-accent-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="font-dm-sans text-sm text-text-secondary italic line-clamp-1">
          {product.storyTag}
        </p>
      </div>
    </Link>
  )
}
