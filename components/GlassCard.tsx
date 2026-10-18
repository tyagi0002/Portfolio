'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type GlassCardProps = {
  children: React.ReactNode
  className?: string
  hoverTilt?: boolean
}

export default function GlassCard({ children, className = '', hoverTilt = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState({ x: 50, y: 50, opacity: 0 })
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 160, damping: 18, mass: 0.4 })
  const springY = useSpring(rotateY, { stiffness: 160, damping: 18, mass: 0.4 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setSpot({ x, y, opacity: 1 })
    if (hoverTilt) {
      rotateX.set(((y - 50) / 50) * -5)
      rotateY.set(((x - 50) / 50) * 7)
    }
  }

  const onLeave = () => {
    setSpot((s) => ({ ...s, opacity: 0 }))
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1100 }}
      className={`glass overflow-hidden rounded-3xl ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500"
        style={{
          opacity: spot.opacity * 0.9,
          background: `radial-gradient(520px circle at ${spot.x}% ${spot.y}%, rgba(150,176,255,0.16), transparent 42%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}
