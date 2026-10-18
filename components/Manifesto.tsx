'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const phrase = [
  'Language models',
  'are cheap.',
  'Judgement,',
  'memory,',
  'and architecture',
  'are not.',
]

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return (
    <section ref={ref} className="relative bg-ink px-5 py-32 md:px-8 md:py-44">
      <p className="mb-16 font-mono text-[11px] tracking-[0.32em] uppercase text-muted">01 — Thesis</p>
      <div className="max-w-6xl">
        {phrase.map((word, i) => {
          const start = i / phrase.length
          const end = (i + 1) / phrase.length
          return (
            <Word key={word + i} text={word} progress={scrollYProgress} start={start} end={end} accent={word === 'are not.'} />
          )
        })}
      </div>
    </section>
  )
}

function Word({
  text,
  progress,
  start,
  end,
  accent,
}: {
  text: string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  start: number
  end: number
  accent?: boolean
}) {
  const opacity = useTransform(progress, [start, end], [0.12, 1])
  return (
    <motion.span
      style={{ opacity }}
      className={`mr-[0.28em] inline-block font-serif text-[12vw] leading-[0.95] tracking-mega md:text-[7.2vw] ${
        accent ? 'italic text-lime' : ''
      }`}
    >
      {text}
    </motion.span>
  )
}
