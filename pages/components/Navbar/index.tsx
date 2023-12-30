import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Navbar() {
    const items = [
        {
            name:'Home',
            link:'/'
        },
        {
            name:'About',
            link:'#about'
        },
        {
            name:'Experience',
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
  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
        <div className='flex flex-row justify-center items-center px-4 sm:px-10 py-4'>
            <div className='flex flex-row gap-x-8 items-center'>
                {items.map((item,index)=><a  href={item.link} className='text-lg sm:text-xl font-semibold tracking-tight text-black hover:text-indigo-700'>{item.name}</a>)}
            </div>
            </div>
        </div>
  )
}
