import React, { useState } from "react";
import "./Contact.scss";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const myAccessKey = import.meta.env.VITE_WEB3FORMS_KEY;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setAlert({
        show: true,
        message: "Please fill in all fields before submitting.",
        type: "error",
      });

      setTimeout(() => {
        setAlert({ show: false, message: "", type: "" });
      }, 3000);

      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", myAccessKey);

    try {
      setLoading(true);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        setLoading(false);
        setAlert({
          show: true,
          message: "Message sent successfully. I’ll respond within 24 hours.",
          type: "success",
        });
      } else {
        setLoading(false);
        setAlert({
          show: true,
          message: "Failed to send message. Please try again later.",
          type: "error",
        });
        throw new Error("Submission failed");
      }
    } catch (error) {
      setLoading(false);
      setAlert({
        show: true,
        message: "Something went wrong. Please try again.",
        type: "error",
      });
    }

    setTimeout(() => {
      setAlert({ show: false, message: "", type: "" });
    }, 4000);
  };

  return (
    <div id="contact" className="contact">
      {alert.show && (
        <div className={`contact-alert ${alert.type}`}>{alert.message}</div>
      )}

      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>

          <p>
            Open to frontend roles and ready to contribute immediately. I build
            scalable, high-performance UI systems—reach out if you’re hiring,
            collaborating, or building something meaningful.
          </p>

          <div className="contact-details">
            <a
              href="https://maps.app.goo.gl/ikFTKudV5zEW1DJJ9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={location_icon} alt="location_icon" />
              <p>Indore, India</p>
            </a>

            <a
              href="https://github.com/Zasim1074"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github_icon} alt="github" />
              <p>GitHub</p>
            </a>

            <a
              href="https://www.linkedin.com/in/jaseem-quraishi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin_icon} alt="linkedin" />
              <p>LinkedIn</p>
            </a>

            <a href="mailto:rdgvszasim@gmail.com">
              <img src={mail_icon} alt="email" />
              <p>Email</p>
            </a>

            <a href="tel:+919555917856">
              <img src={call_icon} alt="Call Jaseem" />
              <p>+91 95559 17856</p>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          {/* <p className="availability">Available for immediate opportunities</p> */}

          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            required
          />

          <label htmlFor="">Your Email</label>
          <input
            type="Email"
            placeholder="Enter Your Email"
            name="email"
            required
          />

          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message..."
            required
          ></textarea>

          <button disabled={loading} className="contact-submit" type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
