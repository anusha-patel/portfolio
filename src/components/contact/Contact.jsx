import React from 'react'

const Contact = () => {
  return (
    <div name='contact' id='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact</p>
                <p className='py-8'>contact me by Email</p>
            </div>

            <div>
                <p className='text-xl'>If you have any questions, feel free to contact me  <a className='text-2xl text-blue-500' href="mailto:anushapatel510@gmail.com"> anushapatel510@gmail.com</a></p> 
            </div>

            {/* <div className='flex justify-center items-center'>
                <form action="" className='flex flex-col w-full md:w-1/2 '>
                    <input type="text" name="name"  placeholder=' enter your name' id="" className='py-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="text" name="email" placeholder=' enter your email' id="" className='py-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name="message" id="" rows="10" placeholder='enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div> */}
        </div>
    </div>
  )
}

export default Contact