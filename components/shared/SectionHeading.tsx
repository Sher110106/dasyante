import Link from 'next/link'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  title,
  subtitle,
  ctaText,
  ctaHref,
  align = 'center',
}: SectionHeadingProps) {
  const alignmentStyles = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-12 md:mb-16 ${alignmentStyles}`}>
      {/* Title row — CTA only sits inline for left-aligned sections */}
      <div className={`flex items-center ${align === 'left' ? 'justify-between' : 'justify-center'} gap-4 mb-4`}>
        <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-text-primary font-light tracking-tagline">
          {title}
        </h2>
        {ctaText && ctaHref && align === 'left' && (
          <Link
            href={ctaHref}
            className="font-dm-sans text-sm text-text-secondary hover:text-accent-gold transition-colors duration-300 whitespace-nowrap"
          >
            {ctaText} →
          </Link>
        )}
      </div>

      {subtitle && (
        <p className="font-dm-sans text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* CTA below subtitle for center-aligned sections */}
      {ctaText && ctaHref && align === 'center' && (
        <div className="mt-8 flex justify-center">
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2 font-dm-sans text-xs uppercase tracking-btn text-text-primary border border-text-primary px-6 py-3 hover:border-accent-gold hover:text-accent-gold transition-all duration-300"
          >
            {ctaText}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      )}
    </div>
  )
}
