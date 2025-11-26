import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundEffects from '@/components/BackgroundEffects'

export const metadata: Metadata = {
  title: 'Vaibhav Tyagi | AI Developer & LLM Engineer',
  description: 'Portfolio of Vaibhav Tyagi - AI Developer, LLM Engineer, and Cloud Enthusiast specializing in RAG systems, Machine Learning, and Cloud Architecture.',
  keywords: ['AI Developer', 'LLM Engineer', 'Machine Learning', 'Cloud Architecture', 'RAG Systems', 'Next.js', 'Python'],
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
    <html lang="en">
      <body className="antialiased">
        <BackgroundEffects />
        <Navigation />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
