export default function SizeGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-bg-primary border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-6">
            Reference
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl text-text-primary leading-tight">
            Size Guide
          </h1>
          <p className="font-dm-sans text-base text-text-secondary mt-6 max-w-xl mx-auto leading-relaxed">
            Sizing varies slightly between brands and pieces. When in doubt, always ask — we include specific dimensions on every product page.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-20">

          {/* Ring Sizes */}
          <div className="space-y-8">
            <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold">
              Ring Sizes
            </h2>
            <div className="space-y-4">
              <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">
                To find your ring size, measure the inner circumference of a ring that fits well, or wrap a strip of paper snugly around your finger at the widest point and measure the length in millimetres.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse font-dm-sans text-sm">
                  <thead>
                    <tr className="border-b border-border-subtle">
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wide text-text-primary font-normal">
                        Indian Size
                      </th>
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wide text-text-primary font-normal">
                        Circumference (mm)
                      </th>
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wide text-text-primary font-normal">
                        US Size
                      </th>
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wide text-text-primary font-normal">
                        UK Size
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['6', '49.3', '6', 'L½'],
                      ['7', '50.6', '6¼', 'M'],
                      ['8', '51.9', '6½', 'M½'],
                      ['9', '53.1', '6¾', 'N'],
                      ['10', '54.4', '7', 'N½'],
                      ['11', '55.7', '7¼', 'O'],
                      ['12', '57.0', '7½', 'O½'],
                      ['13', '58.3', '7¾', 'P'],
                      ['14', '59.5', '8', 'P½'],
                      ['15', '60.8', '8¼', 'Q'],
                      ['16', '62.1', '8½', 'Q½'],
                    ].map(([ind, circ, us, uk]) => (
                      <tr key={ind} className="border-b border-border-subtle hover:bg-bg-secondary transition-colors">
                        <td className="py-3 px-4 text-text-primary">{ind}</td>
                        <td className="py-3 px-4 text-text-secondary">{circ} mm</td>
                        <td className="py-3 px-4 text-text-secondary">{us}</td>
                        <td className="py-3 px-4 text-text-secondary">{uk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-dm-sans text-xs text-text-tertiary">
                Fingers swell in heat and shrink in cold. Measure at the end of the day when your fingers are at their largest for the most accurate fit.
              </p>
            </div>
          </div>

          {/* Bracelet Sizes */}
          <div className="space-y-8">
            <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold">
              Bracelet Sizes
            </h2>
            <div className="space-y-4">
              <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">
                Measure your wrist circumference with a flexible tape. Add 1–2 cm for a comfortable fit, or 2–3 cm if you prefer a looser wear.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse font-dm-sans text-sm">
                  <thead>
                    <tr className="border-b border-border-subtle">
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wide text-text-primary font-normal">Size</th>
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wide text-text-primary font-normal">Wrist (cm)</th>
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wide text-text-primary font-normal">Bracelet length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['XS', '13–14', '15–15.5 cm'],
                      ['S', '14–15', '16–16.5 cm'],
                      ['M', '15–17', '17–17.5 cm'],
                      ['L', '17–18', '18–18.5 cm'],
                      ['XL', '18–19', '19–19.5 cm'],
                    ].map(([size, wrist, length]) => (
                      <tr key={size} className="border-b border-border-subtle hover:bg-bg-secondary transition-colors">
                        <td className="py-3 px-4 text-text-primary">{size}</td>
                        <td className="py-3 px-4 text-text-secondary">{wrist} cm</td>
                        <td className="py-3 px-4 text-text-secondary">{length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Necklace Lengths */}
          <div className="space-y-8">
            <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold">
              Necklace Lengths
            </h2>
            <div className="space-y-4">
              <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">
                Necklace length determines where a piece sits on the body. Use a flexible tape measure or a string measured against a ruler.
              </p>
              <div className="space-y-4">
                {[
                  { length: '35–38 cm', name: 'Choker', sits: 'Base of the neck' },
                  { length: '40–43 cm', name: 'Princess', sits: 'Just below the collarbone — the most versatile length' },
                  { length: '45–48 cm', name: 'Matinee', sits: 'On the upper chest, above the bust' },
                  { length: '50–58 cm', name: 'Opera', sits: 'On the bust or below' },
                  { length: '70+ cm', name: 'Rope / Long', sits: 'Can be doubled for a layered look' },
                ].map((row) => (
                  <div key={row.name} className="border-b border-border-subtle pb-4 flex gap-6">
                    <div className="w-24 flex-shrink-0">
                      <p className="font-dm-sans text-xs text-accent-gold uppercase tracking-wide">{row.name}</p>
                      <p className="font-dm-sans text-sm text-text-primary mt-1">{row.length}</p>
                    </div>
                    <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">{row.sits}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Earring note */}
          <div className="space-y-6">
            <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold">
              Earrings
            </h2>
            <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">
              Earring dimensions (drop length, width, total length) are listed individually on each product page. If you have specific questions about how a piece will sit, write to us before inquiring — we're happy to share reference photos.
            </p>
          </div>

          {/* Help */}
          <div className="border border-border-subtle p-8 space-y-4">
            <p className="font-cormorant text-2xl text-text-primary">
              Not sure about your size?
            </p>
            <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">
              Write to us at{' '}
              <a href="mailto:help@dasyante.com" className="text-accent-gold hover:underline">
                help@dasyante.com
              </a>{' '}
              with the piece you're interested in. We'll help you find the right fit before you commit.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
