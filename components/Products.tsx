'use client'

import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import GlassCard from './GlassCard'

const products = [
  {
    title: 'RAGMentor',
    description: 'A production-minded RAG template with LangChain, retrieval, and evaluation hooks.',
    image: 'https://images.unsplash.com/photo-1676277791608-ac5257746a0e?w=1200&q=80',
    tags: ['Python', 'LangChain', 'OpenAI'],
    link: 'https://github.com/tyagi0002',
  },
  {
    title: 'ML Pipeline Toolkit',
    description: 'Training-to-serve tooling with containers, experiment tracking, and clean contracts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    tags: ['Python', 'TensorFlow', 'Docker'],
    link: 'https://github.com/tyagi0002',
  },
  {
    title: 'Cloud Deploy Scripts',
    description: 'Terraform-first AWS scaffolding for repeatable, reviewable infrastructure.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    tags: ['AWS', 'Terraform', 'Bash'],
    link: 'https://github.com/tyagi0002',
  },
  {
    title: 'AI Code Templates',
    description: 'FastAPI services and patterns I reuse when shipping LLM features quickly.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    tags: ['Python', 'FastAPI', 'Docker'],
    link: 'https://github.com/tyagi0002',
  },
]

export default function Products() {
  return (
    <section className="section-pad" id="products">
      <div className="mx-auto max-w-site">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Open tools</p>
          <h2 className="mb-4 text-4xl font-semibold md:text-5xl">Products</h2>
          <p className="text-lg text-[#9aa3b5]">
            Templates and systems you can fork, study, and put into production.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((product) => (
            <GlassCard key={product.title} className="group">
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.05]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c12] to-transparent" />
                </div>
                <div className="p-7">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">{product.title}</h3>
                    <FiArrowUpRight className="text-[#8e98ad] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p className="mb-5 text-[#9aa3b5]">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
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
