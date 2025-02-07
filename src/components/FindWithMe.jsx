import React from 'react'
import { FiFacebook } from 'react-icons/fi'
import { LuLinkedin } from 'react-icons/lu'
import { PiTelegramLogo } from 'react-icons/pi'

const FindWithMe = () => {
    return (
        <div className='py-24'>
            <h4 className='uppercase text-gray-300 mb-6'>find with me</h4>
            <div className='flex gap-4 items-center'>
                <div className='p-6 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.4)] inline-block rounded-lg'>
                    <FiFacebook className='text-gray-300 text-2xl' />
                </div>
                <div className='p-6 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.4)] inline-block rounded-lg'>
                    <PiTelegramLogo className='text-gray-300 text-2xl' />
                </div>
                <div className='p-6 hover:-mt-2 hover:bg-gray-900 hover:shadow-none duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.4)] inline-block rounded-lg'>
                    <LuLinkedin className='text-gray-300 text-2xl' />
                </div>
            </div>
        </div>
    )
}

export default FindWithMe