import HeroSection from '@/components/landing/HeroSection'
import FooterStrip from '@/components/landing/FooterStrip'
import HeroGlow from '@/components/ui/HeroGlow'

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-[100dvh] overflow-hidden">
      {/* Top nav strip */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-10 py-5">
        <span
          className="font-lovelo text-section-label tracking-brand uppercase"
          style={{ color: 'var(--text-tertiary)' }}
        >
          DASYANTE
        </span>
        <span
          className="font-dm-sans text-section-label tracking-section uppercase"
          style={{ color: 'var(--text-tertiary)' }}
        >
          Coming Soon
        </span>
      </nav>

      {/* Hero centre */}
      <main className="relative flex items-center justify-center overflow-hidden">
        <HeroGlow />
        <HeroSection />
      </main>

      {/* Footer strip */}
      <FooterStrip />
    </div>
  )
}
