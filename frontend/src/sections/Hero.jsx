import Scene from "../components/Scene";
import Environment from "../components/Environment";
import Navbar from "../components/Navbar";

import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      {/* FULL SCREEN BACKGROUND */}
      <Environment />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO CONTENT */}
      <div className="hero-content">

        <p className="hero-small-text">
          Hello, I'm
        </p>

        <h1>
          Pavani Gudupu
        </h1>

        <h2>
          Software Developer
        </h2>

        <p className="hero-description">
          I build modern web applications and enjoy creating
          simple, useful and beautiful digital experiences.
        </p>

        <div className="hero-buttons">
          <button>
            View Projects
          </button>

          <button>
            Contact Me
          </button>
        </div>

      </div>

      {/* 3D ISLAND */}
      <div className="hero-3d">
        <Scene />
      </div>

    </section>
  );
};

export default Hero;