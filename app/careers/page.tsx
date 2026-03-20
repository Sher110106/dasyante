export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-36 bg-bg-primary border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-6">
            Careers
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight mb-8">
            Work with us
          </h1>
          <p className="font-dm-sans text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We're a small team building something we believe in. We don't move fast and break things. We move carefully and make them last.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 md:py-28 bg-bg-tertiary">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="font-cormorant text-3xl md:text-4xl text-text-primary">
                What we value in people
              </h2>
              <div className="space-y-4 font-dm-sans text-sm text-text-secondary leading-relaxed">
                <p>We look for people who think in systems but care about details. Who can hold a brand's tone in their head and still write a technically correct API.</p>
                <p>Who understand that taste is a skill, not just an opinion. Who read things slowly and think before they respond.</p>
                <p>We are not looking for people who want to scale fast. We're looking for people who want to build something worth wearing.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-cormorant text-3xl md:text-4xl text-text-primary">
                How we work
              </h2>
              <div className="space-y-4 font-dm-sans text-sm text-text-secondary leading-relaxed">
                <p>Remote-first, but we believe in real conversation. We write things down. We disagree productively. We don't have endless meetings.</p>
                <p>Every decision we make goes back to one question: does this help the right person find the right piece?</p>
                <p>If you find that question interesting, you might be a good fit for whatever we're building next.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No openings state */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-10">
            Current Openings
          </h2>

          {/* Empty state */}
          <div className="border border-border-subtle p-12 md:p-16 text-center">
            <p className="font-cormorant text-2xl text-text-primary italic mb-4">
              No open roles at the moment.
            </p>
            <p className="font-dm-sans text-sm text-text-secondary leading-relaxed max-w-lg mx-auto">
              We're a small team and we hire slowly and deliberately. When something opens up, it will appear here.
            </p>
          </div>
        </div>
      </section>

      {/* Speculative application */}
      <section className="py-20 md:py-28 bg-bg-tertiary">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl text-text-primary mb-6">
            Think you belong here anyway?
          </h2>
          <p className="font-dm-sans text-sm text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
            If you have a point of view about jewellery, curation, or the way people discover things they love — we want to hear from you. Send us a note at the address below.
          </p>
          <a
            href="mailto:help@dasyante.com?subject=Speculative Application"
            className="group inline-flex items-center gap-2 font-dm-sans text-xs uppercase tracking-btn text-text-primary border border-text-primary px-8 py-4 hover:border-accent-gold hover:text-accent-gold transition-all duration-300"
          >
            Write to us
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <p className="font-dm-sans text-xs text-text-tertiary mt-6">help@dasyante.com</p>
        </div>
      </section>
    </div>
  )
}
