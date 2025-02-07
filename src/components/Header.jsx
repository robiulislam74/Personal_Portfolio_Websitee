import React from 'react'

const Header = ({title,subTitle}) => {
  return (
    <div className='mx-auto w-8/12 mt-24'>
      <div className='text-center mb-12'>
        <h2 className='text-base text-pinkRed font-medium mb-4 uppercase'>{title}</h2>
        <p className='text-gray-300 font-extrabold text-6xl'>{subTitle}</p>
      </div>
    </div>
  )
}

export default Header