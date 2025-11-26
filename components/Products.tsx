'use client'

import { motion } from 'framer-motion'
import { HiDownload, HiExternalLink } from 'react-icons/hi'

const products = [
  {
    title: 'RAGMentor',
    description: 'Production-ready RAG system template with LangChain and OpenAI',
    image: 'https://images.unsplash.com/photo-1676277791608-ac5257746a0e?w=600&q=80',
    tags: ['Python', 'LangChain', 'OpenAI'],
    link: 'https://github.com/tyagi0002',
  },
  {
    title: 'ML Pipeline Toolkit',
    description: 'End-to-end machine learning pipeline with automated training',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    tags: ['Python', 'TensorFlow', 'Docker'],
    link: 'https://github.com/tyagi0002',
  },
  {
    title: 'Cloud Deploy Scripts',
    description: 'AWS infrastructure deployment automation with Terraform',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    tags: ['AWS', 'Terraform', 'Bash'],
    link: 'https://github.com/tyagi0002',
  },
  {
    title: 'AI Code Templates',
    description: 'Collection of production-ready AI/ML code templates',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    tags: ['Python', 'FastAPI', 'Docker'],
    link: 'https://github.com/tyagi0002',
  },
]

export default function Products() {
  return (
    <section className="py-20 px-6 lg:px-12" id="products">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Products</h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl">
            Open-source tools and templates for AI development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-surface overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-[#a0a0a0] mb-4">{product.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#1a1a1a] text-[#a0a0a0] text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <HiExternalLink /> View Project
                  </a>
                  <button className="flex items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors">
                    <HiDownload /> Download
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

