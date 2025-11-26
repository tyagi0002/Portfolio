'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX, HiMail } from 'react-icons/hi'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Works', href: '#works' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Experience', href: '#experience' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Avatar/Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
              VT
            </div>
          </Link>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#a0a0a0] hover:text-white transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
            <button className="text-[#a0a0a0] hover:text-white transition-colors">
              <span className="text-lg">...</span>
            </button>
          </div>

          {/* Right: Email */}
          <a
            href="mailto:tyagivaibhav2018@gmail.com"
            className="hidden md:flex items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors"
          >
            <HiMail className="text-xl" />
            <span className="text-sm">E-Mail</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 border-t border-white/5 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-[#a0a0a0] hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:tyagivaibhav2018@gmail.com"
              className="flex items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors"
            >
              <HiMail className="text-xl" />
              <span>E-Mail</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
