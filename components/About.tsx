'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="about" ref={ref} className="relative overflow-hidden border-t border-ivory/10 bg-ink px-5 py-28 md:px-8">
      <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-muted">05 — About</p>
      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-end">
        <motion.h2
          style={{ y }}
          className="font-serif text-[16vw] leading-[0.8] tracking-mega text-ivory/10 lg:text-[9vw]"
        >
          Tyagi
        </motion.h2>
        <div className="max-w-xl pb-4">
          <p className="font-serif text-3xl leading-snug tracking-mega md:text-4xl">
            I merge machine learning with cloud infrastructure until the thing in the demo survives the thing in production.
          </p>
          <p className="mt-8 leading-relaxed text-ivory/70">
            Vaibhav Tyagi. I write about LLMs, RAG, and architecture the way I build them — without costume. The interesting
            problems are never the prompt. They are memory, evaluation, cost, and the hour when traffic is real.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] tracking-[0.22em] uppercase text-muted">
            {['LangChain', 'OpenAI', 'PyTorch', 'AWS', 'Next.js', 'FastAPI', 'Kubernetes', 'Postgres'].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
