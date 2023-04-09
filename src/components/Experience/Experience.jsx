import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import ReactImage from '../../assets/ReactImage.png';
import Bootstrap from '../../assets/Bootstrap.png';
import tailwind from '../../assets/tailwindImage.png';
import Github from '../../assets/github.png';

const Experience = () => {

    const experience =[
        {
            id:1,
            src:html,
            text:'html',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            text:'css',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:js,
            text:'javascript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:ReactImage,
            text:'React',
            style:'shadow-emerald-600'
        },
        {
            id:5,
            src:Bootstrap,
            text:'Bootstrap',
            style:'shadow-purple-600'
        },
        {
            id:6,
            src:tailwind,
            text:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:7,
            src:Github,
            text:'Github',
            style:'shadow-gray-400'
        }
    ]
  return (
    <div name = 'experience' id='experince'  className=' duration-200 bg-gradient-to-b from-gray-800 to-black w-full h-full'>
        <div className=' max-w-screen-lg mx-auto  p-4 flex flex-col justify-center
         w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold
                 border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-8'>these are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
                {
                experience.map(({id,src,text,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} className=' w-20 h-20 mx-auto' alt="" />
                    <p>{text}</p>
                </div>

                ))

                }   
               
            </div>



        </div>
        

    </div>
  )
}

export default Experience