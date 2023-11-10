import { motion } from "framer-motion"
import Link from 'next/link'
import Image from "next/image"

export default function Services() {
  return (
    // bg-gradient-to-tr from-[#FF0A54] to-pink-600
    <div id="#services" className=" min-h-screen bg-indigo-300 bg-[#C0C0C0]">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:gap-x-8 lg:px-8 lg:py-30">
          <div className="px-6 lg:px-0 lg:pt-4">
            
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Services</h1>
            <p className="text-gray-900 font-semibold  mt-10">Have a project in mind? </p>
           <motion.button 
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                className='bg-black text-indigo-300 px-4 py-2 text-lg mt-2 '>
                  <Link href="/contact">Contact Me</Link>
                </motion.button>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
           <div className="w-full bg-gradient-to-tr bg-gray-100 px-8 py-6 rounded-xl mt-10 animate-shiny">
                <h3 className=" text-lg mb-4 font-bold tracking-tight text-gray-900 sm:text-xl">Chatbot Development</h3>
            <p className="text-gray-700">Creating whatsapp, telegram  or discord chatbots according to your business needs</p>
            <p className="text-indigo-700 font-semibold"> <a href="https://wa.me/+971569107014" target="_blank" rel="noreferrer" >AI Whatsapp chatbot for tax related queries </a></p>
            </div>
            <div className="bg-gradient-to-tr bg-gray-100 px-8 py-6 rounded-xl mt-10 animate-shiny">
                <h3 className=" text-lg mb-4 font-bold tracking-tight text-gray-900 sm:text-xl">E-commerce Websites</h3>
            <p className="text-gray-700">Business websites with payment, email comms, admin panel etc.</p>
            <p className="text-indigo-700 font-semibold"> <a href="https://earnest-madeleine-e4b5c0.netlify.app/" target="_blank" rel="noreferrer" >Tour booking website - Dubai </a></p>

                </div>

                <div className="bg-gradient-to-tr bg-gray-100 px-8 py-6 rounded-xl mt-10 animate-shiny">
                <h3 className=" text-lg mb-4 font-bold tracking-tight text-gray-900 sm:text-xl">Mobile app development</h3>
            <p className="text-gray-700"> Customized android, ios apps.</p>
            <p className="text-indigo-700 font-semibold"> <a href="https://play.google.com/store/apps/details?id=com.gudof.converter&hl=en_SG&gl=US&pli=1" target="_blank" rel="noreferrer" >Instaconvert </a></p>

                </div>

                <div className="bg-gradient-to-tr bg-gray-100 px-8 py-6 rounded-xl mt-10 animate-shiny">
                <h3 className=" text-lg mb-4 font-bold tracking-tight text-gray-900 sm:text-xl">Web scraping</h3>
            <p className="text-gray-700"> Extract data from various websites. </p>
            {/* <p className="text-indigo-700 font-semibold"> <a href="https://play.google.com/store/apps/details?id=com.gudof.converter&hl=en_SG&gl=US&pli=1" target="_blank" rel="noreferrer" >Instaconvert </a></p> */}

                </div>
           </div>
           
            </div> 
        </div>
      </div>
    </div>
  )
}
