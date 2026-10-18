'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const items = [
  {
    n: '01',
    title: 'RAG & LLM systems',
    body: 'Grounded generation. Evaluation. Latency budgets. The model is a component, not the product.',
    image: '/images/jonakoh.jpg',
  },
  {
    n: '02',
    title: 'Cloud architecture',
    body: 'AWS platforms that scale, fail politely, and do not surprise finance at the end of the month.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
  },
  {
    n: '03',
    title: 'Applied machine learning',
    body: 'Vision, prediction, pipelines — trained for a job, not a notebook screenshot.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80',
  },
  {
    n: '04',
    title: 'Product engineering',
    body: 'Next.js, FastAPI, the last mile. Interfaces and APIs that feel finished.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
  },
]

export default function Capabilities() {
  const [active, setActive] = useState(0)

  return (
    <section id="capabilities" className="relative border-t border-ivory/10 bg-ink px-5 py-28 md:px-8">
      <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-muted">03 — Capabilities</p>
      <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div>
          {items.map((item, i) => (
            <button
              key={item.n}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className="block w-full border-t border-ivory/10 py-6 text-left last:border-b"
              data-cursor="SEE"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[11px] tracking-[0.25em] text-muted">{item.n}</span>
                <h3
                  className={`flex-1 font-serif text-3xl tracking-mega transition-colors md:text-5xl ${
                    active === i ? 'text-lime' : 'text-ivory'
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className={`mt-3 max-w-xl text-sm leading-relaxed transition-opacity md:text-base ${
                  active === i ? 'opacity-80' : 'opacity-70 lg:h-0 lg:overflow-hidden lg:opacity-0'
                }`}
              >
                {item.body}
              </p>
            </button>
          ))}
        </div>

        <div className="relative hidden min-h-[480px] overflow-hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={items[active].n}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={items[active].image}
                alt={items[active].title}
                fill
                className="object-cover"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-ink/25 mix-blend-multiply" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
