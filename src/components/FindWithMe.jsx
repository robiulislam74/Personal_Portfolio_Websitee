import React from 'react'
import { FiFacebook } from 'react-icons/fi'
import { LuLinkedin } from 'react-icons/lu'
import { PiTelegramLogo } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'

const FindWithMe = () => {
    return (
        <div>
            <h4 className='uppercase text-gray-300 mb-5'>find with me</h4>
            <div className='flex gap-4 items-center'>
                <NavLink to={'https://www.facebook.com/robiul.islam.sumon.307889'} target='_blank'>
                    <div className='p-5 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 rounded-lg shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)] inline-block'>
                    <FiFacebook className='text-gray-300 text-2xl' />
                </div>
                </NavLink>
                <NavLink to={'https://t.me/robiul_islam74'} target='_blank'>
                <div className='p-5 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)] inline-block rounded-lg'>
                    <PiTelegramLogo className='text-gray-300 text-2xl' />
                </div>
                </NavLink>
                <NavLink to={'https://www.linkedin.com/in/robiul-islam-sumon'} target='_blank'>
                <div className='p-5 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)] inline-block rounded-lg'>
                    <LuLinkedin className='text-gray-300 text-2xl' />
                </div>
                </NavLink>
            </div>
        </div>
    )
}

export default FindWithMe