import React from 'react'
import { useInView } from 'react-intersection-observer';

const Header = ({ title, subTitle }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`${inView ? 'animate__animated animate__flipInX' : ''} w-full max-w-screen-lg px-2 md:px-8 mx-auto mt-16 sm:mt-20 md:mt-24`}>
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-sm sm:text-base text-pinkRed font-medium mb-3 uppercase">{title}</h2>
        <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-300">{subTitle}</p>
      </div>
    </div>
  )
}

export default Header
