import Banner from '../components/Banner'
// import Features from '../Sections/Features'
import AboutMe from '../Sections/AboutMe'
import Skills from '../Sections/Skills'
import Contact from '../Sections/Contact'
import { Element } from 'react-scroll'
import ProjectsSection from '../Sections/ProjectsSection'
import Education from '../Sections/Education'

const Home = () => {

  return (
    <div>
      <Element name='home'>
        <Banner/>
      </Element>
        <div className='divider bg-black h-0.5 max-w-screen-xl px-4 md:px-8'></div>
        {/* About Me Section*/}
        <Element name='about'>
        <div className='md:mt-24 mt-10'>
        <AboutMe/>
        </div>
        </Element>
        <div className='divider bg-black h-0.5 max-w-screen-xl px-4 md:px-8'></div>
        {/* Skills Section */}
        <div className='md:mt-32 mt-10'>
        <Skills/>
        </div>
        {/* Project section */}
        <div>
          <ProjectsSection/>
        </div>
        {/* Educational Qualification */}
        <Element name='education'>
        <div className='md:mt-32 mt-10'>
            <Education/>
        </div>
        </Element>
        {/* Contact Section */}
        <Element name='contact'>
        <div className='md:mt-32 mt-10'>
        <Contact/>
        </div>
        </Element>
    </div>
  )
}

export default Home