import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Table(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[5, 0.2, 3]} /> {/* Width, Height, Depth */}
      <meshStandardMaterial color="brown" />
    </mesh>
  );
}

function Laptop(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[0.6, 0.04, 0.4]} /> {/* Width, Height, Depth */}
      <meshStandardMaterial color="silver" />
    </mesh>
  );
}

function Screen(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1.2, 0.7, 0.04]} /> {/* Width, Height, Depth */}
      <meshStandardMaterial color="black" />
    </mesh>
  );
}

function Phone(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[0.2, 0.4, 0.02]} /> {/* Width, Height, Depth */}
      <meshStandardMaterial color="black" />
    </mesh>
  );
}

function Chair(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1.5, 1]} /> {/* Width, Height, Depth */}
      <meshStandardMaterial color="darkblue" />
    </mesh>
  );
}

function Speaker(props) {
  return (
    <mesh {...props}>
      <cylinderGeometry args={[0.1, 0.1, 0.3, 32]} /> {/* Radius Top, Radius Bottom, Height */}
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

function Headphones(props) {
  const headphoneRef = useRef();
  return (
    <group ref={headphoneRef} {...props}>
      {/* Headband */}
      <mesh position={[0, 0.2, 0]}>
        <torusGeometry args={[0.4, 0.05, 16, 100]} /> {/* Radius, Tube Thickness */}
        <meshStandardMaterial color="black" />
      </mesh>
      {/* Left ear cup */}
      <mesh position={[-0.3, -0.2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.2, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* Right ear cup */}
      <mesh position={[0.3, -0.2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.2, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

export default function OfficeScene() {
  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Table */}
      <Table position={[0, 0, 0]} />
      
      {/* Laptop */}
      <Laptop position={[0.5, 0.11, 0]} rotation={[0, Math.PI / 4, 0]} />
      
      {/* Screen (Desktop) */}
      <Screen position={[-1, 0.35, 0]} />
      <Screen position={[-1.5, 0.35, 0]} />
      
      {/* Phone */}
      <Phone position={[1, 0.2, 1]} />
      
      {/* Chair */}
      <Chair position={[0, -1, -3]} />
      
      {/* Speakers */}
      <Speaker position={[-0.7, 0.11, 1]} />
      <Speaker position={[0.7, 0.11, 1]} />
      
      {/* Headphones */}
      <Headphones position={[0, 0.2, 1]} />
      
      {/* Camera Controls */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
