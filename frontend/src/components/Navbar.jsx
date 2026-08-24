import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ isNight, setIsNight }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      {/* LOGO */}
      <div className="navbar-logo">
        PAVANI
      </div>


      {/* NAVIGATION LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a
          href="#home"
          className="nav-link active-link"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="#about"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#projects"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>

        <a
          href="#contact"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

      </div>


      {/* RIGHT SIDE */}
      <div className="navbar-right">


        {/* DAY / NIGHT TOGGLE */}
        <button
          className={`theme-toggle ${isNight ? "active" : ""}`}
          onClick={() => setIsNight(!isNight)}
          aria-label="Toggle theme"
        >

          <span className="theme-icon">
            {isNight ? "🌙" : "☀️"}
          </span>

          <span className="theme-circle"></span>

        </button>


        {/* MOBILE MENU */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

    </nav>

  );
};

export default Navbar;