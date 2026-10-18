'use client'

import { motion } from 'framer-motion'

export default function SignatureWatermark() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.8 }}
      className="pointer-events-none absolute bottom-10 right-8 z-[5] hidden select-none xl:block"
    >
      <div className="text-right">
        <div className="mb-3 text-[10px] tracking-[0.35em] text-white/25">EST. 2024</div>
        <div
          className="font-display text-[92px] font-semibold leading-[0.82] tracking-[-0.06em]"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          VT
        </div>
      </div>
    </motion.div>
  )
}
