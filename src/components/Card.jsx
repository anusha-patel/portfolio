import React from 'react';
import './card.css'
import project1 from '../assets/project1.avif';
import project2 from '../assets/project2.avif';
import project3 from '../assets/project3.avif';
import project4 from '../assets/project4.avif';
import project5 from '../assets/project5.avif';
import project6 from '../assets/project1.avif';



const Card = () => {

    const portfolio = [
        {
            id: 1,
            title: 'Resturant website',
            src: project1,
            description: 'I have created resturant webpage using HTML, CSS, JAVASCRIPT AND JQUERY',
            demo: 'https://anusha-patel.github.io/food/',
            code: 'https://github.com/anusha-patel/food'

        },
        {
            id: 2,
            title: 'Travel website',
            description: 'i have created travel webpage using HTML, CSS, JAVASCRIT AND JQUERY',
            src: project2,
            demo: 'https://anusha-patel.github.io/travel/',
            code: 'https://github.com/anusha-patel/travel',




        },
        {
            id: 3,
            src: project3,
            title: 'Blog',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at debitis ullam doloremque vero! Laboriosam animi libero explicabo blanditiis placeat?',
            demo :'https://anusha-patel.github.io/blog/',
            code: 'https://github.com/anusha-patel/blog'
        },
        {
            id: 4,
            src: project4,
            title: 'to-do website',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at debitis ullam doloremque vero! Laboriosam animi libero explicabo blanditiis placeat?',
            demo: 'https://anusha-patel.github.io/aganitha-test-2/',
            code:'https://github.com/anusha-patel/aganitha-test-2',
        },
        {
            id: 5,
            src: project5,
            title: 'e-commrical website',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at debitis ullam doloremque vero! Laboriosam animi libero explicabo blanditiis placeat?',
            demo: 'https://anusha-patel.github.io/food/'
        },
    
        {
            id: 6,
            src: project5,
            title: 'snake Game',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at debitis ullam doloremque vero! Laboriosam animi libero explicabo blanditiis placeat?',
            demo: 'https://anusha-patel.github.io/snakeGame/',
            code:'https://github.com/anusha-patel/snakeGame',
        },
        {
            id: 7,
            src: project6,
            title: 'education website',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at debitis ullam doloremque vero! Laboriosam animi libero explicabo blanditiis placeat?',
            demo: 'https://anusha-patel.github.io/exam/',
            code:'https://github.com/anusha-patel/exam',
        },
      
    ]
    return (
        <div id='portfolio' className='duration-100'>
            <div className="portfolio-container bg-gradient-to-b from-black to-gray-800
              w-full text-white  ">
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                    <div className="heading">
                        <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>portfolio</h1>
                        <p className='py-4'>check some of my works</p>
                    </div>
                    <div className="card-container grid sm:grid-cols-1 md:grid-cols-2 gap-6 px-12 sm:px-0">
                        {portfolio.map(({ id, src, title, demo, code, description }) => (
                            <div className="card shadow-md shadow-gray-600" key={id}>
                                <div className='card-body'>
                                    <div className="title">
                                        <h1>{title}</h1>
                                        <h2>{description}</h2>

                                    </div>
                                
                                    <div className="btns">
                                        <a href={demo} target="_blank" rel="noreferrer noopener"> <button className='demo link-btn duration-200'>demo</button> </a>
                                        <a href={code} target="_blank" rel="noreferrer noopener"> <button className='code link-btn duration-200'>code</button> </a>
                                    </div>
                                </div>
                                <div className="image">
                                    <img src={src} alt="" srcset="" />
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card