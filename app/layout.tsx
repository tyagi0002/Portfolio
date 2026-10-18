import type { Metadata } from 'next'
import { Instrument_Serif, IBM_Plex_Mono, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ShaderBackdrop from '@/components/ShaderBackdrop'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import Loader from '@/components/Loader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})


const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
  adjustFontFallback: false,
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Vaibhav Tyagi — Intelligence in production',
  description:
    'AI developer and LLM engineer. RAG systems, machine learning, and cloud architecture built for real load.',
  keywords: ['AI Developer', 'LLM Engineer', 'RAG', 'Machine Learning', 'Cloud Architecture'],
  authors: [{ name: 'Vaibhav Tyagi' }],
  openGraph: {
    title: 'Vaibhav Tyagi — Intelligence in production',
    description: 'RAG, LLM systems, and cloud platforms that stay standing.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body className="antialiased">
        <Loader />
        <ShaderBackdrop />
        <div className="noise" />
        <ScrollProgress />
        <CustomCursor />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
