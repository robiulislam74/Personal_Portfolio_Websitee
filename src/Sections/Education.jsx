import React from 'react';
import Header from '../components/Header';

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
    <section className='max-w-screen-lg mx-auto'>
      <Header
      title={'2017 - 2025'}
      subTitle={'Education Quality'}
      />
      <div className="relative border-l-2 border-gray-700 ml-4 space-y-10">
        {educationData.map((edu, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-red-500 border-2 border-gray-900"></div>
            <div className=" p-6 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)] duration-300">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl text-gray-300 font-semibold">{edu.title}</h3>
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">{edu.rating}</span>
              </div>
              <p className=" text-gray-400 mb-2">{edu.institute}</p>
              <p className=" text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
