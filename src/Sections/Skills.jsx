import { FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa'
import Header from '../components/Header'
import { RiTailwindCssFill } from 'react-icons/ri'
import mongoDB from '../assets/images/mongoDB.png'
import express from '../assets/images/express.png'
import firebase from '../assets/images/firebase.png'
import bootstrap from '../assets/images/bootstrap.png'
import figma from '../assets/images/figma.png'
import { Element } from 'react-scroll'


const Skills = () => {
    return (
        <Element name='skill'>
            <div className="max-w-screen-xl px-4 md:px-6 lg:px-8 mx-auto my-16">
            <Header title="Visit my skill & Hire me" subTitle="My Skills" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-10">
                {/* Skill Card */}
                <div className="text-[#00D8FF] group hover:bg-[#1A1D21] duration-300 p-4 md:p-6 lg:p-10 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
                    <div className="flex items-center gap-3 group-hover:scale-110 transition-transform duration-200">
                        <FaReact className="text-4xl" />
                        <span className="text-2xl">React</span>
                    </div>
                </div>

                <div className="text-[#00E462] group hover:bg-[#1A1D21] duration-300 p-4 md:p-6 lg:p-10 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
                    <div className="flex items-center gap-3 group-hover:scale-110 transition-transform duration-200">
                        <img src={mongoDB} alt="MongoDB" className="w-10 h-10" />
                        <span className="text-2xl">MongoDB</span>
                    </div>
                </div>

                <div className="text-[#00BCFF] group hover:bg-[#1A1D21] duration-300 p-4 md:p-6 lg:p-10 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
                    <div className="flex items-center gap-3 group-hover:scale-110 transition-transform duration-200">
                        <RiTailwindCssFill className="text-5xl" />
                        <span className="text-2xl">Tailwind</span>
                    </div>
                </div>

                <div className="text-[#4F9B43] group hover:bg-[#1A1D21] duration-300 p-4 md:p-6 lg:p-10 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
                    <div className="flex items-center gap-3 group-hover:scale-110 transition-transform duration-200">
                        <FaNodeJs className="text-4xl" />
                        <span className="text-2xl">NodeJS</span>
                    </div>
                </div>

                <div className="group hover:bg-[#1A1D21] duration-300 p-4 md:p-6 lg:p-10 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
                    <div className="flex items-center gap-3 group-hover:scale-110 transition-transform duration-200">
                        <img src={express} alt="ExpressJS" className="w-10 h-10" />
                        <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-fuchsia-500">ExpressJS</span>
                    </div>
                </div>

                <div className="text-[#FFA000] group hover:bg-[#1A1D21] duration-300 p-4 md:p-6 lg:p-10 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
                    <div className="flex items-center gap-3 group-hover:scale-110 transition-transform duration-200">
                        <img src={firebase} alt="Firebase" className="w-10 h-10" />
                        <span className="text-2xl">Firebase</span>
                    </div>
                </div>

                <div className="text-[#860ff5] group hover:bg-[#1A1D21] duration-300 p-4 md:p-6 lg:p-10 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
                    <div className="flex items-center gap-3 group-hover:scale-110 transition-transform duration-200">
                        <img src={bootstrap} alt="Bootstrap" className="w-10 h-10" />
                        <span className="text-2xl">Bootstrap</span>
                    </div>
                </div>

                <div className="group hover:bg-[#1A1D21] duration-300 p-4 md:p-6 lg:p-10 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
                    <div className="flex items-center gap-3 group-hover:scale-110 transition-transform duration-200">
                        <img src={figma} alt="Figma" className="w-10 h-10" />
                        <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-t from-orange-500 to-blue-400">Figma</span>
                    </div>
                </div>
            </div>
        </div>
        </Element>

    )
}

export default Skills