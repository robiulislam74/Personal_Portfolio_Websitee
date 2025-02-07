import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayOut = () => {
  return (
    <>
        {/* Navbar Section*/}
       <div className='bg-primaryColor'>
       <Navbar/>
       </div>
       {/* Layout outlet */}
       <div className='min-h-[calc(100vh-344px)]'>
        <Outlet/>
       </div>
       {/* Footer Section */}
       <div>
        <Footer/>
       </div>
    </>
  )
}

export default MainLayOut