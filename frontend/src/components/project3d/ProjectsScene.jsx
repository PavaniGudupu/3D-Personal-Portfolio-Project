import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import FloatingTechObjects from "./FloatingTechObjects";

const ProjectsScene = () => {
  return (
    <Canvas
      gl={{
        alpha: true,
        antialias: true,
      }}
      dpr={[1, 1.5]}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 10]}
        fov={45}
      />

      <ambientLight intensity={2.2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <Suspense fallback={null}>
        <FloatingTechObjects />
      </Suspense>
    </Canvas>
  );
};

export default ProjectsScene;