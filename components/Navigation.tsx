'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import Magnetic from './Magnetic'

const navLinks = [
  { name: 'Works', href: '#works' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = [...navLinks.map((l) => l.href.slice(1)), 'contact']
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 md:px-6">
      <div className="mx-auto max-w-site">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`glass-strong rounded-full px-3 py-2 transition-all duration-500 ${
            scrolled ? 'shadow-[0_20px_60px_rgba(0,0,0,0.45)]' : ''
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Magnetic>
              <Link href="/" className="flex items-center gap-3 pl-1">
                <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
                  <span className="absolute inset-0 bg-gradient-to-br from-[#8eb0ff] to-[#8b7cff]" />
                  <span className="relative text-sm font-semibold tracking-tight text-white">VT</span>
                </span>
                <span className="hidden text-sm font-medium text-white/90 sm:block">Vaibhav Tyagi</span>
              </Link>
            </Magnetic>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const id = link.href.slice(1)
                const isActive = active === id
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                      isActive ? 'text-white' : 'text-[#9aa3b5] hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/8"
                        style={{ background: 'rgba(255,255,255,0.08)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                )
              })}
            </div>

            <div className="flex items-center gap-2">
              <Magnetic strength={0.2}>
                <a
                  href="#contact"
                  className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-[#0b0d12] transition-opacity hover:opacity-90 md:inline-flex"
                >
                  Let&apos;s talk
                </a>
              </Magnetic>
              <button
                className="rounded-full p-2 text-white lg:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
              >
                {open ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
              </button>
            </div>
          </div>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              className="glass-strong mt-3 overflow-hidden rounded-3xl p-6 lg:hidden"
            >
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-3 py-3 text-lg text-white/85 hover:bg-white/5"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-2xl bg-white px-3 py-3 text-center font-medium text-[#0b0d12]"
                >
                  Let&apos;s talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
