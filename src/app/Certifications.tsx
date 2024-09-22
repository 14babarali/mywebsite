"use client";

import { Typography } from "@material-tailwind/react";
import { AcademicCapIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
// import { CertificationCard } from "@/components";
import { CertificationCard } from "@/components/CertificationCard"; // Adjust path if necessary

const CERTIFICATIONS = [
  {
    icon: CheckBadgeIcon,
    title: "IBM Full Stack Software Developer",
    provider: "Coursera",
    description:
      "Completed an extensive full-stack development course, mastering key skills in MERN stack development, cloud computing, and DevOps practices.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Frontend Development using React",
    provider: "NIIT",
    description:
      "Acquired in-depth knowledge of React.js, including component-based architecture and state management, to create dynamic user interfaces.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Full-Stack Web Development with React",
    provider: "The Hong Kong University of Science and Technology",
    description:
      "Gained practical experience in full-stack web development, focusing on React for frontend and Node.js for backend, building interactive web applications.",
  },
  {
    icon: CheckBadgeIcon,
    title: "JavaScript for Beginners",
    provider: "University of California, Davis",
    description:
      "Learned the fundamentals of JavaScript, including programming concepts like loops, functions, and object-oriented programming.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Advanced JavaScript for Coders: Learn OOP in JavaScript",
    provider: "Eduonix",
    description:
      "Specialized in Object-Oriented Programming (OOP) in JavaScript, enhancing skills in creating scalable and maintainable codebases.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Become A Certified Web Developer From Scratch",
    provider: "Eduonix",
    description:
      "Developed a solid foundation in web development, covering both frontend and backend technologies, and became proficient in building web applications from scratch.",
  },
];

export function Certifications() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Certifications
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          My Credentials
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I have earned a variety of certifications that validate my technical skills and expertise in software engineering. These certifications highlight my proficiency in both frontend and backend development, as well as advanced JavaScript programming.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((props, idx) => (
          <CertificationCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Certifications;
