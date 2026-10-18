'use client'

import { FormEvent, useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const subject = encodeURIComponent(`Signal from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:tyagivaibhav2018@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative px-5 py-28 md:px-8">
      <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-ivory/60">06 — Contact</p>
      <h2 className="mt-6 font-serif text-[16vw] leading-[0.8] tracking-mega md:text-[9vw]">
        Say the
        <br />
        <span className="italic text-lime">interesting</span> part.
      </h2>
      <a
        href="mailto:tyagivaibhav2018@gmail.com"
        className="mt-10 inline-block font-serif text-2xl tracking-mega underline decoration-ivory/20 underline-offset-8 transition-colors hover:text-lime hover:decoration-lime md:text-5xl"
        data-cursor="MAIL"
      >
        tyagivaibhav2018@gmail.com
      </a>

      <div className="mt-16 max-w-xl">
        {sent ? (
          <p className="font-mono text-sm tracking-[0.18em] uppercase text-lime">Transmission queued.</p>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] tracking-[0.28em] uppercase text-muted">Name</span>
              <input
                name="name"
                required
                className="w-full border-b border-ivory/20 bg-transparent py-3 text-ivory outline-none focus:border-lime"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] tracking-[0.28em] uppercase text-muted">Email</span>
              <input
                name="email"
                type="email"
                required
                className="w-full border-b border-ivory/20 bg-transparent py-3 text-ivory outline-none focus:border-lime"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] tracking-[0.28em] uppercase text-muted">Message</span>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full resize-none border-b border-ivory/20 bg-transparent py-3 text-ivory outline-none focus:border-lime"
              />
            </label>
            <button
              type="submit"
              className="font-mono text-[11px] tracking-[0.32em] uppercase text-lime"
              data-cursor="SEND"
            >
              Transmit →
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
