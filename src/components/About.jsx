import React from 'react'

const About = () => {
    return (
        <div name='about' id='about' className='w-full h-screen
     bg-gradient-to-b from-gray-800 to-black
      text-white
      '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>


                <p className='text-xl mt-20 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem fugit porro odit quaerat omnis temporibus incidunt libero ipsam quasi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis eaque commodi similique asperiores ex, vel dignissimos! Ut, quam aliquam esse nostrum debitis, magni expedita minus nesciunt, sed officiis dolore.</p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit accusantium vitae voluptas et sit nulla quis harum blanditiis! Repellat deleniti quod officia ipsam modi sunt ex omnis unde eum? Praesentium.
                </p>
            </div>
        </div>
   
  )
}

export default About