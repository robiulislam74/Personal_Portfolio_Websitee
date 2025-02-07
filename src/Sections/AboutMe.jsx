import React from 'react'

const AboutMe = () => {
  return (
    <section className=" text-white py-12 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-pinkRed mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Hi there! I'm <span className="font-semibold text-white">Robiul Islam</span>, a passionate web developer with a strong background in **React, JavaScript, and Tailwind CSS**.  
            My journey started when I wrote my first "Hello World" in HTML and instantly fell in love with coding.
          </p>
          <p className="mt-4 text-gray-400">
            I specialize in building **modern, responsive, and user-friendly web applications**. I love solving complex problems and creating intuitive designs that enhance user experience.
          </p>

          {/* Hobbies & Interests */}
          <p className="mt-4 text-gray-300">
            When I’m not coding, you can find me **playing guitar 🎸, painting 🎨, or exploring new places 🌍**.  
            I believe that creativity fuels my programming skills, and I always seek **innovation & inspiration** in everything I do.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="https://t.me/robiul_islam74" target='_blank' className="px-6 py-3 bg-pinkRed text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300">
              Contact Me
            </a>
            <a href="/Robiul_Islam.pdf" download className="px-6 py-3 border border-primaryRed text-primaryRed font-semibold rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
              Download Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co.com/RT5XZvpj/About-Me-Photo.png"
            alt="Profile"
            className="w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-[0_3px_10px_rgb(200,200,200,0.1)]"
          />
        </div>

      </div>
    </section>

  )
}

export default AboutMe