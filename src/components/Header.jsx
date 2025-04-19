import React from 'react'

const Header = ({ title, subTitle }) => {
  return (
    <div className="w-full max-w-screen-lg px-4 sm:px-6 md:px-8 mx-auto mt-16 sm:mt-20 md:mt-24">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-sm sm:text-base text-pinkRed font-medium mb-3 uppercase">{title}</h2>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-300">{subTitle}</p>
      </div>
    </div>
  )
}

export default Header
