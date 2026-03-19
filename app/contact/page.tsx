'use client'

import { useState } from 'react'

const TOPICS = [
  'General Enquiry',
  'Order or Inquiry',
  'Brand Partnership',
  'Press & Media',
  'Something Else',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    // Since there's no contact API, we open a mailto as fallback
    // Replace this with a real contact API endpoint when ready
    const subject = encodeURIComponent(`[${form.topic}] from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    )
    window.open(`mailto:help@dasyante.com?subject=${subject}&body=${body}`, '_blank')

    setResult({
      success: true,
      message: "We've opened your email client. If it didn't open, write to us directly at help@dasyante.com",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-bg-primary border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-6">
            Get in Touch
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl text-text-primary leading-tight mb-6">
            Contact Us
          </h1>
          <p className="font-dm-sans text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            We're a small team and we read every message. Expect a reply within two business days.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="font-dm-sans text-xs uppercase tracking-section text-text-primary">
                  Email
                </h2>
                <a
                  href="mailto:help@dasyante.com"
                  className="font-cormorant text-2xl text-text-primary hover:text-accent-gold transition-colors duration-300 block"
                >
                  help@dasyante.com
                </a>
                <p className="font-dm-sans text-sm text-text-secondary">
                  For general enquiries, product questions, or anything else.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-dm-sans text-xs uppercase tracking-section text-text-primary">
                  Brand Partnerships
                </h2>
                <a
                  href="mailto:help@dasyante.com"
                  className="font-cormorant text-2xl text-text-primary hover:text-accent-gold transition-colors duration-300 block"
                >
                  help@dasyante.com
                </a>
                <p className="font-dm-sans text-sm text-text-secondary">
                  Or use our{' '}
                  <a href="/partners" className="text-accent-gold hover:underline">
                    partner application form
                  </a>{' '}
                  for a faster response.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-dm-sans text-xs uppercase tracking-section text-text-primary">
                  Press & Media
                </h2>
                <a
                  href="mailto:help@dasyante.com"
                  className="font-cormorant text-2xl text-text-primary hover:text-accent-gold transition-colors duration-300 block"
                >
                  help@dasyante.com
                </a>
                <p className="font-dm-sans text-sm text-text-secondary">
                  For features, interviews, and media inquiries.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-dm-sans text-xs uppercase tracking-section text-text-primary">
                  Response Time
                </h2>
                <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">
                  We respond within two business days. If your message is urgent, please note that in the subject line.
                </p>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <h2 className="font-cormorant text-3xl text-text-primary mb-8">Send a message</h2>

              {result?.success ? (
                <div className="py-12 text-center">
                  <p className="font-cormorant text-2xl text-text-primary italic mb-4">
                    Message prepared.
                  </p>
                  <p className="font-dm-sans text-sm text-text-secondary leading-relaxed">
                    {result.message}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-dm-sans text-xs uppercase tracking-wide text-text-primary">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-border-subtle bg-bg-primary font-dm-sans text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-dm-sans text-xs uppercase tracking-wide text-text-primary">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-border-subtle bg-bg-primary font-dm-sans text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-dm-sans text-xs uppercase tracking-wide text-text-primary">
                      Topic
                    </label>
                    <select
                      name="topic"
                      value={form.topic}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-border-subtle bg-bg-primary font-dm-sans text-sm text-text-primary focus:outline-none focus:border-accent-gold transition-colors appearance-none"
                    >
                      {TOPICS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-dm-sans text-xs uppercase tracking-wide text-text-primary">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-border-subtle bg-bg-primary font-dm-sans text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors resize-none"
                      placeholder="Tell us what's on your mind."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-text-primary text-white font-dm-sans text-xs uppercase tracking-btn hover:bg-accent-gold transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Preparing...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
