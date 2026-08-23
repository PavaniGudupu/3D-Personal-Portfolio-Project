import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      {/* LOGO */}

      <div className="navbar-logo">
        PAVANI
      </div>


      {/* DESKTOP NAVIGATION */}

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

        {/* THEME TOGGLE - UI ONLY FOR NOW */}

        <button className="theme-toggle">

          <span className="sun-icon">
            ☀
          </span>

          <span className="toggle-circle">
            🌙
          </span>

        </button>


        {/* MOBILE MENU BUTTON */}

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










// import "../styles/Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">

//       <div className="navbar-logo">
//         PAVANI
//       </div>

//       <div className="navbar-links">
//         <a href="#home" className="active">
//           Home
//         </a>

//         <a href="#about">
//           About
//         </a>

//         <a href="#projects">
//           Projects
//         </a>

//         <a href="#contact">
//           Contact
//         </a>
//       </div>

//       <button className="theme-toggle">
//         ☀️
//       </button>

//     </nav>
//   );
// };

// export default Navbar;








