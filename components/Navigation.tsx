'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LiveClock from './LiveClock'

const links = [
  { n: '01', name: 'Work', href: '#work' },
  { n: '02', name: 'Capabilities', href: '#capabilities' },
  { n: '03', name: 'Experience', href: '#experience' },
  { n: '04', name: 'About', href: '#about' },
  { n: '05', name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-5 py-5 md:px-8">
          <a href="#top" className="font-mono text-[11px] tracking-[0.28em] uppercase text-ivory">
            Vaibhav Tyagi
          </a>
          <div className="hidden font-mono text-[11px] tracking-[0.22em] uppercase text-ivory md:block">
            <LiveClock />
          </div>
          <button
            onClick={() => setOpen(true)}
            className="font-mono text-[11px] tracking-[0.32em] uppercase text-ivory"
            data-cursor="OPEN"
          >
            Index
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-lime text-ink"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(160% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between px-5 py-5 md:px-8">
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase">Index</span>
              <button
                onClick={() => setOpen(false)}
                className="font-mono text-[11px] tracking-[0.32em] uppercase"
                data-cursor="CLOSE"
              >
                Close
              </button>
            </div>
            <nav className="flex h-[calc(100vh-80px)] flex-col justify-end px-5 pb-10 md:px-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.18 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline justify-between border-t border-ink/15 py-3 md:py-4"
                  data-cursor="GO"
                >
                  <span className="font-serif text-[12vw] leading-[0.9] tracking-mega md:text-[7vw]">
                    {link.name}
                  </span>
                  <span className="font-mono text-xs tracking-[0.25em]">{link.n}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
