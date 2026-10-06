import { useEffect, useRef } from "react";

const usePointer3D = () => {
  const pointer = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointer.current.x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      pointer.current.y =
        (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );
    };
  }, []);

  return pointer;
};

export default usePointer3D;