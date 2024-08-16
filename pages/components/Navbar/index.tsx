import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function Navbar() {
    const items = [
        {
            name:'Home',
            link:'/'
        },
        {
            name:'Work',
            link:'#experience'
        },
        {
            name:'Skills',
            link:'#skills'
        },
        {
            name:'Projects',
            link:'#projects'
        },
        {
            name:'Contact',
            link:'/contact'
        },
    ]
    const router = useRouter()
    const scroll =(name:any) => {
        if(name.startsWith('/')){
            router.push(name)
        }else {
        document.querySelector(name).scrollIntoView({ behavior: 'smooth' });
        }
    }
  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-transparent'>
        <div className='flex flex-row justify-center items-center px-4 sm:px-10 py-0 sm:py-4'>
            <div className='flex flex-row gap-x-8 items-center bg-black px-6 py-2 sm:rounded-full'>
                {items.map((item,index)=><button onClick={() => scroll(item.link)}  className='text-md sm:text-xl font-semibold tracking-tight text-white hover:text-indigo-200'>{item.name}</button>)}
            </div>
            </div>
        </div>
  )
}
