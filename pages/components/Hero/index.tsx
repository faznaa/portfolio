import { motion } from "framer-motion"
import Link from 'next/link'

export default function Hero() {
  return (
    <div className=" min-h-screen animate-shiny bg-gradient-to-tr from-[#FF0A54] to-pink-600">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-30">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-2xl relative">
                <motion.img
                initial={{ y: -10, size: 0.8 }}
                whileInView={{ size: 1}}
                animate={{ y: 10 }}
                transition={{
                  type: "smooth",
                  repeatType: "mirror",
                  duration: 2,
                  repeat: Infinity,
                }}
                  className="h-20 w-20 object-cover absolute rounded-full z-10"
                  src="assets/fazna1.jpg"
                  alt="Your Company"
                />
                <motion.img
                initial={{ y: -10, size: 0.8 }}
                whileInView={{ size: 1}}
                animate={{ y: 10 }}
                transition={{
                  type: "smooth",
                  repeatType: "mirror",
                  duration: 2,
                  repeat: Infinity,
                }}
                  className="h-20 absolute left-12"
                  src="assets/circle.png"
                  alt="Photo"
                />

                <div className="mt-24 sm:mt-32 lg:mt-32 h-20 mb-10">
                </div>
                <Link href="#projects" className="relative px-6 py-3 font-bold text-black group">
<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#FF85A1] group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span className="absolute inset-0 w-full h-full border-4 border-black"></span>
<span className="relative">Browse Projects</span>
</Link>
                {/* <motion.button 
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                className='bg-[#FF85A1] px-4 py-2 text-sm font-semibold text-black  '>Browse Projects</motion.button> */}

                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Fazna Harees - <br/> Fullstack Developer
                </h1>
                
               
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
