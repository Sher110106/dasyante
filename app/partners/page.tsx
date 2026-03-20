'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function PartnersPage() {
  const [form, setForm] = useState({
    brandName: '',
    contactName: '',
    email: '',
    website: '',
    description: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    try {
      const res = await fetch('/api/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setResult({ success: true, message: data.message })
        setForm({ brandName: '', contactName: '', email: '', website: '', description: '' })
      } else {
        setResult({ success: false, message: data.error })
      }
    } catch {
      setResult({ success: false, message: 'Unable to submit. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/IMG_5181.jpg"
            alt="Partner with Dasyante"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <p className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-4">
            For Brands
          </p>
          <h1 className="font-cormorant text-3xl md:text-5xl lg:text-7xl text-white leading-tight">
            Partner with Dasyante
          </h1>
          <p className="font-dm-sans text-base text-white/70 mt-6 max-w-xl mx-auto leading-relaxed">
            We work with a small, carefully selected set of brands. If you believe your work belongs here, tell us your story.
          </p>
        </div>
      </section>

      {/* What we look for */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-10">
            What We Look For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="font-cormorant text-2xl text-text-primary">Craft with intention</h3>
              <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">
                Every piece should exist for a reason. We look for brands that make things because they have something to say, not because there's a market gap to fill.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-cormorant text-2xl text-text-primary">Stories worth telling</h3>
              <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">
                The best jewellery has a narrative — a founder who left something behind to make this, a material that carries meaning, a form that references something real.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-cormorant text-2xl text-text-primary">Permanence over trend</h3>
              <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">
                We don't curate seasonal drops. We curate pieces that will still feel right in ten years. If your work is made to last, we want to know about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What partnership means */}
      <section className="py-20 md:py-28 bg-bg-tertiary">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2 className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-10">
            What Partnership Means
          </h2>
          <div className="space-y-8 font-dm-sans text-base text-text-secondary leading-relaxed">
            <p>
              Dasyante is not a listing platform. We don't give you a shop page and wish you luck. When we partner with a brand, we take time to understand your work — the founder story, the philosophy, the pieces that define you — and we present that to our audience with the depth it deserves.
            </p>
            <p>
              We feature a maximum of three to five brands at any time. Our audience is small and deeply engaged. They read the stories. They understand the context. They buy with intention.
            </p>
            <p>
              If that's the kind of customer you want to reach, fill out the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <h2 className="font-cormorant text-3xl md:text-4xl text-text-primary mb-4">
            Apply to Partner
          </h2>
          <p className="font-dm-sans text-sm text-text-secondary mb-12 leading-relaxed">
            Tell us about your brand. We review every application and respond within 5–7 business days.
          </p>

          {result?.success ? (
            <div className="py-16 text-center">
              <p className="font-cormorant text-2xl text-text-primary italic mb-4">
                Application received.
              </p>
              <p className="font-dm-sans text-sm text-text-secondary">
                {result.message}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-dm-sans text-xs uppercase tracking-wide text-text-primary">
                    Brand Name <span className="text-accent-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="brandName"
                    value={form.brandName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-border-subtle bg-bg-tertiary font-dm-sans text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="e.g. Minimal Studio"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-dm-sans text-xs uppercase tracking-wide text-text-primary">
                    Your Name <span className="text-accent-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={form.contactName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-border-subtle bg-bg-tertiary font-dm-sans text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="Founder or representative"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-dm-sans text-xs uppercase tracking-wide text-text-primary">
                    Email <span className="text-accent-gold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-border-subtle bg-bg-tertiary font-dm-sans text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="you@brand.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-dm-sans text-xs uppercase tracking-wide text-text-primary">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-border-subtle bg-bg-tertiary font-dm-sans text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="https://yourbrand.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-dm-sans text-xs uppercase tracking-wide text-text-primary">
                  Tell us about your brand <span className="text-accent-gold">*</span>
                </label>
                <p className="font-dm-sans text-xs text-text-tertiary">
                  What do you make, why do you make it, and what makes your work worth a Dasyante customer's attention?
                </p>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-border-subtle bg-bg-tertiary font-dm-sans text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors resize-none"
                  placeholder="Write openly. We read every word."
                />
              </div>

              {result && !result.success && (
                <p className="font-dm-sans text-sm text-red-600">{result.message}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-accent-gold text-bg-primary font-dm-sans text-xs uppercase tracking-btn hover:bg-accent-gold-dark transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
