'use client'

import GlassCard from './GlassCard'

const experiences = [
  {
    period: 'Nov 2025 — Present',
    title: 'AI Developer',
    company: 'Caasaa AI Innovations Private Limited',
    location: 'Greater Noida, India',
    description:
      'Leading LLM applications and RAG systems. Architected ML pipelines processing 1M+ documents daily.',
    achievements: [
      'Developed a RAG system reducing query response time by 60%',
      'Implemented LLM fine-tuning for domain-specific tasks',
      'Built automated ML monitoring for live services',
    ],
  },
  {
    period: 'June 2025 — Nov 2025',
    title: 'AI/ML Engineer',
    company: 'Impulsive Web Private Limited',
    location: 'Noida, India',
    description:
      'Designed and deployed AWS infrastructure. Introduced DevOps practice and CI/CD.',
    achievements: [
      'Reduced infrastructure cost by 40% through targeted optimization',
      'Implemented auto-scaling for 10K+ concurrent users',
      'Held 99.9% uptime across deployed services',
    ],
  },
  {
    period: 'Dec 2024 — May 2025',
    title: 'Machine Learning Intern',
    company: 'Unified Mentor Private Limited',
    location: 'Gurugram, India',
    description: 'Computer vision for industrial automation and predictive analytics.',
    achievements: [
      'Built an object detection model at 92% accuracy',
      'Cut training time by 50% through pipeline work',
      'Authored reusable preprocessing scripts',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section-pad" id="experience">
      <div className="mx-auto max-w-site">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Trajectory</p>
          <h2 className="mb-4 text-4xl font-semibold md:text-5xl">Experience</h2>
          <p className="text-lg text-[#9aa3b5]">A short path through AI, ML, and cloud systems.</p>
        </div>

        <div className="space-y-5">
          {experiences.map((exp) => (
            <GlassCard key={exp.company} className="p-8" hoverTilt={false}>
              <div className="mb-4 flex flex-col justify-between gap-2 lg:flex-row lg:items-baseline">
                <div>
                  <div className="mb-2 text-xs tracking-[0.2em] uppercase text-[#8eb0ff]">{exp.period}</div>
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <div className="text-[#9aa3b5]">
                    {exp.company} · {exp.location}
                  </div>
                </div>
              </div>
              <p className="mb-6 text-[#9aa3b5]">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#b7bfce]">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#7aa2ff]" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
