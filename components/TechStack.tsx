'use client'

import { motion } from 'framer-motion'
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFastapi,
} from 'react-icons/si'

const techCategories = [
  {
    title: 'Languages & Core',
    technologies: [
      { name: 'Python', icon: <SiPython />, color: 'text-blue-400' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
    ],
  },
  {
    title: 'ML/DL Frameworks',
    technologies: [
      { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-500' },
      { name: 'PyTorch', icon: <SiPytorch />, color: 'text-red-500' },
      { name: 'Scikit-learn', icon: <SiScikitlearn />, color: 'text-orange-400' },
    ],
  },
  {
    title: 'Web Frameworks',
    technologies: [
      { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
      { name: 'FastAPI', icon: <SiFastapi />, color: 'text-green-500' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    technologies: [
      { name: 'AWS', icon: <SiAmazonaws />, color: 'text-yellow-500' },
      { name: 'Docker', icon: <SiDocker />, color: 'text-blue-400' },
      { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-500' },
      { name: 'GitHub Actions', icon: <SiGithubactions />, color: 'text-gray-400' },
    ],
  },
  {
    title: 'Databases',
    technologies: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-400' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
      { name: 'Redis', icon: <SiRedis />, color: 'text-red-500' },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-6 bg-dark-200/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer"
                  >
                    <div className={`text-3xl ${tech.color}`}>{tech.icon}</div>
                    <span className="text-gray-300 font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 glass-effect rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'LangChain',
              'OpenAI API',
              'Hugging Face',
              'ChromaDB',
              'Pinecone',
              'Streamlit',
              'Pandas',
              'NumPy',
              'Git',
              'Linux',
              'Terraform',
              'Jenkins',
              'Nginx',
              'GraphQL',
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-accent-primary hover:text-accent-primary transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

