'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData {
  email: string
}

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted: hasAttempted },
  } = useForm<FormData>({
    mode: 'onSubmit',
  })

  const onSubmit = async (data: FormData) => {
    try {
      setServerError('')
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong')
      }

      setSubmitted(true)
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <div className="w-full" style={{ maxWidth: 'min(480px, 60vw)' }}>
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
            className="w-full"
          >
            {/* Input + Button row */}
            <div className="flex flex-col sm:flex-row w-full">
              <input
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                {...register('email', {
                  required: 'Please enter your email',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email',
                  },
                })}
                className="flex-1 bg-transparent font-dm-sans text-input font-light tracking-input px-5 py-3.5 outline-none transition-all duration-300 placeholder:opacity-40"
                style={{
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 0,
                  color: 'var(--text-primary)',
                  caretColor: 'var(--accent-gold)',
                  borderBottom: errors.email && hasAttempted ? '1px solid var(--error-amber)' : undefined,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--border-focus)'
                  e.target.style.boxShadow = '0 0 0 1px var(--accent-gold-dim), 0 4px 24px var(--accent-gold-dim)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-subtle)'
                  e.target.style.boxShadow = 'none'
                }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative font-dm-sans text-button font-normal uppercase tracking-btn px-7 py-3.5 transition-all duration-300 group sm:border-l-0"
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-subtle)',
                  borderLeft: 'none',
                  borderRadius: 0,
                  color: 'var(--accent-gold)',
                }}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                </span>
                {/* Gold underline on hover */}
                <span
                  className="absolute bottom-3 left-7 right-7 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-350 ease-out"
                  style={{ backgroundColor: 'var(--accent-gold)' }}
                />
              </button>
            </div>

            {/* Error message */}
            <AnimatePresence>
              {(errors.email && hasAttempted) || serverError ? (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.3 }}
                  className="font-dm-sans mt-3 text-left"
                  style={{
                    fontSize: '11px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {errors.email?.message || serverError}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </motion.form>
        ) : (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant italic text-center"
            style={{
              fontSize: '22px',
              color: 'var(--text-primary)',
            }}
          >
            You&apos;re on the list.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
