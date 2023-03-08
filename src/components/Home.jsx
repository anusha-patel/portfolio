import React from 'react'
import hero from "../assets/bg-image.avif";
import './home.css'

import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
    return (
        <div name="home" className='home-container'>
            <div className='flex-container'>
                <div className='home-left' >
                    <h2>
                        I'm a full stack developer

                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus? Vero voluptas molestias libero eveniet!</p>
                    <div>
                        <button className='btn group'>
                            portfolio  
                            <span className='group-hover:rotate-90 duration-300 '>
                                <HiArrowNarrowRight size={20} className="ml-2" />
                            </span>
                          

                        </button>
                    </div>
                </div>
                <div className='home-right'>
                        <img className='image' src={hero} alt="my profile"  srcset="" />
                </div>

            </div>
        </div>
    )
}

export default Home