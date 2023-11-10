import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion"
import FadeIn from '../FadeIn'
import Typewriter from '../Typewriter'

export default function Description() {
  return (
    <div className="bg-[#004E98] min-h-screen relative">
      <div className="relative isolate overflow-hidden z-20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:max-w-9xl lg:py-30">
          <div className="px-6 lg:px-0 lg:pt-20">
            <div className="mx-auto max-w-full">
             <FadeIn>
             <div className="max-w-4xl relative">
                
             
                <h1 className="my-10 sm:mb-20 text-3xl sm:text-6xl font-bold tracking-tight text-white  ">
                  Welcome! 
                </h1>
                
               <p className='text-black text-[20px] sm:text-[32px] font-bold text-gray-200 '>
                <Typewriter text="Hi there, I'm Fazna Harees, a web developer. I specialize in creating responsive websites, landing pages and AI Chatbots. 
                
                Let's work together to bring your digital ideas to life!" delay={50}
/></p>
               <p className='text-black  text-[20px] sm:text-[32px] font-bold mt-10 text-gray-200'>
</p>
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
