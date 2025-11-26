import Hero from '@/components/Hero'
import UpcomingDrop from '@/components/UpcomingDrop'
import NewWork from '@/components/NewWork'
import Services from '@/components/Services'
import Products from '@/components/Products'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Hero />
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
