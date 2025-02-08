import { FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa'
import Header from '../components/Header'
import { RiTailwindCssFill } from 'react-icons/ri'
import mongoDB from '../assets/images/mongoDB.png'
import express from '../assets/images/express.png'
import firebase from '../assets/images/firebase.png'
import bootstrap from '../assets/images/bootstrap.png'
import figma from '../assets/images/figma.png'


const Skills = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <Header
                title={'Visit my skill & Hire me'}
                subTitle={'My Skill'}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='text-[#00D8FF] group hover:bg-[#1A1D21] ease-in duration-200 py-10 px-16 rounded-xl shadow-[0_3px_10px_rgb(200,200,200,0.1)]'>
                    <div className='flex items-center gap-2 transition-transform ease-in duration-200 group-hover:scale-110'>
                        <FaReact className='text-5xl' />
                        <span className='text-3xl'>React</span>
                    </div>
                </div>
                <div className='text-[#00E462] group hover:bg-[#1A1D21] ease-in duration-200 p-10 rounded-xl shadow-[0_3px_10px_rgb(200,200,200,0.1)]'>
                    {/* <TbBrandMongodb className='text-5xl'/> */}
                    <div className='flex items-center gap-2 transition-transform ease-in duration-200 group-hover:scale-110'>
                        <img src={mongoDB} alt="mongoDB" />
                        <span className='text-3xl'>MongoDB</span>
                    </div>
                </div>
                <div className='text-[#00BCFF] group hover:bg-[#1A1D21] ease-in duration-200 py-10 px-16 rounded-xl shadow-[0_3px_10px_rgb(200,200,200,0.1)]'>
                    <div className='flex items-center gap-2 transition-transform ease-in duration-200 group-hover:scale-110'>
                        <RiTailwindCssFill className='text-5xl' />
                        <span className='text-3xl'>Tailwind</span>
                    </div>
                </div>
                <div className='text-[#4F9B43] group hover:bg-[#1A1D21] ease-in duration-200 py-10 px-16 rounded-xl shadow-[0_3px_10px_rgb(200,200,200,0.1)]'>
                    <div className='flex items-center gap-2 transition-transform ease-in duration-200 group-hover:scale-110'>
                        <FaNodeJs className='text-5xl' />
                        <span className='text-3xl'>NodeJS</span>
                    </div>
                </div>

                <div className='flex items-center group hover:bg-[#1A1D21] ease-in duration-200 gap-2 px-10 py-8 rounded-lg shadow-[0_3px_10px_rgb(200,200,200,0.1)]'>
                    {/* <SiExpress className='text-5xl'/> */}
                    <div className='flex items-center gap-2 transition-transform ease-in duration-200 group-hover:scale-110'>
                        <img src={express} alt="express" />
                        <span className='text-3xl text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-fuchsia-500'>ExpressJS</span>
                    </div>
                </div>
                <div className='text-[#FFA000] flex items-center group hover:bg-[#1A1D21] ease-in duration-200 gap-2 px-10 py-8 rounded-lg shadow-[0_3px_10px_rgb(200,200,200,0.1)]'>
                    <div className='flex items-center gap-2 transition-transform ease-in duration-200 group-hover:scale-110'>
                    <img src={firebase} alt="firebase" />
                    <span className='text-3xl'>Firebase</span>
                    </div>
                </div>
                <div className='text-[#860ff5] flex items-center group hover:bg-[#1A1D21] ease-in duration-200 gap-2 px-10 py-8 rounded-lg shadow-[0_3px_10px_rgb(200,200,200,0.1)]'>
                    <div className='flex items-center gap-2 transition-transform ease-in duration-200 group-hover:scale-110'>
                    <img src={bootstrap} alt="bootstrap" />
                    <span className='text-3xl'>Bootstrap</span>
                    </div>
                </div>
                <div className='flex items-center group hover:bg-[#1A1D21] ease-in duration-200 gap-2 px-10 py-8 rounded-lg shadow-[0_3px_10px_rgb(200,200,200,0.1)]'>
                    <div className='flex items-center gap-2 transition-transform ease-in duration-200 group-hover:scale-110'>
                    <img src={figma} alt="figma" />
                    <span className='text-3xl text-transparent bg-clip-text bg-gradient-to-t from-orange-500 to-blue-400'>Figma</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills