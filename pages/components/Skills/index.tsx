import React, { useEffect } from 'react'
import FadeIn from '../FadeIn';

const skills = [
    {
        title:'Frontend',
        skills:[
            'React',
            'Nextjs',
            'Tailwind CSS',
            'Redux',
            'Ionic',
            'Typescript',
            'Web3js',
            'Streamlit'

        ]
    },
    {
        title:'Backend',
        skills:[
            'Nestjs',
            'Nodejs',
            'Expressjs',
            'MongoDB',
            'PostgreSQL',
            'Firebase',
            'Supabase',
            'Solidity',
            'Python'
        ]
    },
    {
        title:'Hosting',
        skills:[
            'Git',
            'Github',
            'AWS',
            'Docker',
            'Nginx',
            'Linux',
            'Heroku',  
        ]
    },
    {
        title:'Auth',
        skills:[
            'Auth0',
            'Next-Auth',
            'AWS Cognito',
        ]
    },
    {
        title:'Others',
        skills:[
            'Prisma',
            'GraphQL',
            'OpenAI',
            'Langchain',
            'Pinecone',
            'Discordjs',
            'Stripe',
        ]
    }
]



// Example usage

export default function Skills() {
    function randomPastelHex() {
        const hue = Math.floor(Math.random() * 360); // Random hue
        const saturation = Math.floor(Math.random() * 30) + 70; // Saturation between 70% and 100%
        const lightness = Math.floor(Math.random() * 20) + 80; // Lightness between 80% and 100%
        return hslToHex(hue, saturation, lightness);
    }
    
    function hslToHex(h:number, s:number, l:number) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = (n:any) => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }
  return (
    <div className="bg-[#6e9fc1] min-h-screen relative p-4 sm:p-10 sm:pt-16" id="skills">
               <div className='sm:px-6 md:px-12 lg:px-20'>

        <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white pt-6 ">Skills</h2>
       <FadeIn>
            {skills.map((skill,index)=><div className='flex  w-full flex-row justify-between sm:gap-x-6 items-center lg:items-start my-10'>
                <div className='sm:w-8/12 flex flex-col justify-between items-start'>
                    <h1 className='text-lg sm:text-2xl text-white tracking-tight font-semibold mb-2 '>{skill.title}</h1>
                    <div className='flex flex-wrap gap-x-2 gap-y-4'>                    {skill.skills.map((skill,sIndex)=><div style={{background:randomPastelHex()}} className={`text-md sm:text-lg tracking-tight text-black rounded-xl px-4 py-2 border border-black  `}> 

                     {skill}
                     </div>)}
</div>
                    </div></div>)}
       </FadeIn>
       </div>

    </div>
  )
}
