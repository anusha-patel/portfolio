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


                <p className='text-xl mt-20 '>I'm anusha Front-end developer from india. I don't like to define myself by the work i want to do.Skills can be taught,personality is inherent. i prefer to keep learning, continue challenging myself, and do interesting things that matter.</p>

                <br />

                <p  className='text-xl'>
                    i have many hobbies,interests,i'm a fast learner, able to pick up new skills and juggle different projects and roles with relative ease. 
                </p>
                <br/>

                <p className='text-xl'>
                    i like to develop expertise in a number of areas over the course of my life and career.
                </p>
                <br/>

                <p className='text-xl'>
                   i'm a fresher but you can check my work. sometime experience is just a number.
                </p>
            </div>
        </div>
   
  )
}

export default About