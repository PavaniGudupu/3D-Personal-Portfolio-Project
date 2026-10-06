import Scene from "../components/Scene";
import Navbar from "../components/Navbar";
import {
  FaArrowRight,
  FaDownload,
  FaChevronDown,
} from "react-icons/fa6";

import SocialLinks from "../components/SocialLinks";
import "../styles/Hero.css";
import { useEffect, useRef } from "react";
import usePointer3D from "../hooks/usePointer3D";

const Hero = ({ isNight, setIsNight }) => {

  const heroContentRef = useRef(null);
const pointer = usePointer3D();

useEffect(() => {

  let animationFrame;

  const animate = () => {

    if (heroContentRef.current) {

      const x =
        pointer.current.x * -5;

      const y =
        pointer.current.y * -3;

      heroContentRef.current.style.setProperty(
        "--hero-x",
        `${x}px`
      );

      heroContentRef.current.style.setProperty(
        "--hero-y",
        `${y}px`
      );

    }

    animationFrame =
      requestAnimationFrame(animate);

  };

  animate();

  return () =>
    cancelAnimationFrame(animationFrame);

}, [pointer]);

  return (
    <section
      id="home"
      className={`hero ${isNight ? "night-mode" : "day-mode"}`}
    >

      {/* NAVBAR */}
      <Navbar
        isNight={isNight}
        setIsNight={setIsNight}
      />


      {/* SOCIAL LINKS */}
      <SocialLinks />


      {/* HERO CONTENT */}
      <div
        ref={heroContentRef}
        className="hero-content"
      >

        <p className="hero-small-text">
          Hello, I'm
        </p>

        <h1>
          <span>Pavani</span> Gudupu
        </h1>

        <h2>
          Software Developer
        </h2>

        <p className="hero-description">
          I build modern web applications and enjoy creating
          simple, useful and beautiful digital experiences.
        </p>


        {/* HERO BUTTONS */}
        <div className="hero-buttons">

          {/* VIEW PROJECTS */}
          <button
            className="btn-one"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            View Projects <FaArrowRight />
          </button>


          {/* CONTACT */}
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Contact Me
          </button>


          {/* DOWNLOAD CV */}
          <a
            href="/Pavani_Gudupu_Resume.pdf"
            download
            className="cv-button"
          >
            <FaDownload />
            Download CV
          </a>

        </div>

      </div>


      {/* 3D ISLAND */}
      <div className="hero-3d">
        <Scene isNight={isNight} />
      </div>


      {/* SCROLL INDICATOR */}
      <button
        className="hero-scroll"
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({
              behavior: "smooth",
            });
        }}
        aria-label="Scroll to About section"
      >

        <span className="scroll-mouse">
          <span className="scroll-wheel"></span>
        </span>

        <span className="scroll-text">
          Scroll
        </span>

        <FaChevronDown className="scroll-arrow" />

      </button>

    </section>
  );
};

export default Hero;