'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import GlassCard from './GlassCard'

const topics = [
  'Latest Projects',
  'RAG System Tips',
  'AI Workflow',
  'LLM Practices',
  'Cloud Architecture',
]

export default function UpcomingDrop() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-site">
        <GlassCard className="p-4 lg:p-6" hoverTilt={false}>
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            <div className="relative h-[340px] overflow-hidden rounded-2xl md:h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80"
                alt="Abstract neural lighting"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06070b]/70 via-transparent to-transparent" />
              <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-white backdrop-blur-xl">
                Upcoming
              </span>
            </div>

            <div className="flex flex-col justify-center px-2 py-4 lg:pr-6">
              <p className="eyebrow mb-4">Field notes</p>
              <h2 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl">
                Advanced AI systems.
                <span className="text-gradient"> Get the drop first.</span>
              </h2>
              <p className="mb-8 max-w-md text-[#9aa3b5]">
                Private notes on production RAG, LLM orchestration, and cloud systems — written
                like architecture, not marketing.
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4 text-sm text-emerald-200"
                >
                  You&apos;re on the list. I&apos;ll write when it matters.
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="mb-6">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      required
                      className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-[#667084] focus:border-white/25 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0b0d12] transition-opacity hover:opacity-90"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              )}

              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-[#9aa3b5]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
