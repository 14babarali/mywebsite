"use client";

import { Typography } from "@material-tailwind/react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { ProjectCard } from "@/components";

const PROJECTS = [
  {
    icon: CodeBracketIcon,
    title: "University Management System",
    description:
      "Developed a comprehensive university management system with a mobile app interface, enhancing administrative efficiency for both students and faculty. Achieved a user satisfaction rate of 90% based on feedback.",
    technologies: "Technologies Used: MERN Stack, React Native",
    duration: "July 2023 - May 2024",
  },
  {
    icon: CodeBracketIcon,
    title: "Ecommerce Website",
    description:
      "Created a fully functional ecommerce platform featuring user authentication and payment processing. Integrated third-party APIs to enhance functionality, resulting in a 30% increase in user engagement.",
    technologies: "Technologies Used: MERN Stack",
    duration: "April 2022 - July 2022",
  },
  {
    icon: CodeBracketIcon,
    title: "Job Portal Project",
    description:
      "Developed a job portal with features such as job posting, application tracking, and user profiles. Implemented search and filtering functionality to improve user experience and successfully deployed ahead of schedule.",
    technologies: "Technologies Used: MERN Stack",
    duration: "May 2022 - Aug 2022",
  },
];

export function Projects() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Projects
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          My Work
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Here are some of the key projects I have worked on, showcasing my ability to develop and deliver comprehensive software solutions.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
