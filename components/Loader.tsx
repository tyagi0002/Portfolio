'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (sessionStorage.getItem('vt-booted')) {
      setVisible(false)
      return
    }

    document.body.style.overflow = 'hidden'
    const start = performance.now()
    const duration = 1600
    let raf = 0

    const tick = (now: number) => {
      const p = Math.min(100, Math.round(((now - start) / duration) * 100))
      setProgress(p)
      if (p < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        sessionStorage.setItem('vt-booted', '1')
        setTimeout(() => {
          setVisible(false)
          document.body.style.overflow = ''
        }, 280)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-6 py-8 text-ivory md:px-10"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.35em] uppercase">
            <span>Vaibhav Tyagi</span>
            <span>Boot sequence</span>
          </div>
          <div>
            <p className="font-serif text-[18vw] leading-[0.8] tracking-mega md:text-[9vw]">
              {String(progress).padStart(3, '0')}
            </p>
            <div className="mt-6 h-px w-full bg-ivory/15">
              <motion.div className="h-px bg-lime" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="flex items-end justify-between font-mono text-[10px] tracking-[0.28em] uppercase text-muted">
            <span>Intelligence / production</span>
            <span>Ghaziabad</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
