"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Full Stack Web Development",
    children:
      "I specialize in building robust, scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). From frontend to backend, I create seamless and efficient solutions for complex business needs.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      "I develop responsive and intuitive mobile apps using React Native, ensuring cross-platform compatibility across iOS and Android. My solutions focus on both functionality and user experience.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "My expertise spans multiple technologies including JavaScript, Python, React, Node.js, Express.js, and databases like MongoDB and SQL. I am also skilled in using frameworks such as Pandas, Numpy, and Scikit-Learn.",
  },
  {
    icon: HashtagIcon,
    title: "API Integration & Optimization",
    children:
      "I have experience integrating RESTful APIs and optimizing backend services to ensure high performance and efficiency. My work has led to performance improvements of up to 20% in previous projects.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design & Development",
    children:
      "I focus on creating responsive, user-friendly interfaces, keeping user satisfaction at the forefront of every design. I ensure seamless user interactions across all devices.",
  },
  // {
  //   icon: DocumentTextIcon,
  //   title: "Testing and Quality Assurance",
  //   children:
  //     "I prioritize quality by rigorously testing my applications for performance, security, and functionality. Ensuring a bug-free, smooth experience for users is a key part of my development process.",
  // },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          My Skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I Do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m Babar Ali, a dedicated software engineer with a passion for creating high-quality web and mobile applications. Below is an overview of the key skills and technologies I use to deliver effective digital solutions.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
