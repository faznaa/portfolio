import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion"
import FadeIn from '../FadeIn'

const projects = [
    {
        link:"https://earnest-madeleine-e4b5c0.netlify.app/",
        img:"/assets/klashra.png",
        title:"Klashra",
        description:"A tour booking platform for Dubai based company."
    },
    {
        link:"https://main--glistening-baklava-a3e7a8.netlify.app/",
        img:"/assets/nexwave.png",
        title:"Nexwave",
        description:"Website Service Provider agency landing page"
    },
    {
        link:"https://qiblogistics.com",
        img:"/assets/qib.png",
        title:"QIB Logistics",
        description:"A Canadian based logistics company website"
    },
    {
      link:'https://github.com/faznaa/resto-menu-view#resto-menu-app',
      img:'/assets/resto_menu/1.png',
      title:'Restaurant Menu App',
      description:'A restaurant menu app built with Nextjs and Tailwind CSS'
    },  
    {
      link:'https://github.com/faznaa/trial-bot-discord',
      img:'/assets/discord.png',
      title:'Discord Bot',
      description:'This bot will add a custom "TRIAL" role to users who command /trial in the channel. '
    },
    {
      link:'https://github.com/faznaa/react-to-next-page',
      img:'/assets/react-to-next.png',
      title:'React to Next',
      description:'Conversion of React app to Nextjs.'
    }
]

export default function Projects() {
  return (
    <div className="bg-gray-200 min-h-screen relative" id="projects">
      <div className="relative isolate overflow-hidden z-20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:max-w-9xl lg:py-30">
          <div className="px-6 lg:px-0 lg:pt-20">
            <div className="mx-auto max-w-full">
             <FadeIn>
             <div className="w-full relative">
                
             
                <h1 className="my-10  text-3xl sm:text-6xl font-bold tracking-tight text-black  ">
                 Projects
                </h1>
                
                <div className='grid grid-cols-1 gap-y-10 lg:grid-cols-3 gap-x-6'>
                
                   {projects.map((project,index)=><a href={project.link} target='_blank' referrerPolicy='no-referrer'>
                   <div  className='relative w-96 h-48 overflow-hidden '>
                        <motion.img src={project.img} whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className='z-10 w-full h-full object-cover '/>
                        {/* <div  className='absolute mix-blend-color z-0 top-0 bg-gradient-to-tr to-[#FF0A54] from-[#004E98] w-full h-full '/> */}
                    </div>
                    <h1 className='text-lg sm:text-3xl text-[#004E98] tracking-tight font-bold mt-5 '>{project.title}</h1>
                    <p className='text-md sm:text-lg sm:font-semibold tracking-tight text-black'>
                        {project.description}
                    </p>
                   </a>)}

                   
                </div>
              </div>
             </FadeIn>
            </div>
          </div> 
        </div>
      </div>
   
    </div>
  )
}
