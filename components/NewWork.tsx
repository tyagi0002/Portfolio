'use client'

import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import GlassCard from './GlassCard'

const projects = [
  {
    title: 'RAG Query System',
    category: 'AI · LLM',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    description: 'Semantic retrieval over large document sets with production latency budgets.',
    tags: ['LangChain', 'OpenAI', 'ChromaDB'],
    href: 'https://github.com/tyagi0002',
  },
  {
    title: 'Cloud Architecture',
    category: 'AWS · Infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    description: 'Auto-scaling platforms with CI/CD, observability, and cost-aware design.',
    tags: ['AWS', 'Terraform', 'Docker'],
    href: 'https://github.com/tyagi0002',
  },
  {
    title: 'ML Pipeline',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80',
    description: 'End-to-end training, evaluation, and deployment loops for live models.',
    tags: ['Python', 'TensorFlow', 'MLOps'],
    href: 'https://github.com/tyagi0002',
  },
]

export default function NewWork() {
  return (
    <section className="section-pad" id="works">
      <div className="mx-auto max-w-site">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Work that ships.</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-relaxed text-[#9aa3b5] md:block">
            Systems designed for real load — retrieval, models, and infrastructure with a quiet
            surface.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <GlassCard key={project.title} className="group h-full">
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.06]"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06070b] via-[#06070b]/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/25 px-3 py-1 text-[11px] tracking-wide text-white/90 backdrop-blur-xl">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <FiArrowUpRight className="mt-1 text-[#8e98ad] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-[#9aa3b5]">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/8 px-3 py-1 text-xs text-[#b4bccb]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
