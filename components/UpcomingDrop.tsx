'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function UpcomingDrop() {
  const [email, setEmail] = useState('')

  const topics = [
    'Latest Projects +',
    'RAG System Tips',
    'My AI Workflow',
    'LLM Best Practices',
    'Cloud Architecture Guide',
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription
    console.log('Subscribed:', email)
  }

  return (
    <section className="py-12 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card-surface p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
                alt="AI and Cloud Infrastructure"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                  Upcoming Drop
                </span>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Advanced AI Systems
                <br />
                <span className="text-gradient">Subscribe & get notified</span>
              </h2>

              <p className="text-[#a0a0a0] mb-6">
                Get exclusive insights on building production-ready AI applications,
                RAG systems, and scalable cloud architectures.
              </p>

              {/* Subscribe Form */}
              <form onSubmit={handleSubscribe} className="mb-6">
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="flex-1 px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder:text-[#666] focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              {/* Topic Tags */}
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-[#1a1a1a] hover:bg-[#222] text-[#a0a0a0] text-sm rounded-full transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

