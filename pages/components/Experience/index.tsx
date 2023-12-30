import React from 'react'
import FadeIn from '../FadeIn'

export default function WorkExperience() {
//     Jul/2022 – Current Senior Fullstack Developer Toyow
// • Led a team of 4 members, overseeing various aspects including code reviews, code merging, hosting,
// bug resolution, and code quality enhancements.
// • Took a pivotal role in developing crucial components of the codebase, such as the payment system and
// KYC (Know Your Customer) processes.
// • Collaborated closely with the penetration testing team to address and resolve security concerns effec-
// tively.
// May/2022 –
// Jul/2022
// Fullstack Developer Aquarius India
// • Developed and deployed a Next.js website featuring robust authentication, data collection capabilities,
// and hosting on AWS EC2.
// • Designed and implemented an Admin Panel equipped with Multi-Factor Authentication (MFA) for multiple
// administrators, each with role-based access controls for enhanced security and user management.
// Jan/2021 –
// May/2021
// Blockchain Developer DX Software
// • Build a crypto payment system
// • Created a Payment Contract and system which includes cart for product purchase
// Jan/2020 –
// Dec/2020
// Frontend Developer Infohe
// • Worked on an E-commerce website using existing react template.
// • Created functions for bulk updating products from csv file
    const experience = [
        {
            from:'Jul 2022',
            to:'Present',
            title:'Senior Fullstack Developer',
            company:'Toyow',
            points:[
                'Led a team of 4 members, overseeing various aspects including code reviews, code merging, hosting, bug resolution, and code quality enhancements',
                'Took a pivotal role in developing crucial components of the codebase, such as the payment system and KYC (Know Your Customer) processes.',
                'Collaborated closely with the penetration testing team to address and resolve security concerns effectively.'
            ]
        },
        {
            from:'May 2022',
            to:'Jul 2022',
            title:'Fullstack Developer',
            company:'Aquarius India',
            points:[
                'Developed and deployed a Next.js website featuring robust authentication, data collection capabilities, and hosting on AWS EC2.',
                'Designed and implemented an Admin Panel equipped with Multi-Factor Authentication (MFA) for multiple administrators, each with role-based access controls for enhanced security and user management.'
            ]
        },
        {
            from:'Jan 2021',
            to:'May 2021',
            title:'Blockchain Developer',
            company:'DX Software',
            points:[
                'Build a crypto payment system',
                'Created a Payment Contract and system which includes cart for product purchase'
            ]
        },
        {
            from:'Jan 2020',
            to:'Dec 2020',
            title:'Frontend Developer',
            company:'Infohe',
            points:[
                'Worked on an E-commerce website using existing react template.',
                'Created functions for bulk updating products from csv file'
            ]
        }
    ]
  return (
    <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-orange-100 via-violet-200 to-violet-100 min-h-screen relative p-4 sm:p-10 sm:pt-16" id="experience">
        <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-black sm:px-20 ">Experience</h2>
   <FadeIn>
   <div className='sm:px-20'>
     {experience.map((exp,index)=><div className='flex flex-col w-full  lg:flex-row justify-between sm:gap-x-6 items-center lg:items-start my-10'>
                <div className='sm:w-8/12 flex flex-col justify-between items-center lg:items-start'>
                    <h1 className='text-lg sm:text-2xl text-[#004E98] tracking-tight font-semibold mb-2 '>{exp.title}</h1>
                    
                    <ul className='list-disc ml-4'>
                        {exp.points.map((point,index)=><li className='text-md sm:text-lg tracking-tight text-black '> {point}</li>)}</ul>
                    </div>
                    <div className='sm:w-4/12 text-right '>
                    <p className='text-md sm:text-lg sm:font-semibold tracking-tight text-black text-right'>
                        {exp.from} - {exp.to}
                        </p>
                        <p className='text-md sm:text-lg sm:font-semibold tracking-tight text-indigo-600'>
                        {exp.company}
                    </p>
                    </div>
                    
                    </div>)}
     </div>
   </FadeIn>


     </div>
  )
}
