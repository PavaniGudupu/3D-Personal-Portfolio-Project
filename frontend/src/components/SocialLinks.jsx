import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import {
  HiOutlineMail,
} from "react-icons/hi";

import "../styles/SocialLinks.css";


const SocialLinks = () => {

  return (

    <div className="social-links">

      <div className="social-icons">

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
          <HiOutlineMail />
        </a>

      </div>

      <div className="social-line"></div>

    </div>

  );
};

export default SocialLinks;

