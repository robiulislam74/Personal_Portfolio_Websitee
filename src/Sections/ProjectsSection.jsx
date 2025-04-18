import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: "volunteerManagement",
    name: "Volunteer Management",
    // image: "https://i.ibb.co.com/9mw7gf4N/post-6-copyright-760x567.jpg",
    image: "https://i.ibb.co.com/fGz34JL1/cause-4-640x476.jpg",
  },
  {
    id: "studyHub",
    name: "StudyHub Area",
    image: "https://i.ibb.co.com/svCh4G5f/blog1.jpg",
  },
  {
    id: "discountPro",
    name: "Discount Pro",
    image: "https://i.ibb.co.com/MkrP6Dk9/images-1.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section className="mt-32">
      <h2 className="text-3xl font-bold text-center text-white mb-10">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
