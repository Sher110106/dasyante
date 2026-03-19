'use client'

import Image from 'next/image'
import Button from '@/components/shared/Button'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/IMG_5181.jpg"
            alt="Dasyante"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            We are not a marketplace. We are a curator.
          </h1>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="space-y-6">
            <h2 className="font-dm-sans text-xs uppercase tracking-wide text-accent-gold">
              The Problem
            </h2>
            <h3 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
              Jewellery discovery today is overwhelming and contextless
            </h3>
            <div className="font-dm-sans text-lg md:text-xl text-text-secondary leading-relaxed space-y-4">
              <p>
                You open an e-commerce site. You're shown 10,000 pieces. Categories like "Rings," "Necklaces," "Earrings." Filters for price, material, brand. An infinite scroll of thumbnails that all look the same.
              </p>
              <p>
                You browse for hours. You add things to your cart. You remove them. You close the tab. You come back tomorrow and start over. Because nothing feels right, and you don't know why.
              </p>
              <p>
                The problem isn't the products. It's that you're shopping without understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Section */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="space-y-6">
            <h2 className="font-dm-sans text-xs uppercase tracking-wide text-accent-gold">
              The Insight
            </h2>
            <h3 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
              People don't lack options — they lack understanding
            </h3>
            <div className="font-dm-sans text-lg md:text-xl text-text-secondary leading-relaxed space-y-4">
              <p>
                Jewellery is not a transaction. It's a relationship. With your taste, your story, your identity.
              </p>
              <p>
                You don't need more inventory. You need to know why this ring feels right for you, and that one doesn't. Why this brand matters, and that one is generic. Why minimal gold is having a moment, and what that says about the person who wears it.
              </p>
              <p>
                You need context. You need stories. You need someone to help you understand what you're looking at, not just show you 10,000 options and hope you click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="space-y-6">
            <h2 className="font-dm-sans text-xs uppercase tracking-wide text-accent-gold">
              The Solution
            </h2>
            <h3 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
              We curate through story
            </h3>
            <div className="font-dm-sans text-lg md:text-xl text-text-secondary leading-relaxed space-y-4">
              <p>
                Dasyante doesn't sell jewellery. We guide you to it. Through collections built on narrative, not categories. Through product pages that explain why this piece exists, who it's for, and when it fits into your life—before showing you the price.
              </p>
              <p>
                We don't optimize for "conversion." We optimize for understanding. Because people who understand what they're buying don't regret it six months later. They wear it. They keep it. They tell their friends about it.
              </p>
              <p>
                Every brand is vetted for craft and intent. Every collection is bounded—15 to 30 pieces max, not infinite scroll. Every product has a story before it has a spec sheet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Position Section */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="space-y-6">
            <h2 className="font-dm-sans text-xs uppercase tracking-wide text-accent-gold">
              Our Position
            </h2>
            <h3 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
              We are not a marketplace. We are a curator.
            </h3>
            <div className="font-dm-sans text-lg md:text-xl text-text-secondary leading-relaxed space-y-4">
              <p>
                Marketplaces chase scale. They want every brand, every product, every customer. Their job is to give you options and get out of the way.
              </p>
              <p>
                Curators do the opposite. We say no to most things so we can say yes to the right things. We have opinions. We have taste. We believe some jewellery is worth your attention, and most of it isn't.
              </p>
              <p>
                If you want infinite choice, go somewhere else. If you want someone to help you make the right choice, you're in the right place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-cormorant text-3xl md:text-4xl text-text-primary mb-16 text-center">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="space-y-4">
              <h3 className="font-dm-sans text-sm uppercase tracking-wide text-accent-gold">
                Story over Search
              </h3>
              <p className="font-dm-sans text-base text-text-secondary leading-relaxed">
                The best jewellery discoveries happen through narrative, not keyword filtering. We believe in guided paths, not infinite scroll.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-dm-sans text-sm uppercase tracking-wide text-accent-gold">
                Context over Catalog
              </h3>
              <p className="font-dm-sans text-base text-text-secondary leading-relaxed">
                A product shot tells you what it looks like. A story tells you why it exists, who it's for, and when to wear it. Context wins.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-dm-sans text-sm uppercase tracking-wide text-accent-gold">
                Permanence over Trends
              </h3>
              <p className="font-dm-sans text-base text-text-secondary leading-relaxed">
                We curate pieces meant to be worn for decades, not discarded next season. Jewellery should outlast trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-bg-secondary text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2 className="font-cormorant text-3xl md:text-4xl text-text-primary mb-6">
            Ready to discover jewellery that makes sense?
          </h2>
          <p className="font-dm-sans text-lg text-text-secondary mb-8">
            Start with a story, not a search.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="solid" size="lg" href="/collections">
              Explore Collections
            </Button>
            <Button variant="ghost" size="lg" href="/stories">
              Read Our Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
