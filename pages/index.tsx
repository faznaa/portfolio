import Image from 'next/image'
import { Unbounded } from 'next/font/google'
import Hero from './components/Hero'
import Description from './components/Description'
import Projects from './components/Projects'

const inter = Unbounded({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Hero />
      <Description />
      <Projects />
    </div>
  )
}
