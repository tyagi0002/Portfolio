'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const projects = [
  {
    title: 'RAG Query System',
    category: 'AI • LLM',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    description: 'Advanced retrieval-augmented generation system for intelligent document querying',
  },
  {
    title: 'Cloud Architecture',
    category: 'AWS • Infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    description: 'Scalable cloud infrastructure with automated deployment pipelines',
  },
  {
    title: 'ML Pipeline',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    description: 'End-to-end machine learning pipeline for production environments',
  },
]

export default function NewWork() {
  return (
    <section className="py-12 px-6 lg:px-12" id="works">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold flex items-center gap-3">
            New Work
            <HiArrowRight className="text-blue-500" />
          </h2>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-surface overflow-hidden card-hover cursor-pointer group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#a0a0a0] text-sm mb-3">{project.category}</p>
                <p className="text-[#888] text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

