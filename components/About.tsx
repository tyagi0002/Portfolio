'use client'

import GlassCard from './GlassCard'

export default function About() {
  return (
    <section className="scroll-mt-28 px-6 py-20 lg:px-12" id="about">
      <div className="mx-auto max-w-site">
        <GlassCard className="p-10 lg:p-16" hoverTilt={false}>
          <p className="eyebrow mb-6">About</p>
          <p className="mb-8 max-w-4xl text-2xl leading-relaxed md:text-3xl md:leading-snug">
            I&apos;m <span className="text-gradient font-semibold">Vaibhav Tyagi</span>, an AI
            developer merging machine learning with cloud infrastructure to create intelligent,
            scalable systems.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-[#9aa3b5]">
            I craft production AI solutions and write about what I actually learn — LLMs, RAG,
            and architecture that survives contact with users. The work is meant to feel considered:
            fewer gimmicks, more systems that hold.
          </p>
        </GlassCard>
      </div>
    </section>
  )
}
