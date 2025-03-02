import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh | null>(null);

  // Rotate the cube each frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="royalblue" />
      <Environment preset="city" />
    </mesh>
  );
};

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [2, 2, 5] }} // Set camera position
      style={{ width: "100%", height: "400px" }} // Adjust canvas size
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <RotatingCube />
      <OrbitControls /> {/* Allows mouse control */}
    </Canvas>
  );
}
