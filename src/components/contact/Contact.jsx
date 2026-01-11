import React from "react";
import "./Contact.scss";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            If you’re looking for someone who understands frontend fundamentals,
            works with APIs, and actually ships features instead of just talking
            about them, feel free to reach out. I’m open to full-time roles,
            freelance work, and serious collaborations.
          </p>
          <div className="contact-details">
            <div
              className="contact-detail"
              onClick={() => {
                window.open("https://github.com/Zasim1074", "_blank");
              }}
            >
              <img src={github_icon} color="white" alt="github_icon" />
              <p>GitHub</p>
            </div>

            <div
              className="contact-detail"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/jaseem-quraishi/",
                  "_blank"
                );
              }}
            >
              <img src={linkedin_icon} alt="linkedin_icon" />
              <p>LinkedIn</p>
            </div>

            <div
              className="contact-detail"
              onClick={() => {
                window.open(
                  "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFdFQrtbzvQXxzZrXbqdThcCVqXbVZBwKtGNzBjFRgJLZJGLVPTbvCctXTCfFBKtgDsvCT"
                );
              }}
            >
              <img src={mail_icon} alt="mail_icon" />
              <p>rdgvszasim@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call_icon" />
              <p>+91 955-5917-856</p>
            </div>

            <div
              className="contact-detail"
              onClick={() => {
                window.open(
                  "https://maps.app.goo.gl/ikFTKudV5zEW1DJJ9",
                  "_blank"
                );
              }}
            >
              <img src={location_icon} alt="location_icon" />
              <p>Indore, India</p>
            </div>
          </div>
        </div>

        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />

          <label htmlFor="">Your Email</label>
          <input type="Email" placeholder="Enter Your Email" name="email" />

          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message..."
          ></textarea>

          <button className="contact-submit" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
