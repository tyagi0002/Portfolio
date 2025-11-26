'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    period: 'Nov 2025 - Present',
    title: 'AI Developer',
    company: 'Caasaa AI Innovations Private Limited',
    location: 'Greater Noida, India',
    description:
      'Leading development of LLM-based applications and RAG systems. Architected scalable ML pipelines processing 1M+ documents daily.',
    achievements: [
      'Developed RAG system reducing query response time by 60%',
      'Implemented LLM fine-tuning pipeline for domain-specific tasks',
      'Built automated ML monitoring dashboard',
    ],
  },
  {
    period: 'June 2025 - Nov 2025',
    title: 'AI/ML Engineer',
    company: 'Impulsive Web Private Limited',
    location: 'Noida, India',
    description:
      'Designed and deployed cloud infrastructure on AWS. Implemented DevOps practices and CI/CD pipelines.',
    achievements: [
      'Reduced infrastructure costs by 40% through optimization',
      'Implemented auto-scaling solutions handling 10K+ concurrent users',
      'Achieved 99.9% uptime across all deployed services',
    ],
  },
  {
    period: 'Dec 2024 - May 2025',
    title: 'Machine Learning Intern',
    company: 'Unified Mentor Private Limited',
    location: 'Gurugram, India',
    description:
      'Developed computer vision models for industrial automation. Worked on predictive analytics.',
    achievements: [
      'Built object detection model with 92% accuracy',
      'Optimized ML training pipeline reducing time by 50%',
      'Created data preprocessing scripts',
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-20 px-6 lg:px-12" id="experience">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl">
            My professional journey in AI, ML, and Cloud Technologies
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-surface p-8 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <div className="text-blue-500 text-sm mb-2">{exp.period}</div>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <div className="text-[#a0a0a0]">
                    {exp.company} • {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-[#a0a0a0] mb-6">{exp.description}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#888]">
                    <span className="text-blue-500 mt-1">▸</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
