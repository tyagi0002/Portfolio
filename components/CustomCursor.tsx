'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [on, setOn] = useState(false)
  const [visible, setVisible] = useState(false)
  const [label, setLabel] = useState('')
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(x, { stiffness: 160, damping: 22, mass: 0.45 })
  const ry = useSpring(y, { stiffness: 160, damping: 22, mass: 0.45 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setOn(true)
    document.body.classList.add('cursor-none-desktop')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest('[data-cursor]') as HTMLElement | null
      setLabel(el?.dataset.cursor || '')
    }
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', leave)
    return () => {
      document.body.classList.remove('cursor-none-desktop')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  if (!on) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[110] mix-blend-difference"
      style={{ x: rx, y: ry, translateX: '-50%', translateY: '-50%', opacity: visible ? 1 : 0 }}
    >
      <div
        className={`flex items-center justify-center rounded-full border border-ivory transition-all duration-300 ${
          label ? 'h-16 w-16 bg-ivory' : 'h-3 w-3 bg-ivory'
        }`}
      >
        {label ? (
          <span className="font-mono text-[9px] tracking-[0.2em] text-ink">{label}</span>
        ) : null}
      </div>
    </motion.div>
  )
}
