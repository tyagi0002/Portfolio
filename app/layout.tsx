import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundEffects from '@/components/BackgroundEffects'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vaibhav Tyagi | AI Developer & LLM Engineer',
  description:
    'Portfolio of Vaibhav Tyagi - AI Developer, LLM Engineer, and Cloud Enthusiast specializing in RAG systems, Machine Learning, and Cloud Architecture.',
  keywords: [
    'AI Developer',
    'LLM Engineer',
    'Machine Learning',
    'Cloud Architecture',
    'RAG Systems',
    'Next.js',
    'Python',
  ],
  authors: [{ name: 'Vaibhav Tyagi' }],
  openGraph: {
    title: 'Vaibhav Tyagi | AI Developer & LLM Engineer',
    description: 'Portfolio showcasing AI/ML projects, LLM systems, and cloud solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased">
        <BackgroundEffects />
        <ScrollProgress />
        <CustomCursor />
        <Navigation />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
