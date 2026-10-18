'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  {
    n: '01',
    title: 'RAG Query System',
    tag: 'Memory for documents',
    copy: 'A retrieval stack that treats PDFs as a living index — semantic search, grounded answers, production latency.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80',
    href: 'https://github.com/tyagi0002',
  },
  {
    n: '02',
    title: 'Sign Language Net',
    tag: 'Vision that listens',
    copy: 'CNN + LSTM recognition across 50+ gestures. The model is the smallest part. The data loop is the work.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80',
    href: 'https://github.com/tyagi0002',
  },
  {
    n: '03',
    title: 'Cloud Skeleton',
    tag: 'AWS, under control',
    copy: 'Infrastructure that scales without theatre. CI/CD, cost, and 99.9% as a design constraint — not a slide.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
    href: 'https://github.com/tyagi0002',
  },
  {
    n: '04',
    title: 'Yield Optimizer',
    tag: 'ML in the field',
    copy: 'Soil, crop, fertilizer — a model that cuts waste ~30% because the objective was the farm, not the leaderboard.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80',
    href: 'https://github.com/tyagi0002',
  },
]

function Panel({ project }: { project: (typeof projects)[number] }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-[70vh] w-[85vw] shrink-0 flex-col justify-end overflow-hidden md:h-[78vh] md:w-[70vw]"
      data-cursor="VIEW"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        sizes="80vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div className="relative z-10 flex items-end justify-between gap-6 p-6 md:p-10">
        <div>
          <p className="mb-3 font-mono text-[11px] tracking-[0.28em] uppercase text-lime">
            {project.n} / {project.tag}
          </p>
          <h3 className="font-serif text-4xl tracking-mega md:text-6xl">{project.title}</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/75 md:text-base">{project.copy}</p>
        </div>
      </div>
    </a>
  )
}

export default function WorkGallery() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-72%'])

  return (
    <section id="work" ref={ref} className="relative bg-ink">
      <div className="px-5 pt-24 md:px-8">
        <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-muted">02 — Selected systems</p>
        <h2 className="mt-4 font-serif text-5xl tracking-mega md:text-7xl">Work that ships.</h2>
      </div>

      <div className="mt-10 md:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-16">
          {projects.map((p) => (
            <div key={p.n} className="snap-center">
              <Panel project={p} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative hidden h-[320vh] md:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 pl-8 pr-[20vw]">
            {projects.map((p) => (
              <Panel key={p.n} project={p} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
