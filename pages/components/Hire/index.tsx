
'use client'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { cubicBezier, motion } from "framer-motion"
import FadeIn from '../FadeIn'
import Typewriter from '../Typewriter'
import Link from 'next/link'
import useWindowSize from '../hooks/useWindowSize'


const Circles = () => {
  return (
    <>
    <circle cx="200" cy="200" r="4" fill="limegreen" stroke="none">
</circle>
<circle cx="200" cy="200" r="4" fill="limegreen" stroke="none">
  <animate
    attributeName="r"
    values="4;8;4" 
    dur="1s"
    repeatCount="indefinite"
  />
  <animate
    attributeName="opacity"
    values="1;0.5;1" 
    dur="1s"
    repeatCount="indefinite"
  />
  <animateMotion dur="10s" repeatCount="indefinite">
    {/* <mpath href="#gridPath" /> */}
  </animateMotion>

</circle>
<circle cx="920" cy="440" r="4" fill="skyblue" stroke="none">
</circle>
<circle cx="920" cy="440" r="4" fill="skyblue" stroke="none">
  <animate
    attributeName="r"
    values="4;8;4" 
    dur="1s"
    repeatCount="indefinite"
  />
  <animate
    attributeName="opacity"
    values="1;0.5;1" 
    dur="1s"
    repeatCount="indefinite"
  />
  <animateMotion dur="10s" repeatCount="indefinite">
    {/* <mpath href="#gridPath" /> */}
  </animateMotion>

</circle>
</>
  )
}
const Gradients = () => {
  return (
    <defs>
      <motion.linearGradient
              id={`pinkGradient`}
              gradientUnits="userSpaceOnUse"
              x1={"0%"} y1={"0%"} x2="100%" y2="100%"
              className="z-50"
            >
              <stop offset="0.0564843" stop-color="#FF4A81"></stop>
              <stop stop-color="#FF4A81" stop-opacity="0"></stop>
              <stop offset="0.4616" stop-color="#DF6CF6"></stop>
              <stop offset="1" stop-color="#0196FF" stop-opacity="0"></stop>
               
            </motion.linearGradient>
            
            <motion.linearGradient
              id={`blueGradient`}
              gradientUnits="userSpaceOnUse"
              x1={"0%"} y1={"0%"} x2="100%" y2="100%"
              className="z-50">
                 <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
              </motion.linearGradient>

              <motion.linearGradient
              id="orangeGradient"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF7432" stopOpacity="0" />
              <stop offset="0.05" stopColor="#FF7432" />
              <stop offset="0.37" stopColor="#F7CC4B" />
              <stop offset="1" stopColor="#F7CC4B" stopOpacity="0" />
            </motion.linearGradient>
            <motion.linearGradient
              id="redBlueGradient"
              gradientUnits="userSpaceOnUse"
              >
      <stop offset="0%" stopColor="rgba(63,94,251,1)" />
      <stop offset="50%" stopColor="rgba(250,210,250,1)" />

      <stop offset="100%" stopColor="rgba(252,70,107,1)" />
              </motion.linearGradient>
    </defs>
  );
};

const Path1 = () => {
  return (
 <>
 <motion.path
  id="gridPath"
  d="M 400 1600
     L 920 0
     L 0 0
     "
  stroke="url(#pinkGradient)"
  strokeWidth="2"
  strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 5, once:true,
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
<motion.path
  id="gridPath"
  d="M 640 1600
     L 1160 0
     L 0 0
     "
  stroke="url(#pinkGradient)"
  strokeWidth="2"
  strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 5, once:true,
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
<motion.path
  id="gridPath"
  d="M 520 1600
     L 1040 0
     L 0 0
     "
  stroke="url(#pinkGradient)"
  strokeWidth="6"
  strokeDasharray="90, 40"
  // strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{  opacity: 0 }}
  animate={{  opacity:1 }}
  transition={{ duration: 2,delay: 3, once:true,
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
</>

  )
}

const Path2 = () => {
  return (
    <motion.path
  id="gridPath"
  // star shaped
  d="M 800 -200
    L 0 1200
    L 1200 400
    L 400 0
    L 700 1640
    L 800 -200
    

     "
  stroke="url(#redBlueGradient)"
  strokeWidth="1.5"
  strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', 
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
  )
}

const Path4 = () => {
  return (
    <motion.path
  id="gridPath"
  d="M 800 0
     L 1000 1600
     L 0 1600
     "
  stroke="url(#pinkGradient)"
  strokeWidth="1"
  strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', 
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
  )
}
const Path3 = () => {
  return (
      
<motion.path
  id="gridPath"
  d="M 360 1000 
     L 1600 1000
     L 0 300
     "
  stroke="url(#orangeGradient)"
  strokeWidth="1.3"
  strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', 
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
  )
}

const Path5 = () => {
  return (
    <motion.path
  id="gridPath"
  d="M 540 -100
     L 100 1600
     L 0 1600
     "
  stroke="url(#pinkGradient)"
  strokeWidth="2"
  strokeLinecap="round"
  fill="none"
  opacity={1}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', 
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
  )
}

export default function Hire() {
  const { width, height } = useWindowSize();
  return (
    <div className="bg-black min-h-screen relative">
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
                className='bg-black border-2 border-white text-gray-300 px-4 py-2 text-lg mt-10 '>
                  <Link href="/contact">Hire Me</Link>
                </motion.button>

              </div>
             </FadeIn>
            </div>
          </div> 
        </div>
      </div>
     
      <div
            className="absolute inset-0 flex items-center z-0 opacity-90"
          >
             <svg className="w-full h-full" viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grida" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.1" />
      </pattern>             
    </defs>
    
    <rect width="100%" height="100%" fill="url(#grida)" />
      <Gradients />
      {/* <Circles /> */}

      {/* Road */}
      {/* <Path1 /> */}

      <Path2 />
      {/* <Path3 />
      <Path4 />
      <Path5 /> */}
    




{/* FINAL CODE  */}
{/* <circle cx="0" cy="0" r="1" fill="none" stroke="url(#lineGradient)" strokeWidth="2">
  <animateMotion dur="5s" repeatCount="indefinite" keyTimes="0;0.5;1">
    <mpath href="#gridPath" />
  </animateMotion>
</circle>  */}



{/* <circle cx="0" cy="0" r="4" fill="skyblue" stroke="none">
  <animate
    attributeName="r"
    values="4;8;4" 
    dur="1s"
    repeatCount="indefinite"
  />
  <animate
    attributeName="opacity"
    values="1;0.5;1" 
    dur="1s"
    repeatCount="indefinite"
  />
  <animateMotion dur="5s" repeatCount="indefinite">
    <mpath href="#gridPath2" />
  </animateMotion>

</circle> */}

 </svg>
            {/* <img src="assets/black_cross.png" className='w-full h-full object-cover'/> */}
          </div>
    </div>
  )
}
