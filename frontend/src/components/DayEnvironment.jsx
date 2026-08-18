import { Sky, Cloud } from "@react-three/drei";

const DayEnvironment = () => {
  return (
    <>
      {/* Day sky */}
      <Sky
        distance={450000}
        sunPosition={[100, 20, 100]}
        inclination={0.5}
        azimuth={0.25}
        turbidity={2}
        rayleigh={1}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />

      {/* Soft clouds */}

      <Cloud
        position={[-4, 4, -5]}
        scale={2}
        opacity={0.7}
        speed={0.2}
      />

      <Cloud
        position={[4, 5, -6]}
        scale={1.8}
        opacity={0.65}
        speed={0.15}
      />

      <Cloud
        position={[1, 7, -8]}
        scale={1.5}
        opacity={0.5}
        speed={0.1}
      />
    </>
  );
};

export default DayEnvironment;