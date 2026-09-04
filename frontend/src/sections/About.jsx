import {
  FaGraduationCap,
  FaBriefcase,
  FaLocationDot,
  FaCode,
  FaTrophy,
  FaRocket,
  FaHeart,
} from "react-icons/fa6";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { SiExpress, SiMysql } from "react-icons/si";

import "../styles/About.css";

const About = ({ isNight }) => {
  return (
    // <section
    //   id="about"
    //   className={`about ${isNight ? "about-night" : "about-day"}`}
    // >

    <section
        id="about"
        className={`about ${isNight ? "night-mode" : "day-mode"}`}
    >

      {/* =========================
          BACKGROUND DECORATION
      ========================= */}

      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>


      <div className="about-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="about-heading">

          <p className="section-label">
            <span></span>
            GET TO KNOW ME
            <span></span>
          </p>

          <h2>
            About <span>Me</span>
          </h2>

        </div>


        {/* =========================
            MAIN CONTENT
        ========================= */}

        <div className="about-main">


          {/* =========================
              LEFT - IMAGE
          ========================= */}

          <div className="about-visual">

            {/* Decorative rings */}

            <div className="about-ring ring-one"></div>
            <div className="about-ring ring-two"></div>
            <div className="about-ring ring-three"></div>


            {/* Photo */}

            <div className="about-photo-frame">

              <img
                src="/pavani-about.png"
                alt="Pavani Gudupu"
              />

            </div>


            {/* Signature */}

            <div className="about-signature">
              Pavani
            </div>


            {/* Passion card */}

            <div className="passion-card">

              <span>
                Passionate about
              </span>

              <strong>
                Turning Ideas into
                <br />
                <b>Digital Reality ✨</b>
              </strong>

            </div>

          </div>



          {/* =========================
              RIGHT - CONTENT
          ========================= */}

          <div className="about-info">

            <h3>
              I'm Pavani, a passionate{" "}
              <span>Software Developer.</span>
            </h3>


            <p>
              I love building modern, responsive and user-friendly
              web applications. I enjoy transforming ideas into
              meaningful digital experiences.
            </p>

            <p>
              I'm constantly learning and exploring new technologies
              to improve my skills and create solutions that make
              a difference.
            </p>



            {/* =========================
                DETAILS + QUOTE
            ========================= */}

            <div className="about-details-wrapper">


              {/* DETAILS */}

              <div className="about-details">

                <div className="detail-item">

                  <div className="detail-icon">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <span>Education</span>
                    <p>
                      B.Tech in Computer Science & Engineering
                    </p>
                  </div>

                </div>


                <div className="detail-item">

                  <div className="detail-icon">
                    <FaBriefcase />
                  </div>

                  <div>
                    <span>Experience</span>
                    <p>
                      Building projects and real-world solutions
                    </p>
                  </div>

                </div>


                <div className="detail-item">

                  <div className="detail-icon">
                    <FaLocationDot />
                  </div>

                  <div>
                    <span>Location</span>
                    <p>
                      Visakhapatnam, India
                    </p>
                  </div>

                </div>

              </div>



              {/* QUOTE */}

              {/* <div className="about-quote">

                <div className="quote-mark">
                  “
                </div>

                <p>
                  Code is not just what I write,
                  <br />
                  it's how I solve problems and
                  <br />
                  <span>create impact.</span>
                </p>

                <div className="quote-line"></div>

              </div> */}

            </div>


          </div>

        </div>



        {/* =========================
            STATS
        ========================= */}

        <div className="about-stats">

          <div className="stat-card">

            <FaCode />

            <div>
              <strong>10+</strong>
              <span>Projects</span>
            </div>

          </div>


          <div className="stat-card">

            <FaTrophy />

            <div>
              <strong>2+</strong>
              <span>Years Learning</span>
            </div>

          </div>


          <div className="stat-card">

            <FaRocket />

            <div>
              <strong>100+</strong>
              <span>Problems Solved</span>
            </div>

          </div>


          <div className="stat-card">

            <FaHeart />

            <div>
              <strong>100%</strong>
              <span>Dedication</span>
            </div>

          </div>

        </div>



        {/* =========================
            TECH STACK
        ========================= */}

        <div className="tech-stack">

          <div className="tech-title">
            TECH STACK
          </div>


          <div className="tech-list">

            <div className="tech-item">
              <FaHtml5 />
              <span>HTML</span>
            </div>

            <div className="tech-item">
              <FaCss3Alt />
              <span>CSS</span>
            </div>

            <div className="tech-item">
              <FaJsSquare />
              <span>JavaScript</span>
            </div>

            <div className="tech-item">
              <FaReact />
              <span>React</span>
            </div>

            <div className="tech-item">
              <FaNodeJs />
              <span>Node.js</span>
            </div>

            <div className="tech-item">
              <SiExpress />
              <span>Express.js</span>
            </div>

            <div className="tech-item">
              <SiMysql />
              <span>SQL</span>
            </div>

            <div className="tech-item">
              <FaGitAlt />
              <span>Git</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;