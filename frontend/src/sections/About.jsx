import {
  FaGraduationCap,
  FaBriefcase,
  FaBullseye,
  FaStar,
  FaTrophy,
  FaAward,
  FaMedal,
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
    <section
      id="about"
      className={`about ${isNight ? "night-mode" : "day-mode"}`}
    >
      {/* BACKGROUND GLOW */}
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

            {/* Decorative Rings */}
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

            {/* Career Interest Card */}
              <div className="passion-card">

                <span className="career-label">
                  CAREER INTEREST
                </span>

                <strong>
                  Interested in working
                  <br />
                  <b>in the Software Industry</b>
                </strong>

              </div>

          </div>


          {/* =========================
              RIGHT - INFORMATION
          ========================= */}

          <div className="about-info">

            <h3>
              Hi, I'm Pavani, a{" "}
              <span>Computer Science graduate</span>{" "}
              interested in software development.
            </h3>

            <p>
              I have one year of professional experience at Venx IT Solutions,
              where I worked in application support and gained hands-on
              experience with SQL Server, SSMS, software troubleshooting,
              testing and customer support.
            </p>

            <p>
              I'm currently looking for an opportunity in the software industry
              where I can apply what I've learned, gain hands-on development
              experience and continue learning new technologies.
            </p>

            {/* =========================
                DETAILS + ACHIEVEMENT
            ========================= */}

            <div className="about-details-wrapper">

              {/* DETAILS */}

              <div className="about-details">

                {/* EDUCATION */}
                <div className="detail-item">

                  <div className="detail-icon">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <span>Education</span>

                    <p>
                      B.Tech — Computer Science & Data Science
                    </p>
                  </div>

                </div>


                {/* EXPERIENCE */}
                <div className="detail-item">

                  <div className="detail-icon">
                    <FaBriefcase />
                  </div>

                  <div>
                    <span>Experience</span>

                    <p>
                      1 Year — Venx IT Solutions
                    </p>
                  </div>

                </div>


                {/* CAREER FOCUS */}
<div className="detail-item">

  <div className="detail-icon">
    <FaBullseye />
  </div>

  <div>
    <span>Career Goal</span>

    <p>
      Gain hands-on experience & learn new technologies
    </p>
  </div>

</div>

              </div>


              {/* =========================
                  ACHIEVEMENT CARD
              ========================= */}

<div className="about-quote achievement-card">

  <div className="achievement-icon">
    <FaMedal />
  </div>

  <span className="achievement-label">
    RECOGNITION
  </span>

  <strong>
    Star Performer
  </strong>

  <p>
    Venx IT Solutions
    <br />
    May 2026
  </p>

  <div className="achievement-stars">
    <FaStar />
    <FaStar />
    <FaStar />
  </div>

</div>

            </div>

          </div>

        </div>


        {/* =========================
            FACTS / ACHIEVEMENTS
        ========================= */}

        <div className="about-stats">

          {/* EXPERIENCE */}
          <div className="stat-card">
            <FaBriefcase />

            <div>
              <strong>1 Year</strong>
              <span>Professional Experience</span>
            </div>
          </div>


          {/* STAR PERFORMER */}
          <div className="stat-card">
            <FaStar />

            <div>
              <strong>Star Performer</strong>
              <span>Venx IT Solutions</span>
            </div>
          </div>


          {/* AVISHKARA */}
          <div className="stat-card">
            <FaTrophy />

            <div>
              <strong>2nd Place</strong>
              <span>Avishkara</span>
            </div>
          </div>


          {/* CGPA */}
          <div className="stat-card">
            <FaAward />

            <div>
              <strong>8.35</strong>
              <span>B.Tech CGPA</span>
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