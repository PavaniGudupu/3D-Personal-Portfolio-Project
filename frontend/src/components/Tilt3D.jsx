import { useRef } from "react";

const Tilt3D = ({
  children,
  className = "",
  strength = 5,
}) => {
  const elementRef = useRef(null);

  const handlePointerMove = (event) => {
    const element = elementRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * strength * 2;
    const rotateX = (0.5 - y) * strength * 2;

    element.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)`;
  };

  const handlePointerLeave = () => {
    if (!elementRef.current) return;

    elementRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={elementRef}
      className={`tilt-3d ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
};

export default Tilt3D;