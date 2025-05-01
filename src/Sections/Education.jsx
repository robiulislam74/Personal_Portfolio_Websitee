import React from 'react';
import Header from '../components/Header';
import { useInView } from 'react-intersection-observer';

const educationData = [
  {
    title: 'BSS (Honours) in Economics',
    institute: 'Govt. Michael Madhusudan College, Jashore (2019 - 2025)',
    desc: 'Currently pursuing Bachelor of Social Science (Honours) in Economics. Focus areas include Microeconomics, Macroeconomics, Development Studies, and Quantitative Methods.',
    rating: 'Pending',
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    institute: 'Rajgong Degree College (2017 - 2019)',
    desc: 'Completed HSC in Humanities under the National Curriculum. Focused on subjects like Civics, Economics, and Logic.',
    rating: '4.42/5',
  },
  {
    title: 'Secondary School Certificate (SSC)',
    institute: 'K.K BL High School (2011 - 2017)',
    desc: 'Completed SSC in Science under the National Curriculum with emphasis on Physics, Chemistry, and Mathematics.',
    rating: '4.77/5',
  }
];

const Education = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8">
      <Header title="2017 - 2025" subTitle="Education Quality" />

      <div className="relative border-l-2 border-gray-700 ml-4 space-y-10">
        {educationData.map((edu, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false, // Animate every time the card enters the viewport
            threshold: 0.1,
          });

          return (
            <div
              key={index}
              ref={ref}
              className={`transition-all duration-700 ease-in-out transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } relative pl-6 sm:pl-8`}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-red-500 border-2 border-gray-900"></div>

              {/* Education Card */}
              <div className="p-4 sm:p-6 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)] duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                  <h3 className="text-lg sm:text-xl text-gray-300 font-semibold">{edu.title}</h3>
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full w-fit">
                    {edu.rating}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-1">{edu.institute}</p>
                <p className="text-sm sm:text-base text-gray-400">{edu.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
