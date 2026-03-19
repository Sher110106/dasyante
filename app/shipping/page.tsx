export default function ShippingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-bg-primary border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-6">
            Policies
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl text-text-primary leading-tight">
            Shipping & Returns
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-16">

          {/* How it works */}
          <div className="space-y-6">
            <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold">
              How Orders Work
            </h2>
            <div className="space-y-4 font-dm-sans text-sm text-text-secondary leading-relaxed">
              <p>
                Dasyante currently operates on an inquiry model. You express interest in a piece through the product page, and we connect you with the brand to confirm availability, answer questions, and complete the purchase.
              </p>
              <p>
                Shipping is arranged directly with the brand. We share all relevant details — including shipping timelines and costs — before any payment is made.
              </p>
            </div>
          </div>

          {/* Delivery */}
          <div className="space-y-6">
            <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold">
              Delivery Timelines
            </h2>
            <div className="space-y-4">
              <div className="border border-border-subtle p-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-dm-sans text-xs uppercase tracking-wide text-text-primary mb-2">
                    Metro cities
                  </p>
                  <p className="font-dm-sans text-sm text-text-secondary">3–5 business days</p>
                </div>
                <div>
                  <p className="font-dm-sans text-xs uppercase tracking-wide text-text-primary mb-2">
                    Other cities
                  </p>
                  <p className="font-dm-sans text-sm text-text-secondary">5–7 business days</p>
                </div>
                <div>
                  <p className="font-dm-sans text-xs uppercase tracking-wide text-text-primary mb-2">
                    Made-to-order pieces
                  </p>
                  <p className="font-dm-sans text-sm text-text-secondary">10–21 business days</p>
                </div>
                <div>
                  <p className="font-dm-sans text-xs uppercase tracking-wide text-text-primary mb-2">
                    International
                  </p>
                  <p className="font-dm-sans text-sm text-text-secondary">Coming soon</p>
                </div>
              </div>
              <p className="font-dm-sans text-xs text-text-tertiary">
                All orders are sent with tracking. You will receive a tracking number once your order ships.
              </p>
            </div>
          </div>

          {/* Packaging */}
          <div className="space-y-6">
            <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold">
              Packaging
            </h2>
            <div className="space-y-4 font-dm-sans text-sm text-text-secondary leading-relaxed">
              <p>
                Each brand packages their pieces according to their own standards. We curate brands that take packaging seriously — it's part of the experience of receiving something that matters.
              </p>
              <p>
                Many of our brands use sustainable or minimal packaging. We'll include packaging details in your confirmation.
              </p>
            </div>
          </div>

          {/* Returns */}
          <div className="space-y-6">
            <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold">
              Returns & Exchanges
            </h2>
            <div className="space-y-4 font-dm-sans text-sm text-text-secondary leading-relaxed">
              <p>
                Return policies vary by brand. We'll provide the specific return window and conditions for each piece before you complete a purchase.
              </p>
              <p>
                In general:
              </p>
              <ul className="space-y-2 pl-4">
                <li>• Most pieces are eligible for exchange within 7 days of receipt if undamaged and unworn</li>
                <li>• Made-to-order and personalised pieces are not eligible for return</li>
                <li>• Return shipping is the responsibility of the customer unless the piece was delivered damaged</li>
                <li>• Damaged in transit? Contact us immediately with photographs and we will resolve it</li>
              </ul>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold">
              Questions
            </h2>
            <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">
              If you have any questions about shipping, delivery, or returns before making a purchase, write to us at{' '}
              <a href="mailto:help@dasyante.com" className="text-accent-gold hover:underline">
                help@dasyante.com
              </a>
              . We'd rather answer a question than have you receive something you didn't expect.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
