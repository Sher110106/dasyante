import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
  onClick?: () => void
}

export default function Card({
  children,
  className = '',
  padding = 'md',
  hover = false,
  onClick,
}: CardProps) {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8 md:p-12',
  }

  const baseStyles = `bg-bg-primary border border-border-subtle ${paddingStyles[padding]} ${className}`

  if (hover) {
    return (
      <motion.div
        className={`${baseStyles} cursor-pointer`}
        onClick={onClick}
        whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={baseStyles} onClick={onClick}>
      {children}
    </div>
  )
}
