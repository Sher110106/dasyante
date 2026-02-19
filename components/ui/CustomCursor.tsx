'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const springConfig = { stiffness: 500, damping: 30, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only show custom cursor on devices with fine pointer (desktop)
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    setIsVisible(true)
    document.body.classList.add('custom-cursor')

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('input')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('input')
      ) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.body.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0"
      style={{
        x,
        y,
        zIndex: 10000,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 28 : 6,
          height: isHovering ? 28 : 6,
          backgroundColor: isHovering ? 'transparent' : 'rgba(201, 169, 110, 0.8)',
          borderColor: isHovering ? 'rgba(201, 169, 110, 0.8)' : 'transparent',
          borderWidth: isHovering ? 1.5 : 0,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="rounded-full"
        style={{ borderStyle: 'solid' }}
      />
    </motion.div>
  )
}
