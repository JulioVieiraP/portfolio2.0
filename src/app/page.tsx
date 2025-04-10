import Footer from '@/components/Footer'
import About from '@/components/sections(Home)/About'
import Contact from '@/components/sections(Home)/Contact'
import Experience from '@/components/sections(Home)/Experience'
import Projects from '@/components/sections(Home)/Projects'
import Services from '@/components/sections(Home)/services'
import Skills from '@/components/sections(Home)/Skills'

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center bg-gray-100">
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </main>
  )
}
