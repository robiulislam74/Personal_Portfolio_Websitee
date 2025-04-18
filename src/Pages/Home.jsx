import React from 'react'
import Banner from '../components/Banner'
// import Features from '../Sections/Features'
import AboutMe from '../Sections/AboutMe'
import Skills from '../Sections/Skills'
import Contact from '../Sections/Contact'

const Home = () => {
  return (
    <div>
        <div className=''>
        <Banner/>
        </div>
        <div className='divider bg-black h-0.5'></div>
        {/* About Me Section*/}
        <div className='mt-32'>
        <AboutMe/>
        </div>
        <div className='divider bg-black h-0.5'></div>
        {/* Skills Section */}
        <div className='mt-32'>
        <Skills/>
        </div>
        {/* Contact Section */}
        <div className='mt-32'>
        <Contact/>
        </div>
    </div>
  )
}

export default Home