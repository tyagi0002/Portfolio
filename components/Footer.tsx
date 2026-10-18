'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-8 border-t border-white/8">
      <div className="mx-auto max-w-site px-6 py-14 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#8eb0ff] to-[#8b7cff] text-sm font-semibold">
              VT
            </div>
            <p className="mb-6 max-w-md text-[#9aa3b5]">
              AI developer and LLM engineer building systems that are precise under pressure.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://github.com/tyagi0002', icon: <FaGithub />, label: 'GitHub' },
                { href: 'https://linkedin.com/in/tyagi09', icon: <FaLinkedin />, label: 'LinkedIn' },
                { href: 'mailto:tyagivaibhav2018@gmail.com', icon: <FaEnvelope />, label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm tracking-[0.18em] uppercase text-white/70">Navigation</h3>
            <ul className="space-y-2">
              {['Works', 'Services', 'Products', 'Experience', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-sm text-[#9aa3b5] hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm tracking-[0.18em] uppercase text-white/70">Contact</h3>
            <ul className="space-y-2 text-sm text-[#9aa3b5]">
              <li>Ghaziabad, India</li>
              <li>
                <a href="mailto:tyagivaibhav2018@gmail.com" className="hover:text-white">
                  tyagivaibhav2018@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-sm text-[#667084] md:flex-row">
          <p>© {currentYear} Vaibhav Tyagi</p>
          <p>Crafted with Next.js, motion, and restraint.</p>
        </div>
      </div>
    </footer>
  )
}
