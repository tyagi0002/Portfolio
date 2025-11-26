'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiPython, SiTensorflow, SiAmazonaws, SiReact } from 'react-icons/si'

const projects = [
  {
    title: 'RAG-based PDF Query System',
    description: 'Advanced Retrieval-Augmented Generation system enabling intelligent querying of PDF documents using LangChain, OpenAI, and vector databases. Implements semantic search with 95% accuracy.',
    tags: ['Python', 'LangChain', 'OpenAI', 'ChromaDB', 'FastAPI'],
    icon: <SiPython className="text-4xl text-accent-primary" />,
    github: 'https://github.com/tyagi0002',
    demo: '#',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Sign Language Recognition',
    description: 'Deep learning model for real-time sign language gesture recognition using CNN and LSTM architectures. Achieved 92% accuracy on custom dataset with 50+ gestures.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'MediaPipe'],
    icon: <SiTensorflow className="text-4xl text-orange-400" />,
    github: 'https://github.com/tyagi0002',
    demo: '#',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Sustainable Fertilizer Usage Optimizer',
    description: 'ML-powered system analyzing soil composition and crop requirements to optimize fertilizer usage. Reduces waste by 30% while improving crop yield predictions.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'PostgreSQL'],
    icon: <SiPython className="text-4xl text-green-400" />,
    github: 'https://github.com/tyagi0002',
    demo: '#',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'AWS Cloud Infrastructure Deployment',
    description: 'Scalable cloud infrastructure deployment using AWS services including EC2, S3, Lambda, and RDS. Implemented CI/CD pipelines with automated testing and monitoring.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    icon: <SiAmazonaws className="text-4xl text-yellow-400" />,
    github: 'https://github.com/tyagi0002',
    demo: '#',
    color: 'from-yellow-500/20 to-orange-500/20',
  },
]

export default function Works() {
  return (
    <section id="works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in AI, Machine Learning, and Cloud Technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-effect rounded-2xl p-8 card-hover relative overflow-hidden group`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div className="mb-6">{project.icon}</div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors duration-200"
                  >
                    <FaGithub /> View Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors duration-200"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

