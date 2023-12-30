import { motion } from "framer-motion"
import Link from 'next/link'
import Image from "next/image"

const EmailIcon = (props:any) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16" {...props}>
<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>

const LinkedInIcon = (props:any) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"  {...props}>
<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>

const GithubIcon = (props:any) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"  {...props}>
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>

export default function Hero() {
  return (
    // bg-gradient-to-tr from-[#FF0A54] to-pink-600
    <div className=" bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen animate-shiny bg-white">
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
<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-indigo-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
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
                
                <div className="flex justify-start items-center gap-x-4 mt-10 text-black">
                  <a href="https://www.linkedin.com/in/faznaharees/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="w-5 h-5 fill-gray-600 " />
                  </a>
                  <a href="https://github.com/faznaa" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="w-6 h-6 fill-gray-600" />
                  </a>
                  <a href="mailto:fasnahareesfasna@gmail.com?subject=Project%20Name&body=Hi%Fazna," target="_blank" rel="noopener noreferrer">
                    <EmailIcon className="w-6 h-6 fill-gray-600 text-indigo-600" />
                  </a>
                {/* <Image alt="email" src={linkedinIcon} className='w-6 h-6 fill-indigo-500'/>
                <Image alt="email" src={emailIcon} className='w-6 h-6 text-indigo-500'/>

                  <Image alt="email" src={emailIcon} className='w-6 h-6 text-indigo-500'/> */}
                </div>
               
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
