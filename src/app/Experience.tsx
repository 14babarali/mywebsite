"use client";

import { Typography } from "@material-tailwind/react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { ExperienceCard } from "@/components/ExperienceCard"; // Adjust the path if necessary


const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Back End Developer",
    company: "Vizz Web Solutions Pvt. Ltd",
    duration: "Jun 2024 - Sept 2024",
    description:
      "Developed and maintained backend services using Node.js and Express.js. Optimized database queries in MongoDB, improving application performance by 20%. Collaborated with the frontend team to integrate APIs and ensure seamless data flow.",
  },
  {
    icon: BriefcaseIcon,
    title: "Full-stack Developer",
    company: "ProgrammersTech",
    duration: "May 2024 - Jun 2024",
    description:
      "Designed and implemented full-stack web applications using the MERN stack. Enhanced user interface with React.js, resulting in a 15% increase in user engagement. Integrated RESTful APIs to support dynamic content management.",
  },
  {
    icon: BriefcaseIcon,
    title: "Full Stack Developer",
    company: "Webstack Academy - WSA",
    duration: "Oct 2023 - Mar 2024",
    description:
      "Led the development of interactive web applications, focusing on responsive design. Managed the integration of third-party services, reducing development time by 10%. Conducted code reviews and mentored junior developers on best practices.",
  },
  {
    icon: BriefcaseIcon,
    title: "Full-stack Developer",
    company: "Freelance",
    duration: "Various Projects",
    description:
      "Delivered high-quality freelance projects, including ecommerce platforms and job portals. Customized solutions to meet specific client needs, ensuring satisfaction and repeat business. Managed all aspects of the project lifecycle, from requirement gathering to deployment.",
  },
];

export function Experience() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Experience
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Professional Journey
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          My professional experience has allowed me to hone my skills in software development, project management, and collaborative teamwork. Below is a summary of my key roles and contributions.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {EXPERIENCE.map((props, idx) => (
          <ExperienceCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
