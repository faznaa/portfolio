import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to track the mobile menu visibility
    const items = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Work',
            link: '#experience'
        },
        {
            name: 'Skills',
            link: '#skills'
        },
        {
            name: 'Projects',
            link: '#projects'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
    ];

    const router = useRouter();

    const scroll = (name:any) => {
        if (name.startsWith('/')) {
            router.push(name);
        } else {
            document.querySelector(name).scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-transparent'>
            {/* Desktop Navbar */}
            <div className='hidden sm:flex flex-row justify-center items-center px-4 sm:px-10 py-0 sm:py-4'>
                <div className='flex flex-row gap-x-8 items-center bg-black px-6 py-2 sm:rounded-full'>
                    {items.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => scroll(item.link)}
                            className='text-md sm:text-xl font-semibold tracking-tight text-white hover:text-indigo-200'
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='sm:hidden flex justify-end items-center px-4 py-2 bg-black'>
                <button
                    className='text-gray-200 pr-4 focus:outline-none'
                    onClick={toggleMenu}
                >
                    {/* Hamburger Icon */}
                    <svg
                        className='w-8 h-8'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Items */}
            {isOpen && (
                <motion.div
                    className='sm:hidden h-screen pt-20 overflow-hidden flex flex-col items-center bg-black text-white'
                >
                    {items.map((item, index) => (
                        <motion.button
                            initial={{ color:'gray', y:-10,opacity: 0 }}
                            animate={{ y:0,opacity: 1 }}
                            key={index}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            exit={{ color:'gray', y:-10,opacity: 0 }}
                            onClick={() => {
                                scroll(item.link);
                                setIsOpen(false);
                            }}
                            whileHover={{ color:'white'}}
                            className='py-4 w-full text-center text-lg font-semibold  '
                        >
                            {item.name}
                        </motion.button>
                    ))}
                </motion.div>
            )}
        </div>
    );
}
