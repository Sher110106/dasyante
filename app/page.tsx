import Hero from '@/components/home/Hero'
import WorksGrid from '@/components/home/WorksGrid'
import PhilosophySection from '@/components/home/PhilosophySection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import WaitlistSection from '@/components/home/WaitlistSection'

export default function Home() {
  return (
    <>
      {/* Hero: full-viewport orbital carousel */}
      <Hero />

      {/* Begin the Journey — 1×2 full-bleed works grid */}
      <WorksGrid />

      {/* Philosophy / About teaser */}
      <PhilosophySection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Join the Waitlist */}
      <WaitlistSection />
    </>
  )
}
