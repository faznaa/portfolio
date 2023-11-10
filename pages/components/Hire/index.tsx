import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion"
import FadeIn from '../FadeIn'
import Typewriter from '../Typewriter'
import Link from 'next/link'

export default function Hire() {
  return (
    <div className="bg-[#004E98] min-h-screen relative">
      <div className="relative isolate overflow-hidden z-20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:max-w-9xl lg:py-30">
          <div className="px-6 lg:px-0 lg:pt-20">
            <div className="mx-auto max-w-full">
             <FadeIn>
             <div className="mx-auto max-w-4xl relative flex flex-col justify-center items-center">
                
             
                <h1 className="my-10 sm:mb-20 text-3xl sm:text-6xl font-bold tracking-tight text-white text-center ">
                  <Typewriter text="Collaborate Today" delay={100}/>
                </h1>
                
               <p className='max-w-2xl mx-auto text-center text-gray-300 text-[20px] sm:text-md font-bold '>Are you prepared to embark on an extraordinary coding journey?
                Don’t miss your chance to create extraordinary digital experiences like no other.
                 Reach out now and explore new worlds of coding enchantment!</p>

   <motion.button 
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                className='bg-black text-indigo-300 px-4 py-2 text-lg mt-10 '>
                  <Link href="/contact">Hire Me</Link>
                </motion.button>

              </div>
             </FadeIn>
            </div>
          </div> 
        </div>
      </div>
      <div
            className="absolute inset-0 flex items-center z-0 opacity-40"
          >
            <img src="assets/black_cross.png" className='w-full h-full object-cover'/>
          </div>
    </div>
  )
}
