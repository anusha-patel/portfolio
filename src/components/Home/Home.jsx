import React from 'react'
import hero from "../../assets/bg-image.avif";
import CV from '../../assets/resume.pdf'
// import './home.css'

import { AiFillCaretRight } from "react-icons/ai"

const Home = () => {
    return (
        <div name="home" id='home' className='home-container h-screen flex justify-between mr-0'>
            <div className='flex-container flex w-4/5 mx-auto px-4 py-4 justify-between bg-slate-200'>
                <div className='home-left w-full items-center mx-auto my-auto text-center md:w-1/2' >
                    <h2 className=' text-2xl my-2 '>
                       Hi, iam <span className=' text-red-800 font-bold'> Anusha </span><br /> Front-end developer.

                    </h2>
                    <p className='text-xl my-2'>i like to <span  className=' text-red-800 font-bold'>ShowCase</span>  my projects </p>
                    <div className='flex justify-center'>
                        <button className='btn group bg-gray-700 flex justify-center items-center font-bold text-white rounded-md px-2 py-2'>
                           <a href='#portfolio'> portfolio  </a> 
                            <span className='group-hover:rotate-90 duration-300 '>
                                <AiFillCaretRight size={20} className="ml-2" />
                            </span>
                          

                        </button>
                    </div>
                </div>
                <div className='home-right display-none md:display-block my-auto w-1/2 '>
                        <img className='image w-1/2 mx-auto ' src={hero} alt="my profile"  srcset="" />
                </div>

            </div>
        </div>
    )
}

export default Home