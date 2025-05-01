import { FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa'
import Header from '../components/Header'
import { RiTailwindCssFill } from 'react-icons/ri'
import mongoDB from '../assets/images/mongoDB.png'
import express from '../assets/images/express.png'
import firebase from '../assets/images/firebase.png'
import bootstrap from '../assets/images/bootstrap.png'
import figma from '../assets/images/figma.png'
import { Element } from 'react-scroll'
import { useInView } from 'react-intersection-observer'

const skills = [
  {
    icon: <FaReact className="text-4xl" />,
    label: 'React',
    color: 'text-[#00D8FF]',
  },
  {
    icon: <img src={mongoDB} alt="MongoDB" className="w-10 h-10" />,
    label: 'MongoDB',
    color: 'text-[#00E462]',
  },
  {
    icon: <RiTailwindCssFill className="text-5xl" />,
    label: 'Tailwind',
    color: 'text-[#00BCFF]',
  },
  {
    icon: <FaNodeJs className="text-4xl" />,
    label: 'NodeJS',
    color: 'text-[#4F9B43]',
  },
  {
    icon: <img src={express} alt="ExpressJS" className="w-10 h-10" />,
    label: 'ExpressJS',
    gradient: 'text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-fuchsia-500',
  },
  {
    icon: <img src={firebase} alt="Firebase" className="w-10 h-10" />,
    label: 'Firebase',
    color: 'text-[#FFA000]',
  },
  {
    icon: <img src={bootstrap} alt="Bootstrap" className="w-10 h-10" />,
    label: 'Bootstrap',
    color: 'text-[#860ff5]',
  },
  {
    icon: <img src={figma} alt="Figma" className="w-10 h-10" />,
    label: 'Figma',
    gradient: 'text-transparent bg-clip-text bg-gradient-to-t from-orange-500 to-blue-400',
  },
]

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <Element name="skill">
      <div className="max-w-screen-xl px-4 md:px-6 lg:px-8 mx-auto my-16">
        <Header title="Visit my skill & Hire me" subTitle="My Skills" />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-10"
        >
          {skills.map(({ icon, label, color, gradient }, index) => (
            <div
              key={label}
              className={`transition-all duration-700 ease-in-out transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } delay-[${index * 75}ms] group hover:bg-[#1A1D21] duration-300 p-4 md:p-6 lg:p-10 rounded-xl shadow-[0_10px_20px_rgba(0,20,0,0.7)] ${color || ''}`}
            >
              <div className="flex items-center gap-3 group-hover:scale-110 transition-transform duration-200">
                {icon}
                <span className={`text-2xl ${gradient || ''}`}>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Skills
