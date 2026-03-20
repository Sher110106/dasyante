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
      <div className={`flex items-end ${align === 'left' ? 'justify-between' : 'justify-center'} gap-4 mb-4`}>
        <h2
          className="font-dm-sans text-text-primary uppercase"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.06em', lineHeight: 1 }}
        >
          {title}
        </h2>
        {ctaText && ctaHref && align === 'left' && (
          <Link
            href={ctaHref}
            className="font-dm-sans text-xs uppercase tracking-section text-text-secondary hover:text-accent-gold transition-colors duration-300 whitespace-nowrap pb-1"
          >
            {ctaText} →
          </Link>
        )}
      </div>

      {subtitle && (
        <p className="font-dm-sans text-sm md:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
          {subtitle}
        </p>
      )}

      {ctaText && ctaHref && align === 'center' && (
        <div className="mt-8 flex justify-center">
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2 font-dm-sans text-xs uppercase tracking-btn text-text-secondary border border-border-subtle px-6 py-3 hover:border-accent-gold hover:text-accent-gold transition-all duration-300"
          >
            {ctaText}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      )}
    </div>
  )
}
