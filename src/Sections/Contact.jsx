import React from 'react'
import Header from '../components/Header'
import FindWithMe from '../components/FindWithMe'
import Swal from 'sweetalert2'
import { LuPhoneCall } from 'react-icons/lu'
import { HiOutlineMail} from 'react-icons/hi'

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    const contactData = {
      name: data.name,
      email: data.email,
      number: data.number,
      subject: data.subject,
      message: data.message
    }

    const res = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData)
    });

    const response = await res.json();
    if (response.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Email sent successfully!",
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    }
    e.target.reset();
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div>
        <Header title="Contact" subTitle="Contact With Me" />
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* Left Side: Info Card */}
        <div className="w-full lg:w-5/12 p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.7)]">
          <img
            src="https://i.ibb.co.com/TM2bqH2G/contact1.png"
            alt="contact-Img"
            className="rounded-lg w-full md:h-60"
          />
          <div className="mt-8">
            <div className='space-y-1'>
              <h3 className="md:text-2xl text-xl text-gray-300 font-bold">Robiul Islam Sumon</h3>
              <p className='text-gray-300'>Frontend Developer</p>
            </div>
            <div className="text-base sm:text-lg text-gray-400">
              <p className='my-3'>
                I am available for freelance work. Connect with me via and call in to my account.
              </p>
              <div className="space-y-2 my-3">
                <p className='flex gap-x-2 items-center'>
                <LuPhoneCall className='text-2xl'/>
                  <span className="text-gray-300 hover:text-pinkRed hover:font-medium transition duration-150">
                    +8801770070249
                  </span>
                </p>
                <p className='flex gap-x-2 items-center'>
                <HiOutlineMail className='text-2xl'/>
                  <span className="text-gray-300 hover:text-pinkRed hover:font-medium transition duration-150">
                    codecraft.robiul@gmail.com
                  </span>
                </p>
              </div>
              <div className='pt-2'>
                <FindWithMe />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:flex-1">
          <form onSubmit={handleSubmit} className="text-white rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.7)] p-6 sm:p-8 w-full space-y-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div>
                <label className="block text-sm mb-2 uppercase">Your Name</label>
                <input
                  name='name'
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-[#191B1E] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-gray-900 border-b-[#323437] border-b-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 uppercase">Phone Number</label>
                <input
                  name='number'
                  type="text"
                  placeholder="Enter your number"
                  className="w-full bg-[#191B1E] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-gray-900 border-b-[#323437] border-b-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 uppercase">Email</label>
              <input
                name='email'
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#191B1E] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-gray-900 border-b-[#323437] border-b-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 uppercase">Subject</label>
              <input
                name='subject'
                type="text"
                placeholder="Enter subject"
                className="w-full bg-[#191B1E] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-gray-900 border-b-[#323437] border-b-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 uppercase">Your Message</label>
              <textarea
                name='message'
                rows="6"
                placeholder="Type your message here..."
                className="w-full bg-[#191B1E] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-gray-900 border-b-[#323437] border-b-2"
              ></textarea>
            </div>

            <div>
              <button type='submit' className="bg-primaryColor uppercase btn border-none hover:bg-gray-900 hover:shadow-none hover:translate-y-1 duration-300 py-4 w-full text-primaryRed rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
                Send Message →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact