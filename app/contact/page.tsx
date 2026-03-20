'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const TOPICS = [
  'General Enquiry',
  'Order or Inquiry',
  'Brand Partnership',
  'Press & Media',
  'Something Else',
]

function ContactForm() {
  const searchParams = useSearchParams()
  const topicParam = searchParams.get('topic') ?? ''
  const productParam = searchParams.get('product') ?? ''

  const initialTopic = TOPICS.includes(topicParam) ? topicParam : TOPICS[0]
  const initialMessage = productParam ? `I'd like to inquire about: ${productParam}` : ''

  const [form, setForm] = useState({ name: '', email: '', topic: initialTopic, message: initialMessage })
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

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setResult({ success: true, message: "Your message has been received. We'll be in touch within two business days." })
        setForm({ name: '', email: '', topic: TOPICS[0], message: '' })
      } else {
        const data = await res.json()
        setResult({ success: false, message: data.error ?? 'Something went wrong. Please try again.' })
      }
    } catch {
      setResult({ success: false, message: 'Unable to send. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-bg-primary border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-dm-sans text-xs uppercase tracking-section text-accent-gold mb-6">
            Get in Touch
          </p>
          <h1 className="font-cormorant text-3xl md:text-5xl md:text-6xl text-text-primary leading-tight mb-6">
            Contact Us
          </h1>
          <p className="font-dm-sans text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            We're a small team and we read every message. Expect a reply within two business days.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
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
                    Message received.
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
                        className="w-full px-4 py-3 border border-border-subtle bg-bg-tertiary font-dm-sans text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-gold transition-colors"
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
                        className="w-full px-4 py-3 border border-border-subtle bg-bg-tertiary font-dm-sans text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-gold transition-colors"
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
                      className="w-full px-4 py-3 border border-border-subtle bg-bg-tertiary font-dm-sans text-sm text-text-primary focus:outline-none focus:border-accent-gold transition-colors appearance-none"
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
                      className="w-full px-4 py-3 border border-border-subtle bg-bg-tertiary font-dm-sans text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-gold transition-colors resize-none"
                      placeholder="Tell us what's on your mind."
                    />
                  </div>

                  {result && !result.success && (
                    <p className="font-dm-sans text-sm text-text-secondary">{result.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent-gold text-bg-primary font-dm-sans text-xs uppercase tracking-btn hover:bg-accent-gold-dark transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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

export default function ContactPage() {
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  )
}
