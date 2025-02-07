import React from 'react'
import Banner from '../components/Banner'
// import Features from '../Sections/Features'
import AboutMe from '../Sections/AboutMe'

const Home = () => {
  return (
    <div>
        <div className=''>
        <Banner/>
        </div>
        <div className='divider bg-black h-0.5'></div>
        {/* <Features/> */}
        <div className='mt-24'>
        <AboutMe/>
        </div>
    </div>
  )
}

export default Home