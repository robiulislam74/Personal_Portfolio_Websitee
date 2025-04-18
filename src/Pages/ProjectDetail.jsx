import React from "react";
import { useParams } from "react-router-dom";

const projectDetails = {
  "discountPro": {
    name: "Discount PRO",
    image: "https://i.ibb.co.com/chzMxZ7M/istockphoto-1022530122-1024x1024.jpg",
    tech: "React, Firebase, Tailwind CSS, Node.js",
    description: "A coupon collecting web application with secure auth, dynamic routing, and brand-wise filtering.",
    liveLink: "https://e-commerce-shops-in-bangladesh.netlify.app/",
    githubLink: "https://github.com/robiulislam74/Coupon_Collecting_With_React",
    challenges: "Handling protected routes and Firebase JWT integration.",
    future: "Add AI-based deal suggestions and coupon expiry reminders.",
  },

};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) return <div className="text-white p-8">Project not found.</div>;

  return (
    <div className="bg-[#1f1f1f] text-white min-h-screen p-6 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
      <div className="max-w-4xl mx-auto">
        <img src={project.image} alt={project.name} className="rounded-xl grayscale mb-6 w-full h-full" />
        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
        <p className="mb-4"><span className="font-semibold">Tech Stack:</span> {project.tech}</p>
        <p className="mb-4"><span className="font-semibold">Description:</span> {project.description}</p>
        <p className="mb-4"><span className="font-semibold">Challenges:</span> {project.challenges}</p>
        <p className="mb-4"><span className="font-semibold">Future Plans:</span> {project.future}</p>
        <div className="flex gap-4 mt-6">
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Live Demo</a>
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
