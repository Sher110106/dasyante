'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'solid' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  variant = 'solid',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-dm-sans uppercase tracking-btn transition-all duration-300 relative overflow-hidden'

  const variantStyles = {
    solid: 'bg-accent-gold text-white hover:bg-accent-gold-dark',
    ghost: 'bg-transparent text-accent-gold border-2 border-accent-gold hover:bg-accent-gold hover:text-white',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-[11px]',
    lg: 'px-8 py-4 text-[12px]',
  }

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        <motion.span
          className="relative z-10"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>

        {/* Underline animation for ghost buttons */}
        {variant === 'ghost' && (
          <motion.span
            className="absolute bottom-0 left-0 h-[2px] bg-accent-gold"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        )}
      </Link>
    )
  }

  // Otherwise render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <span className="relative z-10">{children}</span>

      {/* Underline animation for ghost buttons */}
      {variant === 'ghost' && (
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] bg-accent-gold"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      )}
    </motion.button>
  )
}
