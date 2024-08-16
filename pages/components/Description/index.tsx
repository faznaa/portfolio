import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { motion, useScroll, useTransform } from "framer-motion"
import FadeIn from '../FadeIn'
import Typewriter from '../Typewriter'
import { Playfair_Display } from 'next/font/google'
import { useRef } from 'react'
const playfair = Playfair_Display({ subsets: ['latin'] })

const CardImage = ({ src }:any) => {
  return (
    <motion.img
      src={src}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className=" inset-0 h-full w-full object-cover"
      alt=""
    />
  )
}
export default function Description() {
  const ref=useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.7,1], [0.5,1, 1]);
  const scaleImg = useTransform(scrollYProgress, [0, 0.7,1], [0.5,1.1, 1]);
  const translateX = useTransform(scrollYProgress, [0, 0.7,1], [-100,0, 0]);
  const opacity = useTransform(scrollYProgress, [0,0.2,0.8, 1], [0,1, 1,0.9]);
  const x = useTransform(scrollYProgress, [0,0.2,0.8, 1], [-100,0,0,0]);

  return (
    <div className="bg-[#000000] min-h-screen relative" id='about'>
                                <div className='h-[100vh' ref={ref}/>

      <div className="relative isolate overflow-hidden z-20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:max-w-9xl lg:py-30">
          <div className="px-6 lg:px-0 lg:pt-20">

            <div className="mx-auto max-w-full sm:flex">
             <FadeIn>
             <motion.div
             style={{ scale, opacity ,x}}
             className="max-w-4xl relative">
                
             
                <h1 className="my-10 sm:mb-20 text-3xl sm:text-6xl font-bold tracking-tight text-white  ">
                  Welcome! 
                </h1>
                
               <motion.p
              
               className='text-gray-200 text-[20px] sm:text-[32px] font-medium  '>
                {/* <Typewriter text="Hi there, I'm Fazna Harees, a web developer. I specialize in creating responsive websites, landing pages and AI Chatbots. 
                
                Let's work together to bring your digital ideas to life!" delay={50}/> */}
Hi there, I'm <span className={`italic text-white font-playfair font-bold text-[36px]`}> Fazna Harees,</span> a web developer. I specialize in creating responsive websites, landing pages and AI Chatbots. 
                
                Let's work together to bring your digital ideas to life!
</motion.p>
               <p className='text-black  text-[20px] sm:text-[32px] font-bold mt-10 text-gray-200'>
</p>
              </motion.div>
             </FadeIn>
             <motion.div 
          style={{ scale ,translateX}}

          className='grid grid-cols-2 gap-4 '>
            <div className='flex flex-col items-end justify-center gap-4 '>
              <div className='overflow-hidden bg-white-100  w-56 h-36 rounded-3xl'>
                <CardImage src="https://i.pinimg.com/736x/32/9a/d8/329ad85f4ab2047cae13d582274f9270.jpg" />
              </div>
              <div className='overflow-hidden  w-32 h-36   rounded-3xl'>
                <CardImage src="https://cdn.worldvectorlogo.com/logos/react-1.svg" />
              </div>
              <div className='overflow-hidden  w-36 h-48  rounded-3xl'>
              <CardImage src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" />

              </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-4'>
              <div className='overflow-hidden  w-32 h-32  rounded-3xl'>
               <CardImage             
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJ6NBK_AkNji84Qjx1s1hzHhl1UZwSygzsQ&s" 
               />

              </div>
              <div className='overflow-hidden bg-gray-600 w-36 h-24 rounded-3xl'>
              <CardImage 
              src="https://logowik.com/content/uploads/images/openai5002.jpg"/>

              </div>
              <div className='overflow-hidden bg-gray-100 w-48 h-36 rounded-3xl'>
              <CardImage src="https://i.pinimg.com/1200x/bc/c9/fc/bcc9fce91549fb9f1295e6e4ee84d66e.jpg" />
              </div>
            </div>
          </motion.div>
            </div>
          </div> 
        </div>
      </div>
      
      <div
            className="absolute inset-0 flex items-center z-0 opacity-40"
          >
            {/* <img src="assets/black_cross.png" className='w-full h-full object-cover'/> */}
          </div>
    </div>
  )
}
