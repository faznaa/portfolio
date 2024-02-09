import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion"
import FadeIn from '../FadeIn'
import { useState } from 'react'

const projects = [
    {
        link:"https://earnest-madeleine-e4b5c0.netlify.app/",
        img:"/assets/klashra.png",
        title:"Klashra",
        description:"A tour booking platform for Dubai based company.",
        tags:['web']
    },
    {
      link:'',
      img:'/assets/resurge.gif',
      title:'Medical Chat Bot',
      description:'A medical chat bot that can chat with patients to get summary',
      tags:['web','bot','ai']
    },
    {
      link:'',
      img:'/assets/teacher.gif',
      title:'Lesson Maker AI',
      tags:['ai','llm'],
      description:'An AI that can make lessons from topics for different age groups'
    },
    {
      link:'#',
      img:'/assets/negotiator.gif',
      title:'Negotiator AI',
      tags:['ai','bot','llm'],
      description:'An AI that can negotiate with customers to get the best deal for the company'
    },
    {
      link:'#',
      img:'/assets/translator.gif',
      title:'Translator AI',
      tags:['ai','bot','llm'],
      description:'An AI that can translate files to multiple languages.'
    },
    // {
    //   link:'https://frameinfill.com',
    //   img:'/assets/frameinfill.png',
    //   title:'Frame Infill ',
    //   tags:['blockchain','web'],
    //   description:'Landing Page for a construction company'
    // },
    {
        link:"https://main--glistening-baklava-a3e7a8.netlify.app/",
        img:"/assets/nexwave.png",
        title:"Nexwave",
        tags:['web'],
        description:"Website Service Provider agency landing page"
    },
    {
        link:"https://qiblogistics.com",
        img:"/assets/qib.png",
        title:"QIB Logistics",
        tags:['web'],
        description:"A Canadian based logistics company website"
    },
    {
      link:'https://github.com/faznaa/resto-menu-view#resto-menu-app',
      img:'/assets/resto_menu/1.png',
      title:'Restaurant Menu App',
      tags:['web'],
      description:'A restaurant menu app built with Nextjs and Tailwind CSS'
    },  
    {
      link:'https://github.com/faznaa/trial-bot-discord',
      img:'/assets/discord.png',
      title:'Discord Bot',
      tags:['bot','discord'],
      description:'This bot will add a custom "TRIAL" role to users who command /trial in the channel. '
    },
    {
      link:'https://github.com/faznaa/react-to-next-page',
      img:'/assets/react-to-next.png',
      title:'React to Next',
      tags:['web'],
      description:'Conversion of React app to Nextjs.'
    }
]

export default function Projects() {
  const allTags = [
    'web','bot','ai','llm'
  ]
  const [tags,setTags] = useState(allTags.map(tag=>({name:tag,active:false})))

  const onTagClick = (name:string) => {
    const newTags = tags.map(tag=>{
      if(tag.name===name){
        return {...tag,active:!tag.active}
      }
      return tag
    })
    setTags(newTags)
  }
  const [myTag,setMyTag] = useState('')
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
                
                {/* Tags  */}
                <div className='flex flex-wrap gap-x-2 gap-y-4 mb-8'>
                  {tags.map((tag,index)=><button onClick={() => setMyTag(tag.name)} className={`text-md sm:text-lg tracking-tight text-black ${tag.name==myTag ? 'bg-violet-400':'bg-violet-300'} rounded-xl px-4 py-2 border-2 hover:bg-violet-400 hover:border-violet-600 cursor-pointer transition-all duration-300 border-violet-400  `}>
                    {tag.name}
                  </button>)}
                  {myTag && <button onClick={() => setMyTag('')}  className='text-violet-400'>
                    <XMarkIcon className='h-5 w-5'/>
                    </button>
                 } </div>
                <div className='grid grid-cols-1 gap-y-10 lg:grid-cols-3 gap-x-6'>
                
                   {projects.filter(project => myTag ? project.tags.includes(myTag): true).map((project,index)=><a href={project.link} target='_blank' referrerPolicy='no-referrer'>
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
