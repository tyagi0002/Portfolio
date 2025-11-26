'use client'

import { motion } from 'framer-motion'
import { HiCalendar, HiCube, HiMail } from 'react-icons/hi'
import SignatureWatermark from './SignatureWatermark'

export default function Hero() {
  const statusCards = [
    {
      icon: <HiCalendar className="text-xl" />,
      label: 'Available',
      action: 'Schedule a call',
      href: '#contact',
    },
    {
      icon: <HiCube className="text-xl" />,
      label: 'Portfolio',
      action: 'Discover my projects',
      href: '#works',
    },
    {
      icon: <HiMail className="text-xl" />,
      label: 'Contact',
      action: 'Get in touch',
      href: 'mailto:tyagivaibhav2018@gmail.com',
    },
  ]

  return (
    <section className="min-h-screen pt-24 pb-12 px-6 lg:px-12 relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Building Intelligent
            <br />
            <span className="text-gradient">Systems With AI</span>
            <br />
            And Cloud Architecture
          </h1>

          {/* Status Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {statusCards.map((card, index) => (
              <motion.a
                key={index}
                href={card.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-surface p-6 card-hover cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className="text-[#a0a0a0] group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-[#a0a0a0] text-sm mb-1">{card.label}</div>
                    <div className="text-white font-medium">{card.action}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Signature Watermark - Bottom Right */}
      <SignatureWatermark />
    </section>
  )
}
