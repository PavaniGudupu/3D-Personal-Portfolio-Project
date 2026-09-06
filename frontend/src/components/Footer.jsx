import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa6";

import "../styles/Footer.css";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

        {/* DECORATIVE CURVED LINES */}
  <div className="footer-curves" aria-hidden="true">
    <span className="footer-curve footer-curve-top"></span>
    <span className="footer-curve footer-curve-left"></span>
    <span className="footer-curve footer-curve-right"></span>
  </div>


      {/* TOP GLOWING LINE */}
      <div className="footer-glow-line">
        <span className="footer-glow-dot"></span>
      </div>


      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <div className="footer-symbol">
            ◇
          </div>

          <h2>
            PAVANI <span>GUDUPU</span>
          </h2>

          <p className="footer-role">
            SOFTWARE DEVELOPER
          </p>

          <div className="footer-tagline">
            <span></span>

            <p>BUILDING A BRIGHTER TOMORROW</p>

            <span></span>
          </div>

        </div>


        {/* NAVIGATION */}

        <nav
          className="footer-nav"
          aria-label="Footer navigation"
        >

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>


        {/* SOCIAL LINKS */}

        <div className="footer-socials">

          <a
            href="https://www.linkedin.com/in/pavani-gudupu-3b795528b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>


          <a
            href="https://github.com/PavaniGudupu"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>


          <a
            href="mailto:pavani9419@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>


        {/* DIVIDER */}

        <div className="footer-divider">

          <span></span>

          <div className="footer-heart">
            ♡
          </div>

          <span></span>

        </div>


        {/* COPYRIGHT */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Pavani Gudupu.
            All rights reserved.
          </p>

          <p className="footer-motto">
            GOOD IDEAS · BETTER SOLUTIONS · BRIGHTER TOMORROW
          </p>

        </div>

      </div>


      {/* BACK TO TOP */}

      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >

        <span className="back-to-top-icon">
          <FaArrowUp />
        </span>

        <span className="back-to-top-text">
          Back to top
        </span>

      </button>


      {/* BACKGROUND DECORATION */}

      <div className="footer-stars" aria-hidden="true">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>

    </footer>
  );
};

export default Footer;