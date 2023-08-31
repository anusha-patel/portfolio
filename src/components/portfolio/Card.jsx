import React from 'react';
import './card.css'
import project1 from '../../assets/food image.png';
import project2 from '../../assets/project2.avif';
import project3 from '../../assets/blog.png';
import project5 from '../../assets/snake game screenshot.png';
import project6 from '../../assets/education site image.png';
import project7 from '../../assets/project7.png'
import project8 from '../../assets/project8.png'
import project9 from '../../assets/project9.png';
import weather from '../../assets/weather_app.png'



const Card = () => {
    const width ='60%';
    const height = '60%';


    const portfolio = [
        {
            id: 1,
            title: 'Resturant website',
            src: project1,
            lan_1: 'HTML',
            lan_2: 'CSS',
            lan_3: 'Javascript',
            demo: 'https://anusha-patel.github.io/food/',
            code: 'https://github.com/anusha-patel/food'

        },
        {
            id: 2,
            title: 'real estate',
            lan_1: 'HTML',
            lan_2: 'CSS',
            lan_3: 'Javascript',
            lan_4: 'React js',
            lan_5:'Next js',
            src: project9,
            demo: 'https://real-estate-pink-nine.vercel.app/',
            code: 'https://github.com/anusha-patel/real-estate',

        },
        {
            id: 3,
            title: 'weather app',
            lan_1: 'HTML',
            lan_2: 'CSS',
            lan_3: 'Javascript',
            lan_4: 'react',
            lan_5: 'tailwind, open Api & unsplash Api',
            src: weather,
            demo: 'https://anusha-patel.github.io/weatherapp_1/',
            code: 'https://github.com/anusha-patel/weatherapp_1',

        },
        {
            id: 4,
            title: 'Travel website',
            lan_1: 'HTML',
            lan_2: 'CSS',
            lan_3: 'Javascript',
            src: project2,
            demo: 'https://anusha-patel.github.io/travel/',
            code: 'https://github.com/anusha-patel/travel',

        },
        

        {
            id: 5,
            src: project5,
            title: 'snake Game',
            lan_1: 'HTML',
            lan_2: 'CSS',
            lan_3: 'Javascript',
            demo: 'https://anusha-patel.github.io/snakeGame/',
            code: 'https://github.com/anusha-patel/snakeGame',
        },
        {
            id: 6,
            src: project6,
            title: 'education website',
            lan_1: 'HTML',
            lan_2: 'CSS',
            lan_3: 'Javascript',
            demo: 'https://anusha-patel.github.io/trade/',
            code: 'https://github.com/anusha-patel/trade',
        },
        {
            id: 7,
            src: project7,
            title: 'google-keep-clone',
            lan_1: 'HTML',
            lan_2: 'CSS',
            lan_3: 'Javascript',
            demo: "https://anusha-patel.github.io/google-keep-clone/",
            code: "https://github.com/anusha-patel/google-keep-clone",
        },
        {
            id: 8,
            src: project8,
            title: 'varal UAE',
            lan_1: 'HTML',
            lan_2: 'CSS',
            lan_3: 'Javascript',
            demo: "https://anusha-patel.github.io/varal/",
            code: "https://github.com/anusha-patel/varal",
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
                        {portfolio.map(({ id, src, title, demo, code, lan_1, lan_2, lan_3, lan_4, lan_5 }) => (
                            <div className="card shadow-md shadow-gray-600" key={id}>
                                <div className='card-body'>
                                    <div className="title">
                                        <h1>{title}</h1>
                                        <h2 className='ml-3 p-3'>Languages & Tools</h2>
                                        <ul className=' w-90 ml-10 text-cyan-50 mb-7 ' >
                                            <li>{lan_1}</li>
                                            <li>{lan_2}</li>
                                            <li>{lan_3}</li>
                                            <li>{lan_4}</li>
                                            <li>{lan_5}</li>

                                        </ul>



                                    </div>

                                    <div className="btns">
                                        <a href={demo} target="_blank" rel="noreferrer noopener"> <button className='demo link-btn duration-200'>demo</button> </a>
                                        <a href={code} target="_blank" rel="noreferrer noopener"> <button className='code link-btn duration-200'>code</button> </a>
                                    </div>
                                </div>
                                <div className="image w-[80%] h-[80%] mt-8 border-gray-500 border-8 rounded-md">
                                    <img className='' width={width} height={height} src={src} alt="" srcset="" />
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