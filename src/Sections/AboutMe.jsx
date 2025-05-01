import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section name="about" className="text-white py-12 max-w-screen-xl px-4 md:px-8 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-14">
        {/* Image Section */}
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          } flex w-full sm:w-72 md:w-80 lg:w-4/12 justify-center p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.7)]`}
        >
          <img
            src="https://i.ibb.co.com/4gjy5wV7/Robiul-2.jpg"
            alt="Profile"
            className="object-cover bg-cover rounded-lg w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div
          className={`transition-all duration-700 ease-out transform delay-150 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          } w-full lg:w-8/12 text-center lg:text-left`}
        >
          <p className="text-pinkRed text-sm font-medium uppercase">
            Visit my portfolio & Hire me
          </p>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-300 my-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Hi there! I'm <span className="font-semibold text-white">Robiul Islam</span>, a passionate web developer with a strong background in <strong>React, JavaScript, and Tailwind CSS</strong>. My journey started when I wrote my first "Hello World" in HTML and instantly fell in love with coding.
          </p>

          <p className="mt-4 text-gray-300">
            When I’m not coding, you can find me playing Cricket 🏏, attending the Mosque for Salah 🕌, or exploring new places 🌍. I believe that creativity fuels my programming skills, and I always seek innovation & inspiration in everything I do.
          </p>

          {/* Call to Action */}
          <div
            className={`transition-all duration-700 ease-out transform delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4`}
          >
            <a
              href="/Robiul_Islam.pdf"
              download
              className="bg-primaryColor uppercase btn border-none hover:bg-gray-900 hover:shadow-none hover:translate-y-1 duration-300 py-4 px-6 text-primaryRed rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.7)]"
            >
              <button className="uppercase">Resume Download</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
