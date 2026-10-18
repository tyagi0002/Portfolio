'use client'

import { motion } from 'framer-motion'

const lines = ['Not the model.', 'The system', 'around it.']

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-between px-5 pb-8 pt-24 md:px-8">
      <div className="flex items-start justify-between gap-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-xs font-mono text-[11px] leading-relaxed tracking-[0.22em] uppercase text-ivory/70"
        >
          AI developer · LLM engineer
          <br />
          RAG, cloud, production systems
          <br />
          Ghaziabad, India
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase text-ivory/70 md:flex"
        >
          <span className="tick h-1.5 w-1.5 rounded-full bg-lime" />
          Available
        </motion.div>
      </div>

      <div>
        <h1 className="font-serif text-[16vw] leading-[0.82] tracking-mega md:text-[9.5vw]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${i === 1 ? 'italic text-lime' : ''}`}
                initial={{ y: '120%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, delay: 0.15 + i * 0.12, ease: [0.76, 0, 0.24, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-10 flex flex-col justify-between gap-6 border-t border-ivory/15 pt-6 md:flex-row md:items-end"
        >
          <p className="max-w-md text-lg leading-relaxed text-ivory/75 md:text-xl">
            I ship retrieval, language, and infrastructure that stay calm under real load.
            Quiet surfaces. Unforgiving internals.
          </p>
          <a
            href="#work"
            className="font-mono text-[11px] tracking-[0.32em] uppercase text-ivory"
            data-cursor="SCROLL"
          >
            Enter the work ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}
