import Hero from '@/components/home/Hero'
import EntryPaths from '@/components/home/EntryPaths'
import FeaturedCollections from '@/components/home/FeaturedCollections'
import VideoShowcase from '@/components/home/VideoShowcase'
import PhilosophySection from '@/components/home/PhilosophySection'
import FeaturedProducts from '@/components/home/FeaturedProducts'

export default function Home() {
  return (
    <>
      <Hero />
      <EntryPaths />
      <FeaturedCollections />
      <VideoShowcase />
      <PhilosophySection />
      <FeaturedProducts />
    </>
  )
}
