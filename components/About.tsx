'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card-surface p-12 lg:p-16"
        >
          <div className="max-w-4xl">
            <p className="text-xl lg:text-2xl leading-relaxed mb-8">
              I'm <span className="text-gradient font-bold">VAIBHAV TYAGI</span>, an AI
              developer merging machine learning with cloud infrastructure to create
              intelligent, scalable systems.
            </p>
            <p className="text-lg text-[#a0a0a0] leading-relaxed">
              I craft <span className="text-white font-medium">AI Solutions</span> and
              regularly share my learnings as{' '}
              <span className="text-white font-medium">Technical Insights</span> by
              writing about my discoveries in LLMs, RAG systems, and cloud architecture.
              Specialized in building production-ready AI applications that solve real-world
              problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

