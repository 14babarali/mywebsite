// "use client";

// import Image from "next/image";
// import { Input, Button, Typography } from "@material-tailwind/react";
// function Hero() {
//   return (
//     <header className="bg-white p-8">
//       <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
//         <div className="row-start-2 lg:row-auto">
//           <Typography
//             variant="h1"
//             color="blue-gray"
//             className="mb-4 lg:text-5xl !leading-tight text-3xl"
//           >
//             Welcome to my Software <br /> Engineering Portfolio!
//           </Typography>
//           <Typography
//             variant="lead"
//             className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
//           >
//             I&apos;m Babar Ali, a dedicated software engineer with expertise in
//             full-stack web and mobile application development using the MERN
//             stack. Explore my projects and experience that demonstrate my skills
//             in delivering scalable solutions.
//           </Typography>
//           <div className="grid">
//             <Typography
//               variant="small"
//               className="mb-2 text-gray-900 font-medium"
//             >
//               Get in touch
//             </Typography>
//             <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
//               {/* @ts-ignore */}
//               <Input color="gray" label="Enter your email" size="lg" />
//               <Button color="gray" className="w-full px-4 md:w-[12rem]">
//                 Contact Me
//               </Button>
//             </div>
//           </div>
//           <Typography variant="small" className="font-normal !text-gray-500">
//             Read my{" "}
//             <a href="#" className="font-medium underline transition-colors">
//               Terms and Conditions
//             </a>
//           </Typography>
//         </div>
//         <Image
//           width={1024}
//           height={1024}
//           alt="software development"
//           src="/image/image-7.svg"
//           className="h-[36rem] w-full rounded-xl object-cover"
//         />
//       </div>
//     </header>
//   );
// }

// export default Hero;

// "use client";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { Input, Button, Typography } from "@material-tailwind/react";

// // Model component to load and display the 3D model
// function Model() {
//   // Load the 3D model from a file (e.g., .glb or .gltf format)
//   // const { scene } = useGLTF("/model/model.glb"); 
//   // Make sure to provide the correct path
  
//   const { scene } = useGLTF("./desktop_pc/scene.gltf"); 


//   return <primitive object={scene} scale={1.5} />;
// }

// function Hero() {
//   return (
//     <header className="bg-white p-8">
//       <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
//         <div className="row-start-2 lg:row-auto">
//           <Typography
//             variant="h1"
//             color="blue-gray"
//             className="mb-4 lg:text-5xl !leading-tight text-3xl"
//           >
//             Welcome to my Software <br /> Engineering Portfolio!
//           </Typography>
//           <Typography
//             variant="lead"
//             className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
//           >
//             I&apos;m Babar Ali, a dedicated software engineer with expertise in
//             full-stack web and mobile application development using the MERN
//             stack. Explore my projects and experience that demonstrate my skills
//             in delivering scalable solutions.
//           </Typography>
//           <div className="grid">
//             <Typography
//               variant="small"
//               className="mb-2 text-gray-900 font-medium"
//             >
//               Get in touch
//             </Typography>
//             <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
//               <Input color="gray" label="Enter your email" size="lg" />
//               <Button color="gray" className="w-full px-4 md:w-[12rem]">
//                 Contact Me
//               </Button>
//             </div>
//           </div>
//           <Typography variant="small" className="font-normal !text-gray-500">
//             Read my{" "}
//             <a href="#" className="font-medium underline transition-colors">
//               Terms and Conditions
//             </a>
//           </Typography>
//         </div>

//         {/* Replace the Image with the 3D Model */}
//         <div className="h-[36rem] w-full rounded-xl bg-gray-100">
//           <Canvas>
//             <ambientLight />
//             <pointLight position={[10, 10, 10]} />
//             <OrbitControls enableZoom={true} />
//             <Model /> {/* Load the 3D model here */}
//           </Canvas>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Hero;



"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Input, Button, Typography } from "@material-tailwind/react";
import { useRef } from "react";

// Model component to load and display the 3D model
function Model() {
  const { scene } = useGLTF("./desktop_pc/scene.gltf"); // Ensure the path is correct
  const modelRef = useRef();

  // Automatically rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotate the model slowly
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.3} />;
}

function Hero() {
  return (
    <header className="relative h-screen bg-white overflow-hidden">
      {/* Canvas for the 3D Model as background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 1, 4], fov: 50 }}> {/* Adjust camera position */}
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={true} /> {/* Enable zoom and rotation */}
          <Model />
        </Canvas>
      </div>

      <div className="container mx-auto flex h-full flex-col justify-center items-start p-8 relative z-10 select-none">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 lg:text-5xl !leading-tight text-3xl"
        >
          I am Babar Ali  <br />  Software Engineer | Python & JavaScript Specialist | ML Engineer !
        </Typography>
        <Typography
          variant="lead"
          className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
        >
          I&apos;m Babar Ali, a dedicated software engineer with expertise in
          full-stack web and mobile application development using the MERN
          stack. Explore my projects and experience that demonstrate my skills
          in delivering scalable solutions.
        </Typography>
        <div className="grid">
          <Typography
            variant="small"
            className="mb-2 text-gray-900 font-medium"
          >
            Get in touch
          </Typography>
          <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
            <Input color="gray" label="Enter your email" size="lg" />
            <Button color="gray" className="w-full px-4 md:w-[12rem]">
              Contact Me
            </Button>
          </div>
        </div>
        <Typography variant="small" className="font-normal !text-gray-500">
          Read my{" "}
          <a href="#" className="font-medium underline transition-colors">
            Terms and Conditions
          </a>
        </Typography>
      </div>
    </header>
  );
}

export default Hero;


