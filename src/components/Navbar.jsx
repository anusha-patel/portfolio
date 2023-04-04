import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id:1,
            link:'#',
            title:'Home'
          },
          {
            id:2,
            link:'#about',
            title:'About'
          },
          {
            id:3,
            link:'#portfolio',
            title:'Portfolio'
          },
        {
            id: 4,
            link:'#experince',
            title: "experince"
        },
        {
            id: 5,
            link:'#contact',
            title: "contact"
        }


    ];

    return (
        <div className='flex justify-between items-center w-full h-20 px-4  text-white bg-black fixed'>
            <div>
                <div className="logo">
                    
                </div>
                <h1 className='font-signature text-5xl ml-2'>Anusha</h1>

            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link,title }) => (
                    <li key={id}  className='px-5 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-400'> <a href={link}> {title}</a></li>

                ))}


            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

            </div>
            {nav && (
                <ul className='flex flex-col justify-center w-full items-center absolute top-0 left-0 v-full h-screen bg-gradient-to-b from-black text-gray-500 '>
                    {links.map(({ id, link,title }) => (
                        <li key={id}  className='px-4 cursor-pointer capitalize py-6 text-4xl' ><a href={link}> {title}</a></li>

                    ))}


                </ul>
            )}



        </div>
    )
}

export default Navbar