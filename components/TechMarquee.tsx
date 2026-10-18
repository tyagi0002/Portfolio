'use client'

const items = [
  'LangChain',
  'OpenAI',
  'RAG Systems',
  'PyTorch',
  'TensorFlow',
  'AWS',
  'Next.js',
  'FastAPI',
  'Kubernetes',
  'ChromaDB',
  'Hugging Face',
  'Terraform',
  'Docker',
  'TypeScript',
  'PostgreSQL',
]

export default function TechMarquee() {
  const loop = [...items, ...items]

  return (
    <section className="relative py-8" aria-label="Technologies">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#06070b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#06070b] to-transparent" />
      <div className="overflow-hidden border-y border-white/5 bg-white/[0.015]">
        <div className="marquee-track gap-10 py-5">
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10 text-sm tracking-[0.18em] uppercase text-[#8e98ad]">
              <span className="text-white/90">{item}</span>
              <span className="h-[3px] w-[3px] rounded-full bg-[#7aa2ff]/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
