'use client'

import { motion } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'
import Magnetic from './Magnetic'
import SignatureWatermark from './SignatureWatermark'

const lines = ['Building intelligent', 'systems with AI', 'and cloud architecture']

const statusCards = [
  { label: 'Availability', action: 'Open for collaboration', href: '#contact' },
  { label: 'Selected work', action: 'Explore the studio', href: '#works' },
  { label: 'Direct line', action: 'Write a message', href: 'mailto:tyagivaibhav2018@gmail.com' },
]

const stats = [
  { value: '3+', label: 'Years shipping AI' },
  { value: '1M+', label: 'Docs processed daily' },
  { value: '99.9%', label: 'Uptime on cloud' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-32 lg:px-12 lg:pt-40">
      <div className="relative mx-auto max-w-site">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="live-dot absolute inset-0 rounded-full bg-emerald-400" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="eyebrow">Available for select projects</span>
        </motion.div>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] text-white md:text-7xl lg:text-[88px]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${i === 1 ? 'text-gradient' : ''}`}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.12 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-[#9aa3b5]"
        >
          I design production RAG systems, LLM applications, and cloud platforms that feel
          inevitable — precise, scalable, and quietly powerful.
        </motion.p>

        <div className="mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {statusCards.map((card, index) => (
            <Magnetic key={card.label}>
              <motion.a
                href={card.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 + index * 0.08 }}
                className="glass group block rounded-2xl p-5"
                data-cursor="hover"
              >
                <div className="mb-6 flex items-center justify-between text-[#8e98ad]">
                  <span className="text-xs tracking-[0.18em] uppercase">{card.label}</span>
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div className="text-[15px] font-medium text-white">{card.action}</div>
              </motion.a>
            </Magnetic>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-wrap items-end justify-between gap-8 border-t border-white/8 pt-8"
        >
          <div className="flex gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-white">{stat.value}</div>
                <div className="mt-1 text-xs tracking-wide text-[#8e98ad]">{stat.label}</div>
              </div>
            ))}
          </div>
          <a href="#works" className="group inline-flex items-center gap-3 text-sm text-[#9aa3b5]">
            Scroll to work
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12">
              <FiArrowDown className="transition-transform duration-500 group-hover:translate-y-0.5" />
            </span>
          </a>
        </motion.div>
      </div>
      <SignatureWatermark />
    </section>
  )
}
