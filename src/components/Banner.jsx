import { TypeAnimation } from "react-type-animation";
import BestSkillsOn from "./BestSkillsOn";
import FindWithMe from "./FindWithMe";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto pt-8 lg:pt-0 flex flex-col md:flex-row-reverse items-center justify-between gap-10 px-4 md:px-8">
      {/* Image Section */}
      <div
        ref={ref}
        className={`transition-all duration-700 ease-in-out transform ${
          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        } w-full md:w-5/12 flex justify-center md:justify-end mb-8 md:mb-0`}
      >
        <div className="h-[300px] sm:h-[350px] md:h-[390px] w-[260px] sm:w-[300px] md:w-[375px] relative flex justify-center items-center rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.7)]">
          <img
            className="absolute bottom-0 object-contain"
            src="https://i.ibb.co.com/B5RrN74F/Fronend-Developer1-removebg-preview-1.png"
            alt="Frontend Developer"
          />
        </div>
      </div>

      {/* Text Section */}
      <div
        className={`transition-all duration-700 ease-in-out transform ${
          inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        } w-full md:w-7/12 space-y-5 text-center md:text-left`}
      >
        <p className="text-gray-400 font-semibold text-sm md:text-base tracking-widest uppercase">
          Welcome to my world
        </p>

        <p
          style={{ lineHeight: "normal" }}
          className="font-extrabold text-2xl md:text-3xl lg:text-5xl text-gray-300"
        >
          Hi, I’m Robiul Islam <br />
          a{" "}
          <span className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#FF014F]">
            <TypeAnimation
              sequence={[
                "Web Developer.",
                1000,
                "Frontend Developer.",
                1000,
                "MERN Developer.",
                1000,
              ]}
              deletionSpeed={75}
              repeat={Infinity}
            />
          </span>
        </p>

        <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed">
          I love building interactive, responsive, and user-friendly web
          applications. I'm always learning and exploring new technologies to
          enhance my development skills.
        </p>

        <div
          className={`transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          } flex flex-col py-12 lg:flex-row justify-center md:justify-between items-center gap-5`}
        >
          <FindWithMe />
          <BestSkillsOn />
        </div>
      </div>
    </div>
  );
};

export default Banner;
