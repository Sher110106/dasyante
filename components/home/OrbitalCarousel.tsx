'use client'

import { useEffect, useRef } from 'react'

/**
 * Orbital image carousel — jewellery editorial shots + lifestyle images.
 */
const ITEMS = [
  { type: 'image', src: '/1-14KLETTERS-14kLetterBracelet-14K-Stack1_044.jpg',                                                    w: 138, h: 178, objPos: '50% 30%', tilt: -14 },
  { type: 'image', src: '/1-BirthstoneStudsJunePearl_14k_Stack1_014_4ec826e1-08bc-47eb-a034-47ba6a81a809.jpg',                  w: 118, h: 152, objPos: '50% 25%', tilt:  22 },
  { type: 'video', src: '/4910096-hd_1920_1080_30fps.mp4',                                                                      w: 148, h: 192, objPos: '50% 50%', tilt:  -8 },
  { type: 'image', src: '/1-BIRTHSTONEBRACELETS_BirthstoneBraceletJanuaryGarnet_14k_Stack_012.jpg',                             w: 112, h: 144, objPos: '50% 50%', tilt:  18 },
  { type: 'image', src: '/home1.jpg',                                                                                            w: 132, h: 168, objPos: '50% 20%', tilt: -20 },
  { type: 'image', src: '/1-LGS3mmBraceletSilver-SS-Stack_00220231103-8314-sqpyfd_3643e966-dc74-4a90-9552-db74e74e5ec3.png',   w: 124, h: 158, objPos: '50% 40%', tilt:  10 },
  { type: 'image', src: '/home_2.jpg',                                                                                           w: 144, h: 184, objPos: '50% 55%', tilt: -16 },
  { type: 'image', src: '/PreciousMetals_2.webp',                                                                                w: 108, h: 138, objPos: '50% 50%', tilt:  24 },
] as const

const N = ITEMS.length
const SPEED = 0.00028 // radians per ms

/**
 * Golden angle distribution — creates the natural spiral/sunflower feel.
 * Items are NOT evenly spaced: the uneven angular gaps make some cluster
 * at the top (far) and some at the bottom (near), just like a real spiral.
 */
const GOLDEN_ANGLE = 2.39996323 // radians (~137.5°)
const BASE_ANGLES  = Array.from({ length: N }, (_, i) => i * GOLDEN_ANGLE)

/**
 * Orbit radii — large enough so items never enter the center text zone.
 * CTA buttons sit ~130px below center. Tallest card is 192px, so the card
 * top edge when at the bottom of the orbit = ry - 96px. We need ry > 230
 * minimum; desktop uses 305 for generous clearance.
 */
function getRadii() {
  if (typeof window === 'undefined') return { rx: 440, ry: 305 }
  const w = window.innerWidth
  if (w < 380)  return { rx: 130, ry: 110 }
  if (w < 480)  return { rx: 155, ry: 130 }
  if (w < 768)  return { rx: 230, ry: 175 }
  if (w < 1200) return { rx: 350, ry: 245 }
  return                { rx: 440, ry: 305 }
}

function getCardScale() {
  if (typeof window === 'undefined') return 1
  const w = window.innerWidth
  if (w < 380) return 0.48
  if (w < 480) return 0.58
  if (w < 768) return 0.75
  return 1
}

export default function OrbitalCarousel() {
  const refs          = useRef<(HTMLDivElement | null)[]>([])
  const rafRef        = useRef<number>(0)
  const radiiRef      = useRef(getRadii())
  const cardScaleRef  = useRef(getCardScale())

  useEffect(() => {
    const onResize = () => {
      radiiRef.current     = getRadii()
      cardScaleRef.current = getCardScale()
    }
    window.addEventListener('resize', onResize, { passive: true })

    let last  = performance.now()
    let angle = 0

    const animate = (now: number) => {
      const delta = now - last
      last  = now
      angle += SPEED * delta

      const { rx, ry } = radiiRef.current

      ITEMS.forEach((_, i) => {
        // golden-angle base + shared rotation offset
        const theta = angle + BASE_ANGLES[i]
        const x     = rx * Math.cos(theta)
        const y     = ry * Math.sin(theta)

        // depth: 1 = nearest (sin = +1 → bottom/front), 0 = farthest (sin = -1 → top/back)
        const depth   = (Math.sin(theta) + 1) / 2
        const scale   = 0.45 + 0.55 * depth
        const opacity = 0.12 + 0.88 * depth
        const blurPx  = (1 - depth) * 6

        // Cap z-index at 9 — center text & buttons sit at z-index 10, always on top
        const z = Math.round(depth * 8) + 1

        const el = refs.current[i]
        if (!el) return

        const item = ITEMS[i]
        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale}) rotate(${item.tilt}deg)`
        el.style.opacity   = opacity.toFixed(3)
        el.style.filter    = blurPx > 0.5 ? `blur(${blurPx.toFixed(2)}px)` : 'none'
        el.style.zIndex    = String(z)
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="absolute" style={{ top: '50%', left: '50%' }}>
        {ITEMS.map((item, i) => (
          <div
            key={i}
            ref={el => { refs.current[i] = el }}
            className="absolute overflow-hidden"
            style={{
              top: 0, left: 0,
              width:  Math.round(item.w * cardScaleRef.current),
              height: Math.round(item.h * cardScaleRef.current),
              willChange: 'transform, opacity, filter',
            }}
          >
            {item.type === 'video' ? (
              <video
                src={item.src}
                autoPlay loop muted playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt=""
                draggable={false}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: item.objPos,
                  display: 'block',
                  userSelect: 'none',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
