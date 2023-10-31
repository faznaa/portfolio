import Image from 'next/image'
import { Unbounded } from 'next/font/google'
import Hero from './components/Hero'
import Description from './components/Description'
import Projects from './components/Projects'
import Head from 'next/head'

const inter = Unbounded({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Head>
        <meta name='title' content='Fazna Harees - Fullstack Developer' />
        <meta name="description"
        content='Need your website ready? I can help you with that. I am a fullstack developer based in Bangalore, Kerala, IN. I specialize in creating responsive websites, landing pages and AI Chatbots.' />
        


      </Head>
      <Hero />
      <Description />
      <Projects />
    </div>
  )
}
