import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

const MainLayOut = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);


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
            <Loader isVisible={loading} />
            {!loading &&
                <>
                    {/* Navbar Section*/}
                    <div className={`sticky top-0 z-50 ${showNavbar ? 'bg-[#1A1D21]/95' : ""}`}>
                        <Navbar />
                    </div>
                    {/* Layout outlet */}
                    <div className='min-h-[calc(100vh-360px)] max-w-screen-xl mx-auto'>
                        <Outlet />
                    </div>
                    {/* Footer Section */}
                    <div className='md:mt-24 mt-8'>
                        <Footer />
                    </div>
                </>
            }
        </>

    )
}

export default MainLayOut