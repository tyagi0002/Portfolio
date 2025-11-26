'use client'

import { motion } from 'framer-motion'

export default function SignatureWatermark() {
  const keywords = [
    'AI ENGINEER',
    'LLM SPECIALIST',
    'CLOUD ARCHITECT',
    'ML INNOVATOR',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed bottom-8 right-8 z-[5] pointer-events-none select-none hidden lg:block"
    >
      <div className="relative">
        {/* Large Name Background */}
        <div className="text-right">
          <motion.h2
            className="text-[120px] font-black leading-none tracking-tighter"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(139, 92, 246, 0.15) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            VAIBHAV
            <br />
            TYAGI
          </motion.h2>
        </div>

        {/* Descriptive Keywords */}
        <motion.div
          className="absolute -bottom-6 right-0 space-y-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {keywords.map((keyword, index) => (
            <motion.div
              key={keyword}
              className="text-[10px] font-bold tracking-[0.2em] text-right"
              style={{
                color: 'rgba(59, 130, 246, 0.6)',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.2 + index * 0.1,
                duration: 0.6,
              }}
            >
              {keyword}
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="absolute -top-4 right-0 w-32 h-[2px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.5) 100%)',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        />

        {/* Year/Version Badge */}
        <motion.div
          className="absolute -top-8 right-0 text-[10px] font-mono text-blue-500/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          EST. 2024
        </motion.div>
      </div>
    </motion.div>
  )
}
