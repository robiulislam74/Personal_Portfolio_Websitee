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
        <div className='divider bg-black h-0.5'></div>
        {/* About Me Section*/}
        <Element name='about'>
        <div className='mt-32'>
        <AboutMe/>
        </div>
        </Element>
        <div className='divider bg-black h-0.5'></div>
        {/* Skills Section */}
        <div className='mt-32'>
        <Skills/>
        </div>
        {/* Project section */}
        <div>
          <ProjectsSection/>
        </div>
        {/* Educational Qualification */}
        <div className='mt-32'>
            <Education/>
        </div>
        {/* Contact Section */}
        <Element name='contact'>
        <div className='mt-32'>
        <Contact/>
        </div>
        </Element>
    </div>
  )
}

export default Home