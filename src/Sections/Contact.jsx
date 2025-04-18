import React from 'react'
import Header from '../components/Header'
import FindWithMe from '../components/FindWithMe'

const Contact = () => {
  return (
    <div className='max-w-screen-lg mx-auto'>
        <div>
        <Header
         title={"Contact"}
         subTitle={"Contact With Me"}
        />
    </div>
    <div className='w-full flex gap-8'>
        <div className='h-full w-5/12 p-6 rounded-lg shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]'>
        <img src="https://i.ibb.co.com/TM2bqH2G/contact1.png" alt="contact-Img" 
        className='rounded-lg'
        />
        <div className='space-y-3 mt-8'>
            <h3 className='text-3xl text-gray-300 font-bold '>Robiul Islam Sumon</h3>
           <div className='text-lg text-gray-400 space-y-4'>
           <p>Frontend Developer</p>
            <p>I am available for freelance work. Connect with me via and call in to my account.
            </p>
           <div>
           <p>Phone:  <span className='text-gray-300 hover:text-pinkRed hover:font-medium transition duration-150'>+8801770070249</span></p>
           <p>Email:  <span className='text-gray-300 hover:text-pinkRed hover:font-medium transition duration-150'>codecraft.robiul@gmail.com</span></p>
           </div>
           <div>
            <FindWithMe/>
           </div>
           </div>
        </div>
        </div>
        {/* input filed */}
        <div>
        <div className=" text-white rounded-lg shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)] p-8 w-full space-y-6">
        <div className="grid md:grid-cols-2 gap-6 w-full">
          <div>
            <label className="block text-sm mb-1 uppercase">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-[#191B1E]  rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-gray-900 border-b-[#323437] border-b-2"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 uppercase">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your number"
             className="w-full bg-[#191B1E]  rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-gray-900 border-b-[#323437] border-b-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1 uppercase">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
           className="w-full bg-[#191B1E]  rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-gray-900 border-b-[#323437] border-b-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 uppercase">Subject</label>
          <input
            type="text"
            placeholder="Enter subject"
            className="w-full bg-[#191B1E]  rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-gray-900 border-b-[#323437] border-b-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 uppercase">Your Message</label>
          <textarea
            rows="6"
            placeholder="Type your message here..."
           className="w-full bg-[#191B1E]  rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-gray-900 border-b-[#323437] border-b-2"
          ></textarea>
        </div>

        <div>
          <button className="bg-primaryColor uppercase btn border-none hover:bg-gray-900 hover:shadow-none hover:translate-y-1 duration-300 py-4 w-full text-primaryRed rounded-lg shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.6)]">
            Send Message →
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Contact