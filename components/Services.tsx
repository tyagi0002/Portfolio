'use client'

import { FaBrain, FaRobot, FaCloud, FaCode, FaDatabase, FaChartLine } from 'react-icons/fa'
import GlassCard from './GlassCard'

const services = [
  {
    icon: <FaBrain />,
    title: 'AI Development',
    description: 'Custom models and neural systems for problems that cannot be templated.',
  },
  {
    icon: <FaRobot />,
    title: 'LLM & RAG Systems',
    description: 'Retrieval pipelines, grounding, evaluation, and latency-aware orchestration.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Architecture',
    description: 'AWS platforms with automation, scale, and disciplined cost control.',
  },
  {
    icon: <FaCode />,
    title: 'Full-Stack Product',
    description: 'Interfaces and APIs in Next.js and FastAPI that feel finished.',
  },
  {
    icon: <FaDatabase />,
    title: 'Data Engineering',
    description: 'Reliable pipelines, stores, and transformations that models can trust.',
  },
  {
    icon: <FaChartLine />,
    title: 'MLOps',
    description: 'Deployment, monitoring, and lifecycle control for models in production.',
  },
]

export default function Services() {
  return (
    <section className="section-pad" id="services">
      <div className="mx-auto max-w-site">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Capabilities</p>
          <h2 className="mb-4 text-4xl font-semibold md:text-5xl">Services</h2>
          <p className="text-lg text-[#9aa3b5]">
            From research-grade models to infrastructure that stays up — a single, coherent stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <GlassCard key={service.title} className="p-8">
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-[#c5d4ff]">
                  {service.icon}
                </div>
                <span className="font-display text-sm text-white/20">0{index + 1}</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="text-[#9aa3b5]">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
