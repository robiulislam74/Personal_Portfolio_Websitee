import React from "react";
import { FaBackspace, FaGithub } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowUpRightDots } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";

const projectDetails = {
  "discountPro": {
    name: "Discount PRO Coupon Collecting",
    image: "https://i.ibb.co.com/chzMxZ7M/istockphoto-1022530122-1024x1024.jpg",
    tech: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    description: "A coupon collecting web application with secure auth, dynamic routing, and brand-wise filtering. Discount PRO is a web-based application designed to help users find and use discount coupons for popular e-commerce stores in Bangladesh. The app collects and displays coupons for various brands, allowing users to save money on their online purchases. Users can sign up, log in, browse available coupons, and easily copy coupon codes to use them in online stores.",
    liveLink: "https://e-commerce-shops-in-bangladesh.netlify.app/",
    githubLink: "https://github.com/robiulislam74/Coupon_Collecting_With_React",
    challenges: ["Handling protected routes and Firebase JWT integration."],
    futurePlans: ["Add AI-based deal suggestions and coupon expiry reminders."],
  },
  "studyHub": {
    name: "Collaborative Study Platform",
    image: "https://i.ibb.co.com/svCh4G5f/blog1.jpg",
    description:
      "A platform connecting students, tutors, and admins for scheduling sessions, uploading materials, and user management.",
    tech: ["React", "Express.js", "MongoDB", "Firebase", "TanStack Query"],
    githubLink: "https://github.com/robiulislam74/StudyHub_Client_Sites",
    liveLink: "https://studyhub-learning-sites.web.app",
    challenges: [
      "Role-based dashboard structure",
      "JWT token handling after reload",
      "Real-time material upload and display",
    ],
    futurePlans: [
      "Add real-time chat between tutor and student",
      "More analytics for admins",
    ],
  },
  "volunteerManagement": {
  name: "Volunteer Management Website",
  image: "https://i.ibb.co.com/fGz34JL1/cause-4-640x476.jpg",
  description:
    "A full-featured platform for managing volunteer opportunities, including user authentication, post management, and volunteer applications.",
  tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "TanStack Query", "Tailwind"],
  githubLink: "https://github.com/robiulislam74/Volunteer_Management_Client_Sites",
  liveLink: "https://coffees-crud-task.web.app",
  challenges: [
    "Role-based access with protected routes",
    "Secure volunteer application flow using JWT",
    "Pagination and search functionality with real-time updates",
  ],
  futurePlans: [
    "Add notifications for new volunteer requests",
    "Implement advanced filtering by location/date",
  ],
}

};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  const navigate = useNavigate();

  const goBackToProjects = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };


  if (!project) return <div className="text-white p-8">Project not found.</div>;

  return (
    // <div className="bg-[#1f1f1f] text-white min-h-screen p-6 rounded-xl">
    //   <div className="max-w-4xl relative mx-auto p-8 rounded-xl shadow-[0_10px_20px_rgba(0020,_0020,_0020,_0.7)]">
    //     <img src={project.image} alt={project.name} className="rounded-xl grayscale mb-6 w-full h-full" />
    //     <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
    //     {/* <p className="mb-4"><span className="font-semibold">Tech Stack:</span> {project.tech}</p> */}
    //     <p className="mb-4"><span className="font-semibold">Description:</span> {project.description}</p>
    //     {/* <p className="mb-4"><span className="font-semibold">Challenges:</span> {project.challenges}</p> */}
    //     <div className="my-4">
    //     <strong>Tech Stack:</strong> {project.tech.join(", ")}
    //   </div>
    //     <div className="mt-6">
    //     <h2 className="text-xl font-semibold">Challenges Faced</h2>
    //     <ul className="list-disc list-inside">
    //       {project.challenges?.map((item, i) => (
    //         <li key={i}>{item}</li>
    //       ))}
    //     </ul>
    //   </div>
    //     {/* <p className="mb-4"><span className="font-semibold">Future Plans:</span> {project.future}</p> */}
    //     <div className="mt-6">
    //     <h2 className="text-xl font-semibold">Future Plans</h2>
    //     <ul className="list-disc list-inside">
    //       {project.futurePlans?.map((item, i) => (
    //         <li key={i}>{item}</li>
    //       ))}
    //     </ul>
    //   </div>
    //     <div className="flex gap-4 mt-6">
    //       <a href={project.liveLink} target="_blank" rel="noreferrer" className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded">
    //       <FaArrowUpRightDots className="inline-block text-2xl mr-2 items-center"/>
    //         Live Demo</a>
    //       <a href={project.githubLink} target="_blank" rel="noreferrer" className="bg-gray-700 hover:bg-gray-800 duration-150 px-4 py-2 rounded">
    //       <FaGithub className="inline-block text-2xl mr-2 items-center"/>
    //         GitHub</a>
          
    //     </div>
    //     {/* Back Icon */}
    //     <div onClick={goBackToProjects} className="absolute top-5 -left-10 ">
    //     <FaArrowLeftLong className="text-3xl hover:scale-150 duration-300 text-pinkRed hover:text-pink-600"/>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#1f1f1f] text-white min-h-screen px-4 py-6 sm:px-6 lg:px-8">
  <div className="max-w-4xl relative mx-auto p-4 sm:p-6 lg:p-8 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.7)] bg-[#2b2b2b]">
    
    {/* Project Image */}
    <img
      src={project.image}
      alt={project.name}
      className="rounded-xl grayscale mb-6 w-full max-h-[300px] sm:max-h-[400px] object-cover"
    />

    {/* Project Title */}
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{project.name}</h1>

    {/* Description */}
    <p className="mb-4 text-sm sm:text-base">
      <span className="font-semibold">Description:</span> {project.description}
    </p>

    {/* Tech Stack */}
    <div className="my-4 text-sm sm:text-base">
      <strong>Tech Stack:</strong> {project.tech.join(", ")}
    </div>

    {/* Challenges */}
    <div className="mt-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Challenges Faced</h2>
      <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
        {project.challenges?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Future Plans */}
    <div className="mt-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Future Plans</h2>
      <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
        {project.futurePlans?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <a
        href={project.liveLink}
        target="_blank"
        rel="noreferrer"
        className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-center"
      >
        <FaArrowUpRightDots className="inline-block text-xl mr-2" />
        Live Demo
      </a>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noreferrer"
        className="bg-gray-700 hover:bg-gray-800 duration-150 px-4 py-2 rounded text-center"
      >
        <FaGithub className="inline-block text-xl mr-2" />
        GitHub
      </a>
    </div>

    {/* Back Icon */}
    <div
      onClick={goBackToProjects}
      className="absolute top-4 left-4 sm:top-5 sm:left-5 cursor-pointer"
    >
      <FaArrowLeftLong className="text-2xl sm:text-3xl hover:scale-125 duration-300 text-pinkRed hover:text-pink-600" />
    </div>
  </div>
</div>

  );
};

export default ProjectDetail;
