'use client'

import { FormEvent, useState } from 'react'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import GlassCard from './GlassCard'

const contactInfo = [
  {
    icon: <HiMail />,
    label: 'Email',
    value: 'tyagivaibhav2018@gmail.com',
    href: 'mailto:tyagivaibhav2018@gmail.com',
  },
  {
    icon: <HiLocationMarker />,
    label: 'Location',
    value: 'Ghaziabad, India',
    href: null,
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/tyagi0002',
    href: 'https://github.com/tyagi0002',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/tyagi09',
    href: 'https://linkedin.com/in/tyagi09',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:tyagivaibhav2018@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section-pad" id="contact">
      <div className="mx-auto max-w-site">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="mb-4 text-4xl font-semibold md:text-5xl">Get in touch</h2>
          <p className="text-lg text-[#9aa3b5]">If the problem is interesting, I want to hear it.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <GlassCard className="p-8" hoverTilt={false}>
            <h3 className="mb-8 text-2xl font-semibold">Studio details</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-[#c5d4ff]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="mb-1 text-xs tracking-[0.18em] uppercase text-[#8e98ad]">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#c5d4ff]">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8" hoverTilt={false}>
            <h3 className="mb-8 text-2xl font-semibold">Send a note</h3>
            {sent ? (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6 text-emerald-100">
                Your mail client should open shortly. If it doesn&apos;t, write me directly at
                tyagivaibhav2018@gmail.com.
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-[#9aa3b5]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-[#667084] focus:border-white/25 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-[#9aa3b5]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-[#667084] focus:border-white/25 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-[#9aa3b5]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-[#667084] focus:border-white/25 focus:outline-none"
                    placeholder="What should we build?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-white py-3 font-medium text-[#0b0d12] transition-opacity hover:opacity-90"
                >
                  Send message
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
