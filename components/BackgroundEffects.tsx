'use client'

import { motion } from 'framer-motion'

const particles = [
  { left: '8%', top: '18%', delay: 0.2, duration: 14 },
  { left: '22%', top: '72%', delay: 1.1, duration: 16 },
  { left: '41%', top: '28%', delay: 2.4, duration: 18 },
  { left: '63%', top: '14%', delay: 0.8, duration: 15 },
  { left: '78%', top: '46%', delay: 1.8, duration: 17 },
  { left: '88%', top: '78%', delay: 0.4, duration: 19 },
  { left: '12%', top: '54%', delay: 2.1, duration: 13 },
  { left: '34%', top: '86%', delay: 1.4, duration: 20 },
  { left: '56%', top: '62%', delay: 0.6, duration: 16 },
  { left: '71%', top: '32%', delay: 2.8, duration: 14 },
]

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(900px circle at 12% 8%, rgba(90, 130, 255, 0.16), transparent 42%), radial-gradient(800px circle at 88% 18%, rgba(140, 110, 255, 0.12), transparent 40%), radial-gradient(700px circle at 70% 88%, rgba(70, 180, 255, 0.08), transparent 45%)',
        }}
      />

      <motion.div
        className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(106,148,255,0.28) 0%, transparent 68%)',
          filter: 'blur(40px)',
        }}
        animate={{ x: [0, 40, -10, 0], y: [0, 30, 10, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -right-24 top-1/4 h-[460px] w-[460px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 68%)',
          filter: 'blur(48px)',
        }}
        animate={{ x: [0, -30, 12, 0], y: [0, 24, -16, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <motion.div
        className="absolute bottom-[-120px] left-1/3 h-[420px] w-[420px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.16, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 78%)',
        }}
      />

      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-white/50"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.55, 0.15] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="noise-overlay" />
      <div className="vignette" />
    </div>
  )
}
