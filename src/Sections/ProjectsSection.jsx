import React, { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { Element } from "react-scroll";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

const projects = [
  {
    id: "volunteerManagement",
    name: "Volunteer Management",
    image: "https://i.ibb.co.com/fGz34JL1/cause-4-640x476.jpg",
  },
  {
    id: "studyHub",
    name: "Collaborative Study Platform",
    image: "https://i.ibb.co.com/svCh4G5f/blog1.jpg",
  },
  {
    id: "discountPro",
    name: "Discount Pro",
    image: "https://i.ibb.co.com/chzMxZ7M/istockphoto-1022530122-1024x1024.jpg",
    // image: "https://i.ibb.co.com/MkrP6Dk9/images-1.jpg",
  },
];

const ProjectsSection = () => {
  const projectSectionRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo === "projects") {
      // Wait a short moment to ensure DOM is ready
      setTimeout(() => {
        projectSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Adjust if needed
    }
  }, [location]);

  const openProjectDetails = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <Element name="project">
      <section className="mt-32 max-w-screen-xl px-4 md:px-8" ref={projectSectionRef} id="projectSection">
      <Header
      title={'Projects'}
      subTitle={'My Recent Works'}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} openProjectDetail={openProjectDetails(1)} />
        ))}
      </div>
    </section>
    </Element>
  );
};

export default ProjectsSection;
