import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'

const BestSkillsOn = () => {
  return (
    <div className='py-24'>
                <h4 className='uppercase text-gray-300 mb-6'>best skill on</h4>
                <div className='flex gap-4 items-center'>
                    <div className='p-6 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.4)] inline-block rounded-lg'>
                        <FaReact className='text-[#087EA4] text-2xl' />
                    </div>
                    <div className='p-6 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.4)] inline-block rounded-lg'>
                        <FaNodeJs className='text-[#4F9B43] text-2xl' />
                    </div>
                    <div className='p-6 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.4)] inline-block rounded-lg'>
                        <RiTailwindCssFill className='text-[#00BCFF] text-2xl' />
                    </div>
                </div>
            </div>
  )
}

export default BestSkillsOn