'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl mb-4">
              VT
            </div>
            <p className="text-[#a0a0a0] mb-4 max-w-md">
              AI Developer & LLM Engineer building intelligent systems with cutting-edge
              technology.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/tyagi0002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-white transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/tyagi09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-white transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="mailto:tyagivaibhav2018@gmail.com"
                className="text-[#a0a0a0] hover:text-white transition-colors"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Works', 'Services', 'Products', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-[#a0a0a0] hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-[#a0a0a0]">
              <li>Ghaziabad, India</li>
              <li>
                <a
                  href="mailto:tyagivaibhav2018@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  tyagivaibhav2018@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#666]">
          <p>© {currentYear} Vaibhav Tyagi. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
