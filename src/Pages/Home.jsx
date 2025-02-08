import React from 'react'
import Banner from '../components/Banner'
// import Features from '../Sections/Features'
import AboutMe from '../Sections/AboutMe'
import Skills from '../Sections/Skills'

const Home = () => {
  return (
    <div>
        <div className=''>
        <Banner/>
        </div>
        <div className='divider bg-black h-0.5'></div>
        {/* About Me Section*/}
        <div className='mt-24'>
        <AboutMe/>
        </div>
        <div className='divider bg-black h-0.5'></div>
        {/* Skills Section */}
        <div className='mt-24'>
        <Skills/>
        </div>
    </div>
  )
}

export default Home