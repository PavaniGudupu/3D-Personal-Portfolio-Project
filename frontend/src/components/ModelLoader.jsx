import { Html, useProgress } from "@react-three/drei";

const ModelLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="model-loader">
        <div className="model-loader-spinner"></div>

        <span>
          {Math.round(progress)}%
        </span>
      </div>
    </Html>
  );
};

export default ModelLoader;