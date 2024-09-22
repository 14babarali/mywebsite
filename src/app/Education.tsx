"use client";

import { Typography } from "@material-tailwind/react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { EducationCard } from "@/components/EducationCard"; // Adjust the path if necessary


const EDUCATION = [
  {
    icon: AcademicCapIcon,
    degree: "Bachelor of Software Engineering",
    institution: "Riphah International University, Islamabad",
    duration: "Sep 2019 - June 2023",
  },
  {
    icon: AcademicCapIcon,
    degree: "Intermediate of Computer Science (ICS)",
    institution: "Pepperdine for Advanced Studies, Skardu",
    duration: "Aug 2017 - Aug 2019",
  },
];

export function Education() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Education
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          My Academic Background
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          My educational journey has equipped me with a strong foundation in software engineering principles and practices. Below are the details of my academic achievements.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
        {EDUCATION.map((props, idx) => (
          <EducationCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Education;
