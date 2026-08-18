// import { Suspense } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import {
//   PerspectiveCamera,
//   Center,
// } from "@react-three/drei";

// import FloatingIsland from "./FloatingIsland";


// const ResponsiveIsland = () => {

//   const { viewport } = useThree();

//   // Change this number if we need to make
//   // the island slightly bigger or smaller.
//   const scale = Math.min(
//     viewport.width * 0.06,
//     viewport.height * 0.06
//   );

//   return (
//     <Center>
//       <FloatingIsland
//         scale={scale}
//       />
//     </Center>
//   );
// };


// const Scene = () => {

//   return (

//     <Canvas
//       gl={{
//         alpha: true,
//         antialias: true,
//       }}
//       style={{
//         width: "100%",
//         height: "100%",
//       }}
//     >

//       <PerspectiveCamera
//         makeDefault
//         position={[0, 0, 10]}
//         fov={45}
//       />

//       <ambientLight intensity={2} />

//       <directionalLight
//         position={[10, 10, 10]}
//         intensity={3}
//       />

//       <Suspense fallback={null}>

//         <ResponsiveIsland />

//       </Suspense>

//     </Canvas>

//   );
// };


// export default Scene;


import { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Center,
} from "@react-three/drei";

import FloatingIsland from "./FloatingIsland";


const ResponsiveIsland = () => {

  const { viewport } = useThree();

  // 🔒 LOCKED RESPONSIVE SCALE
  const scale = Math.min(
    viewport.width * 0.06,
    viewport.height * 0.06
  );

  const islandRef = useRef();

  const mouseX = useRef(0);
  const mouseY = useRef(0);


  /* =========================
     GLOBAL MOUSE MOVEMENT
  ========================= */

  useEffect(() => {

    const handleMouseMove = (event) => {

      mouseX.current =
        (event.clientX / window.innerWidth - 0.5) * 2;

      mouseY.current =
        (event.clientY / window.innerHeight - 0.5) * 2;

    };


    window.addEventListener(
      "mousemove",
      handleMouseMove
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

    };

  }, []);


  /* =========================
     ANIMATION
  ========================= */

useFrame((state) => {

  if (!islandRef.current) return;

  // 🌊 Faster but controlled floating
  const floating =
    Math.sin(state.clock.elapsedTime * 1.8) * 0.12;

  // 🖱️ Stronger mouse movement
  const targetX =
    mouseX.current * 0.28;

  const targetY =
    floating - mouseY.current * 0.18;


  // Smooth horizontal movement
  islandRef.current.position.x +=
    (targetX - islandRef.current.position.x) * 0.06;


  // Smooth vertical movement
  islandRef.current.position.y +=
    (targetY - islandRef.current.position.y) * 0.06;

});


  return (

    <Center>

      <group ref={islandRef}>

        <FloatingIsland
          scale={scale}
        />

      </group>

    </Center>
  );
};


const Scene = () => {

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

      <ambientLight intensity={2} />

      <directionalLight
        position={[10, 10, 10]}
        intensity={3}
      />

      <Suspense fallback={null}>

        <ResponsiveIsland />

      </Suspense>

    </Canvas>

  );
};


export default Scene;