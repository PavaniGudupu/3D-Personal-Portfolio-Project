import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa6";

import "../styles/Footer.css";

const Footer = ({ isNight }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`footer ${isNight ? "night-mode" : "day-mode"}`}
    >
      {/* subtle background decorations */}
      <div className="footer-decoration" aria-hidden="true">
        <span className="footer-orb orb-one"></span>
        <span className="footer-orb orb-two"></span>
        <span className="footer-dot dot-one"></span>
        <span className="footer-dot dot-two"></span>
        <span className="footer-dot dot-three"></span>
      </div>

      <div className="footer-container">

        {/* MAIN ROW */}
        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">
            <h2>
              PAVANI <span>GUDUPU</span>
            </h2>

            <p className="footer-role">
              SOFTWARE DEVELOPER
            </p>

            <p className="footer-description">
              Turning ideas into meaningful digital experiences.
            </p>
          </div>

          {/* NAVIGATION */}
          <nav
            className="footer-nav"
            aria-label="Footer navigation"
          >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* SOCIAL + TOP */}
          <div className="footer-actions">

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

            <button
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="footer-divider"></div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Pavani Gudupu.
            All rights reserved.
          </p>

          <p className="footer-made">
            Made with <FaHeart /> and lots of coffee.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;