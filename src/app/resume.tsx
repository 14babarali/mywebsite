"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Science in Computer Science",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Certified Web Developer ",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Frontend Framework Proficiency Certification",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;


// "use client";

// import { Typography, Button } from "@material-tailwind/react";
// import {
//   AcademicCapIcon,
//   BriefcaseIcon,
//   CertificateIcon,
//   ArrowRightIcon,
// } from "@heroicons/react/24/solid";
// import ResumeItem from "@/components/resume-item"; 

// // Customize the resume items below based on your actual qualifications, certifications, and experience.
// const RESUME_ITEMS = [
//   {
//     icon: AcademicCapIcon,
//     children: "Bachelor of Science in Software Engineering - ABC University, USA",
//   },
//   {
//     icon: CertificateIcon,
//     children: "Certified Full-Stack Web Developer - XYZ Certification",
//   },
//   {
//     icon: CertificateIcon,
//     children: "Certified MERN Stack Developer - CodeCamp Institute",
//   },
//   {
//     icon: BriefcaseIcon,
//     children: "Software Engineer at TechCorp - 2020 to Present",
//   },
//   {
//     icon: BriefcaseIcon,
//     children: "Frontend Developer at WebDev Solutions - 2018 to 2020",
//   },
//   {
//     icon: BriefcaseIcon,
//     children: "Mobile App Developer (Freelance) - 2017 to 2018",
//   },
// ];

// export function Resume() {
//   return (
//     <section className="px-8 py-24">
//       <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
//         <div className="col-span-1">
//           <Typography variant="h2" color="blue-gray">
//             My Resume
//           </Typography>
//           <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
//             Experienced Software Engineer specializing in full-stack web
//             development and mobile applications with over 5 years of hands-on
//             experience building scalable solutions.
//           </Typography>
//           <Button
//             variant="text"
//             color="gray"
//             className="flex items-center gap-2"
//           >
//             View Full Resume
//             <ArrowRightIcon
//               strokeWidth={3}
//               className="h-3.5 w-3.5 text-gray-900"
//             />
//           </Button>
//         </div>
//         <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
//           {RESUME_ITEMS.map((props, idx) => (
//             <ResumeItem key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Resume;
