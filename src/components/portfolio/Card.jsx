import React from 'react';
import './card.css'
import project1 from '../../assets/food image.png';
import project2 from '../../assets/project2.avif';
import project5 from '../../assets/snake game screenshot.png';
import project7 from '../../assets/project7.png'
import project9 from '../../assets/project9.png';
import weather from '../../assets/weather_app.png'
import calorieCheck from '../../assets/calorie-check.png'
import Ecomm from '../../assets/e-comm.png'



const Card = () => {
    const width ='60%';
    const height = '60%';
    const portfolio = [

        {
            id: 1,
            title: 'E-commerce website',
            src: Ecomm,
            Tags: (
                <>
                   <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>REACT</li>
                    <li>NODE JS</li>
                    <li>MONGO DB</li>
                </>
            ),
            demo: 'https://e-commerce-front-psi.vercel.app/',
            code: 'https://github.com/anusha-patel/e-commerce'

        },
        {
            id: 2,
            title: 'Resturant website',
            src: project1,
            Tags: (
                <>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    
                </>
            ),
            demo: 'https://anusha-patel.github.io/food/',
            code: 'https://github.com/anusha-patel/food'

        },
        {
            id: 3,
            title: 'real estate',
            Tags: (
                <>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>REACT</li>
                    <li>Material UI</li>
                    <li>Next js </li>
                    <li>rapid API </li>
                    
                </>
            ),
           
            src: project9,
            demo: 'https://real-estate-pink-nine.vercel.app/',
            code: 'https://github.com/anusha-patel/real-estate',

        },
        {
            id: 4,
            title: 'weather app',
            Tags: (
                <>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>REACT</li>
                    <li>tailwind</li>
                    <li> open Api</li>
                    <li> unsplash Api</li>
                </>
            ),
           
            src: weather,
            demo: 'https://anusha-patel.github.io/weatherapp_1/',
            code: 'https://github.com/anusha-patel/weatherapp_1',

        },
        {
            id: 5,
            src: calorieCheck,
            title: 'calorie-check',
            Tags: (
                <>
                    <li>HTML</li>
                    <li>Tailwind css</li>
                    <li>JS</li>
                    <li>REACT</li>
                    <li>Edamam API</li>
                    
                </>
            ),
            demo: 'https://anusha-patel.github.io/calorie-check/',
            code: 'https://github.com/anusha-patel/calorie-check',
        },
        {
            id: 6,
            title: 'Travel website',
            Tags: (
                <>
                    <li>HTML</li>
                    <li>Tailwind css</li>
                    <li>JS</li>
                    
                    
                </>
            ),
           
            src: project2,
            demo: 'https://anusha-patel.github.io/travel/',
            code: 'https://github.com/anusha-patel/travel',

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
                        {portfolio.map(({ id, src, title, demo, code, Tags }) => (
                            <div className="card shadow-md shadow-gray-600" key={id}>
                                <div className='card-body'>
                                    <div className="title">
                                        <h1>{title}</h1>
                                        <h2 className='ml-3 p-3'>Languages & Tools</h2>
                                       
                                        <div className=' w-90 ml-5 text-cyan-50 mb-7'> {Tags}</div>



                                    </div>

                                    <div className="btns relative bottom-0">
                                        <a href={demo} target="_blank" rel="noreferrer noopener"> <button className='demo link-btn duration-200'>demo</button> </a>
                                        <a href={code} target="_blank" rel="noreferrer noopener"> <button className='code link-btn duration-200'>code</button> </a>
                                    </div>
                                </div>
                                <div className="image w-[80%] h-[80%] mt-8 border-gray-500 border-8 rounded-md ">
                                    <img className='object-cover' width={width} height={height} src={src} alt="" srcset="" />
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