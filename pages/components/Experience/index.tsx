import React from 'react'
import FadeIn from '../FadeIn'
import { CardBody, CardContainer, CardItem } from '../ui/3dcard'
import Link from 'next/link'

const MyCard = ({ data } :any) => {
    return ( <CardContainer className="inter-var">
        <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto  h-auto rounded-xl p-3 sm:p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
             {data.title}

          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
                         {data.company}

          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            {/* <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            /> */}
            {/* <div  className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto  h-auto rounded-xl p-6 border  "> */}
            <div className='flex sm:flex-row flex-col gap-x-4 '>
            {data.points?.map((point:any,index:number) => (
              <CardItem
                as="p"
                translateZ={(index+1)*20}
                className="relative group/card my-3 hover:text-white hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto  h-auto rounded-xl p-6 border text-gray-300 gap-x-4"      >
                {point}
              </CardItem>
            ))}
            </div>

          </CardItem>
          <div className="flex justify-between items-center mt-5 sm:mt-20">
            <CardItem
              translateZ={20}
            //   as={Link}
            //   href="https://twitter.com/mannupaaji"
            //   target="__blank"
              className="px-4 py-2 font-semibold rounded-xl text-xs font-normal dark:text-white"
            >
              {/* Try now → */}
              {data.from}
            </CardItem>
            <CardItem
              translateZ={20}
              className="px-4 py-2 font-semibold rounded-xl text-xs font-normal dark:text-white"

            //   as="button"
            //   className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              {data.to}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>)
}

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
      from: 'Jul 2022',
      to: 'Present',
      title: 'Senior Fullstack Developer',
      company: 'Toyow',
      points: [
          'Led a team of 4, driving key initiatives such as code reviews, bug resolution, and hosting optimization, which improved overall project efficiency by 20%.',
          'Played a critical role in developing payment systems and KYC (Know Your Customer) processes, increasing customer onboarding efficiency.',
          'Collaborated closely with the penetration testing team, effectively resolving security vulnerabilities and improving platform security.'
      ]
  },
  {
      from: 'May 2022',
      to: 'Jul 2022',
      title: 'Fullstack Developer',
      company: 'Aquarius India',
      points: [
          'Developed and deployed a Next.js website with robust authentication and data collection, increasing data reliability and user security by 35%.',
          'Designed and implemented a secure Admin Panel with Multi-Factor Authentication (MFA) and role-based access controls, reducing unauthorized access attempts.'
      ]
  },
  {
      from: 'Jan 2021',
      to: 'May 2021',
      title: 'Blockchain Developer',
      company: 'DX Software',
      points: [
          'Built a secure crypto payment system, reducing transaction failures.',
          'Created a smart contract-powered payment system with an integrated shopping cart for seamless product purchases, enhancing user experience.'
      ]
  },
  {
      from: 'Jan 2020',
      to: 'Dec 2020',
      title: 'Frontend Developer',
      company: 'Infohe',
      points: [
          'Developed frontend features for an eCommerce website using a React template.',
          'Implemented bulk product updating functionality via CSV files, significantly streamlining inventory management for large product catalogs.'
      ]
  }
];

  return (
    // <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    <div className="bg-grid-white/[0.1] bg-black min-h-screen sm:h-[150vh]  relative p-4" id="experience">
              <div className="z-10 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       <div className='z-20 absolute h-full '>
       <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-gray-300 sm:px-20 sticky ">Experience</h2>

        {/* Create a vertical line and circles on line for each experience
        add cards left and right of the line alternatively */}
        {/* <div className='h-[200vh] mx-auto w-2 border-l border-gray-300'> */}
            {/* {experience.map((exp,index)=>(index%2==0? <div className='ml-64 -mt-72'><MyCard data={exp}/></div>:<div className='-ml-[440px] -mt-72'><MyCard data={exp}/></div>))} */}
            {/* {experience.map((exp,index)=><MyCard data={exp}/>)} */}
        {/* </div> */}

            <div className='w-screen flex justify-center h-[500px] sm:h-[800px] overflow-scroll scrollbar-hide'>
            <div className=' px-4 sm:px-20  flex flex-col w-full sm:max-w-3xl justify-between sm:gap-x-6 items-center sm:items-start'>
            {experience.map((exp,index)=><MyCard data={exp}/>)}

            </div>
            </div>



   {/* <FadeIn>
   <div className='md:px-20'>
    
     {experience.map((exp,index)=><div className='flex flex-col w-full  sm:flex-row justify-between sm:gap-x-6 items-center sm:items-start my-10'>
                <div className='sm:w-8/12 flex flex-col justify-between items-start'>
                    <h1 className='text-lg sm:text-2xl text-[#004E98] tracking-tight font-semibold mb-2 '>{exp.title}</h1>
                    <div className='block sm:hidden mb-4'>
                   
                        <p className='text-md sm:text-lg sm:font-semibold tracking-tight text-indigo-600'>
                        {exp.company}
                    </p>
                    <p className='text-md sm:text-lg sm:font-semibold tracking-tight text-gray-300 text-right'>
                        {exp.from} - {exp.to}
                        </p></div>
                    <ul className='list-disc ml-4'>
                        {exp.points.map((point,index)=><li className='text-md sm:text-lg tracking-tight text-gray-300 '> {point}</li>)}</ul>
                    </div>
                    <div className='sm:w-4/12 text-right hidden sm:block'>
                    <p className='text-md sm:text-lg sm:font-semibold tracking-tight text-gray-300 text-right'>
                        {exp.from} - {exp.to}
                        </p>
                        <p className='text-md sm:text-lg sm:font-semibold tracking-tight text-indigo-600'>
                        {exp.company}
                    </p>
                    </div>
                    
                    </div>)}
     </div>
   </FadeIn> */}

       </div>

     </div>
  )
}
