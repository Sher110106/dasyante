'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Card from '@/components/shared/Card'

const pathways = [
  {
    title: 'For You',
    subtitle: 'Refine your sense of style',
    description: 'Explore curated collections chosen for taste, not trends.',
    href: '/collections',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    title: 'Buying with Meaning',
    subtitle: 'Understand what you wear',
    description: 'Learn the stories, craft, and context behind each piece.',
    href: '/stories?category=what-this-means',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    title: 'Gifting Without Guesswork',
    subtitle: 'Choose something they\'ll actually value',
    description: 'Find pieces that communicate thoughtfulness, not just taste.',
    href: '/collections?filter=gifting',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function EntryPaths() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {pathways.map((pathway) => (
            <motion.div key={pathway.title} variants={cardVariants}>
              <Link href={pathway.href}>
                <Card padding="lg" hover className="h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Icon */}
                    <div className="text-accent-gold mb-6">{pathway.icon}</div>

                    {/* Title */}
                    <h3 className="font-cormorant text-2xl md:text-3xl text-text-primary mb-3">
                      {pathway.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="font-dm-sans text-sm uppercase tracking-section text-accent-gold mb-4">
                      {pathway.subtitle}
                    </p>

                    {/* Description */}
                    <p className="font-dm-sans text-base text-text-secondary leading-relaxed mb-6 flex-grow">
                      {pathway.description}
                    </p>

                    {/* Link */}
                    <div className="font-dm-sans text-sm text-accent-gold hover:text-accent-gold-dark transition-colors duration-300">
                      Explore →
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
