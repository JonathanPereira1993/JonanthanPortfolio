import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const FloatingModel = () => {
  const { scene } = useGLTF("/scene.gltf");
  const modelRef = useRef<THREE.Group>(null);

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

export default function Hero3D() {
  return (
    <div
      style={{
        width: "100%",
        height: "clamp(340px, 40vw, 400px)",
        aspectRatio: "16 / 9",
        position: "relative",
      }}
    >
      <Canvas
        camera={{ position: [2, 2, 5] }}
        style={{ width: "100%", height: "100%" }}
      >
        <Stars radius={100} depth={50} count={3000} factor={4} fade />

        <ambientLight intensity={0.1} />

        <directionalLight
          position={[-5, 5, 5]}
          intensity={0.5}
          color={"#8F97B7FF"}
        />

        <spotLight
          position={[0, 5, 0]}
          angle={0.8}
          penumbra={1}
          intensity={2}
          color={"#9C9CB2FF"}
        />

        <pointLight
          position={[3, 3, -2]}
          intensity={5}
          color={"#FFF8EDFF"}
          distance={10}
          decay={2}
        />

        <Suspense fallback={null}>
          <FloatingModel />
        </Suspense>

        <OrbitControls />

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
