import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayOut = () => {
   const [showNavbar, setShowNavbar] = useState(false)
  
      useEffect(() => {
          const handScroll = () => {
              const scrollY = window.scrollY
              if (scrollY > 100) {
                  setShowNavbar(true)
              } else {
                  setShowNavbar(false)
              }
          }
          window.addEventListener('scroll', handScroll)
  
          return () => {
              window.removeEventListener('scroll', handScroll)
          }
      }, [])

  return (
    <>
        {/* Navbar Section*/}
       <div className={`sticky top-0 z-50 ${showNavbar?'bg-[#1A1D21]/95':""}`}>
       <Navbar/>
       </div>
       {/* Layout outlet */}
       <div className='min-h-[calc(100vh-360px)] max-w-screen-xl mx-auto'>
        <Outlet/>
       </div>
       {/* Footer Section */}
       <div className='mt-24'>
        <Footer/>
       </div>
    </>
  )
}

export default MainLayOut