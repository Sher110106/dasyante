'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function HeroGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 40, damping: 30 }
  const x = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), springConfig)
  const y = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    // Only enable parallax on desktop
    const mq = window.matchMedia('(pointer: fine)')
    if (mq.matches) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: '900px',
        height: '900px',
        background: 'radial-gradient(circle at center, #C9A96E08 0%, transparent 65%)',
        x,
        y,
        zIndex: 0,
        left: '50%',
        top: '50%',
        marginLeft: '-450px',
        marginTop: '-450px',
      }}
    />
  )
}
