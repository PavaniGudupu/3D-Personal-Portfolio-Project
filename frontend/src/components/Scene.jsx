

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Center,
} from "@react-three/drei";

import FloatingIsland from "./FloatingIsland";
import ModelLoader from "./ModelLoader";


const ResponsiveIsland = () => {

  const { viewport } = useThree();

  const scale = Math.min(
    viewport.width * 0.055,
    viewport.height * 0.055
  );

  const islandRef = useRef();

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const scrollProgress = useRef(0);


  /* =========================
     MOUSE MOVEMENT
  ========================= */

  useEffect(() => {

    const handleMouseMove = (event) => {

      mouseX.current =
        (event.clientX / window.innerWidth - 0.5) * 2;

      mouseY.current =
        (event.clientY / window.innerHeight - 0.5) * 2;

    };


    /* =========================
       HERO SCROLL PROGRESS
    ========================= */

    const handleScroll = () => {

      const progress =
        window.scrollY / window.innerHeight;

      scrollProgress.current =
        Math.min(Math.max(progress, 0), 1);

    };


    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  /* =========================
     3D ANIMATION
  ========================= */

  useFrame((state) => {

    if (!islandRef.current) return;


    /* FLOAT */

    const floating =
      Math.sin(
        state.clock.elapsedTime * 1.8
      ) * 0.12;


    /* MOUSE */

    const targetX =
      mouseX.current * 0.28;

    const mouseTargetY =
      -mouseY.current * 0.18;


    /* SCROLL DEPTH */

    const scroll =
      scrollProgress.current;

    const targetY =
      floating +
      mouseTargetY +
      scroll * 0.65;

    const targetZ =
      -scroll * 1.2;


    /* SMOOTH X */

    islandRef.current.position.x +=
      (
        targetX -
        islandRef.current.position.x
      ) * 0.06;


    /* SMOOTH Y */

    islandRef.current.position.y +=
      (
        targetY -
        islandRef.current.position.y
      ) * 0.06;


    /* SMOOTH Z */

    islandRef.current.position.z +=
      (
        targetZ -
        islandRef.current.position.z
      ) * 0.05;

  });


  return (

    <Center>

      <group
        ref={islandRef}
        rotation={[0.38, -1.95, 0]}
      >

        <FloatingIsland
          scale={scale}
        />

      </group>

    </Center>

  );
};


const Scene = ({ isNight }) => {
  return (
    <Canvas
      gl={{
        alpha: true,
        antialias: true,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 10]}
        fov={45}
      />

      {/* =========================
          DAY LIGHTING
      ========================= */}

      {!isNight && (
        <>
          <ambientLight
            intensity={2}
            color="#ffffff"
          />

          <directionalLight
            position={[10, 10, 10]}
            intensity={3}
            color="#ffffff"
          />
        </>
      )}


{/* =========================
    NIGHT LIGHTING #71849d
========================= */}

{isNight && (
  <>
    {/* Soft overall night illumination */}
    <ambientLight
      intensity={1.15}
      color="#65717f"
    />

    {/* Main moonlight */}
    <directionalLight
      position={[-10, 12, 8]}
      intensity={1.8}
      color="#71849d"
    />

    {/* Neutral front fill - keeps details visible */}
    <directionalLight
      position={[3, 2, 10]}
      intensity={0.8}
      color="#d8e1eb"
    />

    {/* Blue rim/highlight */}
    <pointLight
      position={[5, 5, 3]}
      intensity={0.55}
      color="#91b5e4"
      distance={20}
    />
  </>
)}




      <Suspense fallback={<ModelLoader />}>
        <ResponsiveIsland />
      </Suspense>

    </Canvas>
  );
};

export default Scene;