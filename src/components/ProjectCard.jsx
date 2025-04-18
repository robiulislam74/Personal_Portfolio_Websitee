import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className=" text-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)] overflow-hidden hover:scale-[1.02] transition-all duration-300">
      <img src={project.image} alt={project.name} className="w-full h-52 grayscale rounded-xl object-cover object-top" />
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
};

export default ProjectCard;
