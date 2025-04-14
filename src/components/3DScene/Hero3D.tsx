import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Stars } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

// Floating 3D Model Animation
const FloatingModel = () => {
  const { scene } = useGLTF("/scene.gltf");
  const modelRef = useRef<THREE.Group>(null);

  // Clean up GPU resources when component unmounts
  useEffect(() => {
    return () => {
      if (modelRef.current) {
        modelRef.current.traverse((obj) => {
          if ((obj as THREE.Mesh).geometry) {
            (obj as THREE.Mesh).geometry.dispose();
          }

          const material = (obj as THREE.Mesh).material;
          if (material) {
            if (Array.isArray(material)) {
              material.forEach((m) => m.dispose());
            } else {
              material.dispose();
            }
          }
        });
      }
    };
  }, []);

  // Floating animation
  useFrame(({ clock }) => {
    if (modelRef.current) {
      const t = clock.getElapsedTime();
      modelRef.current.position.y = Math.sin(t) * 0.2 - 1;
      modelRef.current.rotation.y += 0.0015;
      modelRef.current.rotation.z += 0.0005;
      modelRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={modelRef} position={[0, -1.5, 0]}>
      <primitive object={scene} scale={3} />
    </group>
  );
};

// Hero 3D Canvas Wrapper
export default function Hero3D() {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        height: "clamp(250px, 50vh, 400px)",
        maxWidth: "100vw",
        display: "block",
      }}
    >
      <Canvas
        onCreated={({ gl }) => {
          gl.getContext().canvas.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
          });
        }}
        camera={{ position: [2, 2, 5] }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight
          position={[-5, 5, 5]}
          intensity={0.5}
          color="#8F97B7"
        />
        <spotLight
          position={[0, 5, 0]}
          angle={0.8}
          penumbra={1}
          intensity={2}
          color="#9C9CB2"
        />
        <pointLight
          position={[3, 3, -2]}
          intensity={5}
          color="#FFF8ED"
          distance={10}
          decay={2}
        />

        <Stars radius={100} depth={50} count={2000} factor={3} fade />

        <Suspense fallback={null}>
          <FloatingModel />
        </Suspense>

        <OrbitControls />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
