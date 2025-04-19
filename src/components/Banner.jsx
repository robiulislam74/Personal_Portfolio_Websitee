import BestSkillsOn from "./BestSkillsOn"
import FindWithMe from "./FindWithMe"

const Banner = () => {
    return (
        <>
            {/* <div className="min-h-screen max-w-screen-lg mx-auto flex items-center justify-between">
            <div className='w-8/12 pr-16 space-y-5 pt-14'>
                <p className='text-gray-400 font-semibold text-base tracking-widest uppercase'>Welcome to my world</p>
                <h2 className='font-extrabold text-6xl text-gray-300 leading-normal'>Hi, I’m Robiul Islam
                    a <span className='text-[#FF014F]'> Web Developer.</span></h2>
                <p className='text-lg text-gray-400 font-medium leading-relaxed'>I love building interactive, responsive, and user-friendly web applications. I'm always learning and exploring new technologies to enhance my development skills.</p>
                <div className="flex justify-between items-center">
                <FindWithMe/>
                <BestSkillsOn/>
                </div>
            </div>
            <div className='flex-1 flex justify-end float-end'>
                <div className="h-[390px] w-[375px] relative  flex justify-center items-center rounded-lg shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
                    <img className="absolute bottom-0" src="https://i.ibb.co.com/B5RrN74F/Fronend-Developer1-removebg-preview-1.png" alt="" />
                </div>
            </div>
        </div> */}
            <div className="min-h-screen max-w-screen-xl mx-auto px-4 md:px-8  md:flex items-center justify-between gap-10 md:gap-0">
                {/* Text Section */}
                <div className="w-full md:w-7/12 space-y-5 pt-10 md:pt-14 text-center md:text-left">
                    <p className="text-gray-400 font-semibold text-sm md:text-base tracking-widest uppercase">
                        Welcome to my world
                    </p>
                    <h2 className="font-extrabold text-4xl sm:text-5xl md:text-4xl lg:text-6xl text-gray-300 leading">
                        Hi, I’m Robiul Islam
                        <br />
                        a <span className="text-[#FF014F]">Web Developer.</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed">
                        I love building interactive, responsive, and user-friendly web applications. I'm always learning and exploring new technologies to enhance my development skills.
                    </p>

                    <div className="flex flex-col py-12 sm:flex-row justify-center md:justify-between items-center gap-5">
                        <FindWithMe />
                        <BestSkillsOn />
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                    <div className="h-[300px] sm:h-[350px] md:h-[390px] w-[260px] sm:w-[300px] md:w-[375px] relative flex justify-center items-center rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.7)]">
                        <img
                            className="absolute bottom-0 max-h-full object-contain"
                            src="https://i.ibb.co.com/B5RrN74F/Fronend-Developer1-removebg-preview-1.png"
                            alt="Frontend Developer"
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Banner