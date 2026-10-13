import { useState } from "react";

import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaLocationDot,
  FaPaperPlane,
  FaArrowUpRightFromSquare,
  FaInstagram 
} from "react-icons/fa6";

import "../styles/Contact.css";

const Contact = ({ isNight }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

  };



const handleSubmit = async (event) => {
  event.preventDefault();

  if (isSubmitting) return;

  setIsSubmitting(true);
  setSubmitStatus({ type: "", message: "" });

  try {
    const response = await fetch("https://formspree.io/f/xppqylzz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      const errorMessage = result.errors
        ?.map((error) => error.message)
        .join(" ");

      throw new Error(
        errorMessage || "Unable to send your message. Please try again."
      );
    }

    setSubmitStatus({
      type: "success",
      message: "Your message has been sent successfully!",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    setSubmitStatus({
      type: "error",
      message:
        error.message ||
        "Something went wrong. Please check your connection and try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
};



  return (

    <section
      id="contact"
      className={`contact ${isNight ? "night-mode" : "day-mode"}`}
    >


      <div className="contact-container">


        {/* =========================
            HEADING
        ========================= */}

        <div className="contact-heading">

          <p className="contact-label">
            <span></span>
            GET IN TOUCH
            <span></span>
          </p>

          <h2>
            Contact <span>Me</span>
          </h2>

          <p className="contact-intro">
            Have a question, an opportunity, or just want to say hello?
            I'm always open to meaningful conversations.
          </p>

        </div>


        {/* =========================
            CONTACT CONTENT
        ========================= */}

        <div className="contact-content">


          {/* CONTACT INFORMATION */}

          <div className="contact-info">


            <a
              href="mailto:pavani9419@gmail.com"
              className="contact-info-card"
            >

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div className="contact-details">
                <span>Email</span>
                <p>pavani9419@gmail.com</p>
              </div>

              <FaArrowUpRightFromSquare className="contact-arrow" />

            </a>



            <a
              href="https://www.linkedin.com/in/pavani-gudupu-3b795528b/"
              target="_blank"
              rel="noreferrer"
              className="contact-info-card"
            >

              <div className="contact-icon">
                <FaLinkedinIn />
              </div>

              <div className="contact-details">
                <span>LinkedIn</span>
                <p>Connect with me</p>
              </div>

              <FaArrowUpRightFromSquare className="contact-arrow" />

            </a>



            <a
              href="https://github.com/PavaniGudupu"
              target="_blank"
              rel="noreferrer"
              className="contact-info-card"
            >

              <div className="contact-icon">
                <FaGithub />
              </div>

              <div className="contact-details">
                <span>GitHub</span>
                <p>View my repositories</p>
              </div>

              <FaArrowUpRightFromSquare className="contact-arrow" />

            </a>


            <a
              href="https://www.instagram.com/pavanigudupu/"
              target="_blank"
              rel="noreferrer"
              className="contact-info-card"
            >

              <div className="contact-icon">
                <FaInstagram />
              </div>

              <div className="contact-details">
                <span>Instagram</span>
                <p>Follow or Contact Me on Instagram</p>
              </div>

              <FaArrowUpRightFromSquare className="contact-arrow" />

            </a>

            <div className="contact-info-card">

              <div className="contact-icon">
                <FaLocationDot />
              </div>

              <div className="contact-details">
                <span>Location</span>
                <p>Visakhapatnam, India</p>
              </div>

            </div>


          </div>


          {/* =========================
              CONTACT FORM
          ========================= */}

          <div className="contact-form-wrapper">

            <div className="contact-form-title">

              <div className="contact-form-icon">
                <FaPaperPlane />
              </div>

              <h3>Send Me a Message</h3>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >


              <div className="contact-form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    Your Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>



{submitStatus.message && (
  <p
    className={`contact-form-status ${submitStatus.type}`}
    role={submitStatus.type === "error" ? "alert" : "status"}
    aria-live="polite"
  >
    {submitStatus.message}
  </p>
)}

<button
  type="submit"
  className="contact-submit"
  disabled={isSubmitting}
>
  <FaPaperPlane />
  {isSubmitting ? "Sending..." : "Send Message"}
</button>



            </form>

          </div>


        </div>

      </div>

    </section>

  );

};


export default Contact;