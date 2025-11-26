'use client'

import { motion } from 'framer-motion'
import { FaBrain, FaRobot, FaCloud, FaCode, FaDatabase, FaChartLine } from 'react-icons/fa'

const services = [
  {
    icon: <FaBrain />,
    title: 'AI Development',
    description: 'Custom machine learning solutions and neural networks for complex problems',
  },
  {
    icon: <FaRobot />,
    title: 'LLM & RAG Systems',
    description: 'Advanced language models and retrieval-augmented generation pipelines',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Solutions',
    description: 'Scalable AWS infrastructure with DevOps automation',
  },
  {
    icon: <FaCode />,
    title: 'Full-Stack Development',
    description: 'Modern web applications with React, Next.js, and FastAPI',
  },
  {
    icon: <FaDatabase />,
    title: 'Data Engineering',
    description: 'Robust data pipelines and ETL processes',
  },
  {
    icon: <FaChartLine />,
    title: 'MLOps',
    description: 'Model deployment, monitoring, and production maintenance',
  },
]

export default function Services() {
  return (
    <section className="py-20 px-6 lg:px-12" id="services">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Services</h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl">
            Comprehensive AI and cloud solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-surface p-8 card-hover group"
            >
              <div className="text-4xl mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[#a0a0a0]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
