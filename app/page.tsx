import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import UpcomingDrop from '@/components/UpcomingDrop'
import NewWork from '@/components/NewWork'
import Services from '@/components/Services'
import Products from '@/components/Products'
import Experience from '@/components/Experience'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <UpcomingDrop />
      <NewWork />
      <Services />
      <Products />
      <Experience />
      <About />
      <Contact />
    </>
  )
}
