import React from 'react';
import './card.css'
import project1 from '../../assets/food image.png';
import project2 from '../../assets/project2.avif';
import project3 from '../../assets/blog.png';
import project5 from '../../assets/snake game screenshot.png';
import project6 from '../../assets/education site image.png';
import project7 from '../../assets/project7.png'
import project8 from '../../assets/project8.png'



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
            description: 'i have created static blog using "html, css and javasccript',
            code: 'https://github.com/anusha-patel/blog'
        },
       
        {
            id: 4,
            src: project5,
            title: 'snake Game',
            description: 'i have created one of my childhood favourite snake game using html, css and javasript',
            demo: 'https://anusha-patel.github.io/snakeGame/',
            code:'https://github.com/anusha-patel/snakeGame',
        },
        {
            id: 5,
            src: project6,
            title: 'education website',
            description: 'i have created educational website using " html,css and javascript"',
            demo: 'https://anusha-patel.github.io/exam/',
            code:'https://github.com/anusha-patel/exam',
        },
        {
            id:6,
            src:project7,
            title:'google-keep-clone',
            description:"i have created clone of goole keep using 'html, css, javascript'",
            demo:"https://anusha-patel.github.io/google-keep-clone/",
            code:"https://github.com/anusha-patel/google-keep-clone",
        },
        {
            id:7,
            src:project8,
            title:'varal UAE',
            description:"i have created Website 'html, css, javascript'",
            demo:"https://anusha-patel.github.io/varal/",
            code:"https://github.com/anusha-patel/varal",
        }
      
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
                                <div className="image w-full h-full">
                                    <img className=' w-3 h-4 object-contain ' src={src} alt="" srcset="" />
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