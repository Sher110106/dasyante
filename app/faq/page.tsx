'use client'

import { useState } from 'react'

const faqs = [
  {
    category: 'About Dasyante',
    items: [
      {
        q: 'What is Dasyante?',
        a: 'Dasyante is a curated jewellery marketplace. We work with a small number of independent brands and present their work through story and context — not just product listings. We exist to help you find jewellery you understand, not just browse.',
      },
      {
        q: 'How do you choose which brands to feature?',
        a: 'We look for craft with intention, stories worth telling, and pieces made to last. We review every brand application and accept very few. We currently feature three brands. That number will grow slowly, and deliberately.',
      },
    ],
  },
  {
    category: 'Buying & Inquiries',
    items: [
      {
        q: 'Can I buy directly on the site?',
        a: 'Currently, Dasyante operates on an inquiry model. You express interest in a piece, and we connect you with the brand directly. We\'re building toward a full purchase flow — this is by design, not limitation.',
      },
      {
        q: 'How do I inquire about a piece?',
        a: 'On any product page, click "Inquire About This Piece." We\'ll follow up within two business days with availability, pricing details, and next steps.',
      },
      {
        q: 'Are prices negotiable?',
        a: 'Prices are set by the brands. We don\'t mark up or mark down. What you see is what the maker values their work at.',
      },
    ],
  },
  {
    category: 'Shipping & Returns',
    items: [
      {
        q: 'Where do you ship?',
        a: 'Currently we serve customers across India. International shipping is coming soon.',
      },
      {
        q: 'What is the return policy?',
        a: 'Each brand has its own return policy. We\'ll share the relevant policy details during the inquiry process before any purchase is made. In general, we encourage you to ask questions before buying — that\'s the whole point of the inquiry model.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Most pieces ship within 3–7 business days within India, depending on the brand\'s location and the piece (some are made to order).',
      },
    ],
  },
  {
    category: 'Care & Materials',
    items: [
      {
        q: 'How do I care for my jewellery?',
        a: 'Keep pieces away from perfume, lotions, and water. Store them individually to avoid scratching. Remove before sleeping or physical activity. Wipe with a soft, dry cloth after wearing. Proper care can extend the life of a plated piece significantly.',
      },
      {
        q: 'What does "gold vermeil" mean?',
        a: 'Vermeil is a thick layer of gold (at least 2.5 microns) electroplated over sterling silver. It\'s more durable than standard gold plating and is the standard for quality jewellery.',
      },
      {
        q: 'What is the difference between gold-filled and gold-plated?',
        a: 'Gold-filled has a much thicker gold layer bonded mechanically to a base metal — it\'s more durable and longer-lasting. Gold-plated uses a thin electroplated layer and will wear off faster. We highlight material details on every product page.',
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-dm-sans text-sm text-text-primary group-hover:text-accent-gold transition-colors duration-300 pr-8">
          {q}
        </span>
        <span className="font-dm-sans text-lg text-text-tertiary flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          +
        </span>
      </button>
      {open && (
        <div className="pb-6 pr-8">
          <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-bg-primary border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-6">
            Questions
          </p>
          <h1 className="font-cormorant text-3xl md:text-5xl text-text-primary leading-tight">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-10 md:space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-8">
                {section.category}
              </h2>
              <div>
                {section.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 md:py-28 bg-bg-primary border-t border-border-subtle text-center">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <h2 className="font-cormorant text-3xl text-text-primary mb-4">
            Still have a question?
          </h2>
          <p className="font-dm-sans text-sm text-text-secondary mb-8 leading-relaxed">
            Write to us directly. We read every message and respond within two business days.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 font-dm-sans text-xs uppercase tracking-btn text-text-primary border border-text-primary px-6 py-3 hover:border-accent-gold hover:text-accent-gold transition-all duration-300"
          >
            Contact Us
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>
    </div>
  )
}
