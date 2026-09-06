

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiPostgresql,
  SiThreedotjs,
} from "react-icons/si";

import {
  FaArrowUpRightFromSquare,
  FaGithub,
} 
from "react-icons/fa6";

import "../styles/Projects.css";


const projects = [
  {
    number: "01",
    title: "Inventory Management",
    category: "Full Stack Web Application",
    description:
      "A responsive inventory management application designed to manage products, categories and data efficiently.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/PavaniGudupu/React-Inventory-ProductList",
    live: "https://stateful-ui-search-page-persistence.vercel.app/",
  },

  {
    number: "02",
    title: "CodeLess Studio Web",
    category: "Web Application",
    description:
      "A modern platform concept focused on simplifying application development through a clean and user-friendly experience.",
    tech: ["React", "JavaScript", "Node.js"],
    github: "https://github.com/PavaniGudupu/CodeLess-Studio-Web",
    // live: "#",
  },

  {
    number: "03",
    title: "Personal Portfolio",
    category: "Creative Development",
    description:
      "A responsive personal portfolio combining modern UI design, interactive experiences and a 3D visual environment.",
    tech: ["React", "Three.js", "CSS"],
    github: "#",
    live: "#",
  },
];


const Projects = ({ isNight }) => {

  return (

    <section
      id="projects"
      className={`projects ${isNight ? "night-mode" : "day-mode"}`}
    >

      {/* BACKGROUND DECORATION */}

      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

{/* CURVED TOP DIVIDER */}

<div className="projects-wave projects-wave-top">
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    aria-hidden="true"
  >

    <path
      d="M0,35
         C240,100 430,0 720,45
         C980,85 1170,5 1440,35"
    />
    <span className="wave-dot wave-dot-three"></span>
  </svg>

  <span className="wave-dot wave-dot-one"></span>
<span className="wave-dot wave-dot-two"></span>
</div>


{/* FLOATING TECHNOLOGIES */}

<div className="floating-tech" aria-hidden="true">

  <div className="tech-object tech-react">
    <FaReact />
  </div>

  <div className="tech-object tech-node">
    <FaNodeJs />
  </div>

  <div className="tech-object tech-postgres">
    <SiPostgresql />
  </div>

  <div className="tech-object tech-github">
    <FaGithub />
  </div>

  <div className="tech-object tech-three">
    <SiThreedotjs />
  </div>

  <div className="tech-object tech-js">
    <SiJavascript />
  </div>

  <div className="tech-object tech-html">
    <FaHtml5 />
  </div>

  <div className="tech-object tech-css">
    <FaCss3Alt />
  </div>

</div>


      <div className="projects-container">


        {/* =================================
            SECTION HEADING
        ================================= */}

        <div className="projects-heading">

          <p className="section-label">
            <span></span>
            MY CREATIVE WORK
            <span></span>
          </p>

          <h2>
            Selected <span>Projects</span>
          </h2>

          <p className="projects-intro">
            A collection of projects where ideas, design and code
            come together to create useful digital experiences.
          </p>

        </div>



        {/* =================================
            PROJECT SHOWCASE
        ================================= */}

        <div className="projects-showcase">


          {/* DECORATIVE 3D ACCENT */}

          <div className="project-orbit">

            <div className="orbit-ring orbit-ring-one"></div>

            <div className="orbit-ring orbit-ring-two"></div>

            <div className="orbit-dot"></div>

          </div>



          {/* PROJECT CARDS */}

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >

                {/* CARD TOP */}

                <div className="project-card-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>


                {/* PROJECT CONTENT */}

                <div className="project-card-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  {/* TECHNOLOGIES */}

                  <div className="project-tech">

                    {project.tech.map((technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    ))}

                  </div>

                </div>


                {/* CARD FOOTER */}

                <div className="project-card-footer">

                  <a
                    href={project.github}
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>


                  <a
                    href={project.live}
                    aria-label={`${project.title} live demo`}
                  >
                    <span>Live Demo</span>
                    <FaArrowUpRightFromSquare />
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>


        {/* =================================
            BOTTOM MESSAGE
        ================================= */}

        <div className="projects-bottom">

          <span></span>

          <p>
            More ideas are always <strong>in progress...</strong>
          </p>

          <span></span>

        </div>


      </div>
      {/* CURVED TOP DIVIDER */}

<div className="projects-wave projects-wave-top">
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M0,35
         C240,100 430,0 720,45
         C980,85 1170,5 1440,35"
    />
  </svg>
</div>


{/* FLOATING TECHNOLOGIES */}

<div className="floating-tech" aria-hidden="true">

  <div className="tech-object tech-react">
    <FaReact />
  </div>

  <div className="tech-object tech-node">
    <FaNodeJs />
  </div>

  <div className="tech-object tech-postgres">
    <SiPostgresql />
  </div>

  <div className="tech-object tech-github">
    <FaGithub />
  </div>

  <div className="tech-object tech-three">
    <SiThreedotjs />
  </div>

  <div className="tech-object tech-js">
    <SiJavascript />
  </div>

  <div className="tech-object tech-html">
    <FaHtml5 />
  </div>

  <div className="tech-object tech-css">
    <FaCss3Alt />
  </div>

</div>

{/* CURVED BOTTOM DIVIDER */}

<div className="projects-wave projects-wave-bottom">
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M0,80
         C250,115 430,15 720,65
         C980,110 1190,30 1440,60"
    />
  </svg>
</div>

    </section>

  );
};


export default Projects;