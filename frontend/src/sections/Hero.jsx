import Scene from "../components/Scene";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";

import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      {/* NAVBAR */}
      <Navbar />

      {/* SOCIAL LINKS */}
       <SocialLinks />

      {/* HERO CONTENT */}
      <div className="hero-content">

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

        <div className="hero-buttons">
          <button className="btn-one">
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