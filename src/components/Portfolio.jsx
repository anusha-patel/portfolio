import React from 'react';
import project1 from '../assets/project1.avif';
import project2 from '../assets/project2.avif';
import project3 from '../assets/project3.avif';
import project4 from '../assets/project4.avif';
import project5 from '../assets/project5.avif';


const Portfolio = () => {

    const portfolio = [
        {
            id:1,
            title:'Resturant website',
            src:project1,
            demo:'https://anusha-patel.github.io/food/',
            code:'https://github.com/anusha-patel/food'
           
        },
        {
            id:2,
            title:'Travel website',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at debitis ullam doloremque vero! Laboriosam animi libero explicabo blanditiis placeat?',
            src:project2,
            demo:'https://anusha-patel.github.io/travel/',
            code:'https://github.com/anusha-patel/travel',


           

        },
        {
            id:3,
            src:project3,
            title:'Travel website',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at debitis ullam doloremque vero! Laboriosam animi libero explicabo blanditiis placeat?',
            code:'https://Github.com'
        },
        {
            id:4,
            src:project4,
            title:'Travel website',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at debitis ullam doloremque vero! Laboriosam animi libero explicabo blanditiis placeat?', 
            demo:'https://anusha-patel.github.io/food/'
        },
        {
            id:5,
            src:project5,
            title:'Travel website',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at debitis ullam doloremque vero! Laboriosam animi libero explicabo blanditiis placeat?',
            demo:'https://anusha-patel.github.io/food/'
        }
    ]

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800
    w-full text-white md:h-screen duration-200 h-auto ' id='portfolio'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>check out some of my works</p>

            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 h-auto'>
                {portfolio.map(({id,src,title,demo,code,description}) =>(
                      <div key={id} className='shadow-md shadow-gray-600 rounded-lg w-3/4 mx-auto h-auto only:md:w-3/4 p-1 '>
                        <div className="title">
                            <h3 className=' text-center py-2'>{title}</h3>
                            
                        </div>
                       
                      <img src={src} alt="" className='rounded-md duration-300 hover:scale-105 w-full h-4/6' />
                      <div className='flex items-center justify-center '>
                        <a href={demo} ><button className='w-1/2 text-xl px-3 py-4  mx-4 duration-200 hover:scale-90 '>Demo</button></a>
                          
                        <a href={code} ><button className='w-1/2 text-xl px-3 py-4  mx-4 duration-200 hover:scale-90 '>Code</button></a> 
                      </div>
                  </div>

                ))}
            </div>

        </div>
        </div>
    )
}

export default Portfolio