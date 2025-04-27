
const AboutMe = () => {
  return (
    // <section name='about' className=" text-white py-12 max-w-screen-xl px-4 md:px-8">
    //   <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-14">
    //     {/* Image Section */}
    //     <div className="flex w-4/12 justify-center p-8 rounded-lg shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
    //       <img
    //         src="https://i.ibb.co.com/4gjy5wV7/Robiul-2.jpg"
    //         alt="Profile"
    //         className=" object-cover bg-cover rounded-lg"
    //       />
    //     </div>
    //     {/* w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-[425px]  */}
    //     {/* Text Section */}
    //     <div className="w-full lg:w-8/12 text-center lg:text-left">
    //     <p className='text-pinkRed text-sm font-medium uppercase'>Visit my portfolio & Hire me</p>
    //       <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-300 my-4">
    //         About Me
    //       </h2>
    //       <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
    //         Hi there! I'm <span className="font-semibold text-white">Robiul Islam</span>, a passionate web developer with a strong background in **React, JavaScript, and Tailwind CSS**.  
    //         My journey started when I wrote my first "Hello World" in HTML and instantly fell in love with coding.
    //       </p>
    //       <p className="mt-4 text-gray-400">
    //       </p>

    //       {/* Hobbies & Interests */}
    //       <p className="mt-4 text-gray-300">
    //       When I’m not coding, you can find me playing Cricket 🏏, attending the Mosque for Salah 🕌, or exploring new places 🌍.
    //       I believe that creativity fuels my programming skills, and I always seek innovation & inspiration in everything I do.
    //       </p>

    //       {/* Call to Action Buttons */}
    //       <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
    //         {/* <a href="/Robiul_Islam.pdf" download className="px-6 py-3 border border-primaryRed text-primaryRed font-semibold rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
    //           Download Resume
    //         </a> */}
    //         <a href='/Robiul_Islam.pdf' download className="bg-primaryColor uppercase btn border-none hover:bg-gray-900 hover:shadow-none hover:translate-y-1 duration-300 py-4 px-6 text-primaryRed rounded-lg shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
    //             <button className='uppercase'>Resume Download</button>
    //             </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section name='about' className="text-white py-12 max-w-screen-xl px-4 md:px-8">
  <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-14">
    {/* Image Section */}
    <div className="flex w-full sm:w-72 md:w-80 lg:w-4/12 justify-center p-8 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.7)]">
      <img
        src="https://i.ibb.co.com/4gjy5wV7/Robiul-2.jpg"
        alt="Profile"
        className="object-cover bg-cover rounded-lg w-full h-full"
      />
    </div>
    {/* Text Section */}
    <div className="w-full lg:w-8/12 text-center lg:text-left">
      <p className="text-pinkRed text-sm font-medium uppercase">Visit my portfolio & Hire me</p>
      <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-300 my-4">
        About Me
      </h2>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
        Hi there! I'm <span className="font-semibold text-white">Robiul Islam</span>, a passionate web developer with a strong background in **React, JavaScript, and Tailwind CSS**.  
        My journey started when I wrote my first "Hello World" in HTML and instantly fell in love with coding.
      </p>

      {/* Hobbies & Interests */}
      <p className="mt-4 text-gray-300">
        When I’m not coding, you can find me playing Cricket 🏏, attending the Mosque for Salah 🕌, or exploring new places 🌍. I believe that creativity fuels my programming skills, and I always seek innovation & inspiration in everything I do.
      </p>

      {/* Call to Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
        <a
          href='/Robiul_Islam.pdf'
          download
          className="bg-primaryColor uppercase btn border-none hover:bg-gray-900 hover:shadow-none hover:translate-y-1 duration-300 py-4 px-6 text-primaryRed rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.7)]"
        >
          <button className='uppercase'>Resume Download</button>
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default AboutMe