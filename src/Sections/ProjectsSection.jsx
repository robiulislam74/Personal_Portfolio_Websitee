import React from 'react';
import Header from '../components/Header';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: "volunteerManagement",
    name: 'Volunteer Management',
    image: "https://i.ibb.co.com/fGz34JL1/cause-4-640x476.jpg",
  },
  {
    id: "studyHub",
    name: 'Collaborative Study Platform',
    image: "https://i.ibb.co.com/svCh4G5f/blog1.jpg",
  },
  {
    id: "discountPro",
    name: 'E-commerce Dashboard',
    image: "https://i.ibb.co.com/S41gh6Qs/depositphotos-223510678-stock-photo-beautiful-excited-couple-shopaholics-looking.webp",
  },
];

const Projects = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8">
      <Header title="Featured Work" subTitle="My Projects" />

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.1,
          });

          return (
            <div
              key={index}
              ref={ref}
              className={`transition-all duration-700 ease-in-out transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } text-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)] overflow-hidden hover:scale-[1.02] transition-transform`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52 grayscale rounded-xl object-cover object-top"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <Link to={`/projects/${project.id}`}>
                  <button className="mt-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-white transition">
                    View Details →
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
