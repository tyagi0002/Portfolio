'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[80] h-[2px] origin-left bg-lime"
      style={{ scaleX }}
    />
  )
}
