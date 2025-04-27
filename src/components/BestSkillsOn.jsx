import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'

const BestSkillsOn = () => {
    return (
        // <div className='py-24'>
        //     <h4 className='uppercase text-gray-300 mb-6'>best skill on</h4>
        //     <div className='flex gap-4 items-center'>
        //         <div className='p-5 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)] inline-block rounded-lg'>
        //             <FaReact className='text-[#087EA4] text-2xl' />
        //         </div>
        //         <div className='p-5 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)] inline-block rounded-lg'>
        //             <FaNodeJs className='text-[#4F9B43] text-2xl' />
        //         </div>
        //         <div className='p-5 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]  inline-block rounded-lg'>
        //             {/* shadow-[0_3px_10px_rgb(0,0,0,0.4)] */}
        //             <RiTailwindCssFill className='text-[#00BCFF] text-2xl' />
        //         </div>
        //     </div>
        // </div>
        <div className="">
            <h4 className="uppercase text-gray-300 text-center md:text-left mb-3 font-semibold md:text-base text-sm">
                best skill on
            </h4>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {/* React */}
                <div className="p-4 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.7)] inline-block rounded-lg">
                    <FaReact className="text-[#087EA4] text-2xl sm:text-3xl" />
                </div>

                {/* Node.js */}
                <div className="p-4 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.7)] inline-block rounded-lg">
                    <FaNodeJs className="text-[#4F9B43] text-2xl sm:text-3xl" />
                </div>

                {/* Tailwind CSS */}
                <div className="p-4 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.7)] inline-block rounded-lg">
                    <RiTailwindCssFill className="text-[#00BCFF] text-2xl sm:text-3xl" />
                </div>
            </div>
        </div>

    )
}

export default BestSkillsOn