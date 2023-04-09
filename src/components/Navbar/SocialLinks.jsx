import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImDownload } from 'react-icons/im';
import CV from '../../assets/resume.pdf'


const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={25} />
                </>
            ),
            href: 'https://linkedin.com/in/anusha-shamakura-5b8549203',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={25} />
                </>
            ),
            href: 'https://github.com/anusha-patel'

        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={25} />
                </>
            ),
            href: 'mailto:anushapatel510@gmail.com'

        },
        {
            id: 4,
            child: (
                <>
                    Resume <ImDownload size={25} />
                </>
            ),
            href: CV,
            style: 'rounded-br-md',
            download: true
        }
    ];
    return (
        <div className='flex-col top-[35%] left-0 fixed' >
            <ul>
                { links.map(({id,child,href,style,download}) => (
                    

                    <li key= {id}
                    className =
                    {'hidden lg:flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-300 bg-gray-500 ' + " " + style} >
               
                    <a href= {href}
                        className='flex justify-between items-center w-full text-white'
                        download= {download}
                        target='_blank'
                        rel='noreferrer' >
                        {child}
                    </a>

                </li>



                ))}



                    
            </ul>
        </div>
    )

};

export default SocialLinks;
