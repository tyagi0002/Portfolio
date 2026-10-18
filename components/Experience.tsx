'use client'

import { motion } from 'framer-motion'

const jobs = [
  {
    year: '2025',
    role: 'AI Developer',
    company: 'Caasaa AI Innovations',
    where: 'Greater Noida',
    note: 'LLM applications and RAG at production scale. Pipelines over 1M documents a day. Query time cut by 60%.',
  },
  {
    year: '2025',
    role: 'AI / ML Engineer',
    company: 'Impulsive Web',
    where: 'Noida',
    note: 'AWS, DevOps, auto-scaling past 10K concurrent users. Cost down 40%. Uptime treated as a product feature.',
  },
  {
    year: '2024',
    role: 'Machine Learning Intern',
    company: 'Unified Mentor',
    where: 'Gurugram',
    note: 'Industrial vision and predictive work. 92% detection accuracy. Training time halved.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-ivory/10 bg-ink px-5 py-28 md:px-8">
      <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-muted">04 — Trajectory</p>
      <h2 className="mt-4 font-serif text-5xl tracking-mega md:text-7xl">A short, steep path.</h2>
      <div className="mt-16">
        {jobs.map((job, i) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className="grid gap-4 border-t border-ivory/10 py-10 md:grid-cols-[140px_1fr_1.2fr] md:gap-10"
          >
            <p className="font-serif text-4xl italic text-lime">{job.year}</p>
            <div>
              <h3 className="font-serif text-3xl tracking-mega md:text-4xl">{job.role}</h3>
              <p className="mt-2 font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
                {job.company} · {job.where}
              </p>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-ivory/75">{job.note}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
