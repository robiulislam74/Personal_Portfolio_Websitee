import BestSkillsOn from "./BestSkillsOn"
import FindWithMe from "./FindWithMe"

const Banner = () => {
    return (
        <>
        <div className="min-h-screen max-w-screen-lg mx-auto flex items-center justify-between">
            <div className='w-8/12 pr-16 space-y-5 pt-14'>
                <p className='text-gray-400 font-semibold text-base tracking-widest uppercase'>Welcome to my world</p>
                <h2 className='font-extrabold text-6xl text-gray-300 leading-normal'>Hi, I’m <span className='text-[#FF014F]'>Robiul Islam </span>
                    a Web Developer.</h2>
                <p className='text-lg text-gray-400 font-medium leading-relaxed'>I love building interactive, responsive, and user-friendly web applications. I'm always learning and exploring new technologies to enhance my development skills.</p>
                <div className="flex justify-between items-center">
                <FindWithMe/>
                <BestSkillsOn/>
                </div>
            </div>
            <div className='flex-1 flex justify-end float-end'>
                <div className="h-[390px] w-[375px] rounded-lg shadow-[0_3px_10px_rgb(200,200,200,0.1)]">
                    <img className="h-full w-full" src="https://i.ibb.co.com/q3h19Kkg/Fronend-Developer1-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner