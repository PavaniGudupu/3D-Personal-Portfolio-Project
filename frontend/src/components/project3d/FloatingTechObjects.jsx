import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const FloatingTechObjects = () => {
  const reactRef = useRef();
  const jsRef = useRef();
  const threeRef = useRef();
  const cubeRef = useRef();
  const sphereRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (reactRef.current) {
      reactRef.current.rotation.y += 0.01;
      reactRef.current.position.y =
        1.7 + Math.sin(t * 1.1) * 0.15;
    }

    if (jsRef.current) {
      jsRef.current.rotation.x += 0.008;
      jsRef.current.rotation.y += 0.01;
      jsRef.current.position.y =
        -0.8 + Math.sin(t * 1.3) * 0.12;
    }

    if (threeRef.current) {
      threeRef.current.rotation.y -= 0.01;
      threeRef.current.position.y =
        1.4 + Math.sin(t * 1.2) * 0.13;
    }

    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.006;
      cubeRef.current.rotation.y += 0.008;
    }

    if (sphereRef.current) {
      sphereRef.current.position.y =
        -1.6 + Math.sin(t * 1.5) * 0.1;
    }
  });

  return (
    <group>
      {/* React-inspired object */}
      <group
        ref={reactRef}
        position={[-4.5, 1.7, 0]}
        scale={0.7}
      >
        <torusGeometry args={[0.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#61dafb" />
      </group>

      {/* JavaScript cube */}
      <mesh
        ref={jsRef}
        position={[-4.2, -0.8, 0]}
        scale={0.7}
      >
        <boxGeometry args={[1, 1, 1]} />

        <meshStandardMaterial
          color="#f7df1e"
          roughness={0.45}
          metalness={0.05}
        />
      </mesh>

      {/* Three.js inspired object */}
      <mesh
        ref={threeRef}
        position={[4.5, 1.4, 0]}
        scale={0.65}
      >
        <octahedronGeometry args={[0.8, 0]} />

        <meshStandardMaterial
          color="#7ca9ff"
          roughness={0.35}
          metalness={0.1}
        />
      </mesh>

      {/* Decorative cube */}
      <mesh
        ref={cubeRef}
        position={[4.6, -1.2, -0.3]}
        scale={0.45}
      >
        <boxGeometry args={[1, 1, 1]} />

        <meshStandardMaterial
          color="#9fc4ff"
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Decorative sphere */}
      <mesh
        ref={sphereRef}
        position={[0, -1.6, -0.8]}
        scale={0.35}
      >
        <sphereGeometry args={[0.7, 32, 32]} />

        <meshStandardMaterial
          color="#a9c7ff"
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
};

export default FloatingTechObjects;