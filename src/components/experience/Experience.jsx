import React from "react";
import "./Experience.scss";
import theme_pattern from "../../assets/theme_pattern.svg";
import fw_logo from "../../assets/experience/fw_logo.png";

const fw_role_description = [
  "Built and maintained responsive web applications using React.js, JavaScript (ES6+), HTML, and CSS, ensuring cross-browser compatibility.",
  "Developed 2 fully responsive cross-platform mobile & tablet applications using Flutter, deployed for internal/client use.",
  "Integrated REST APIs and WebSockets to handle real-time data updates and dynamic UI rendering",
  "Created reusable UI components and Flutter widgets to improve development speed and maintain consistency.",
  "Collaborated with backend developers and designers to deliver production-ready features under tight deadlines.",
  "Focused purely on frontend architecture, performance optimization, and UI/UX, no backend ownership.",
];

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="experience-title">
        <h1>Experience</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>

      <div className="role">
        <div className="role-company">
          <img src={fw_logo} alt="fw_logo" />
          <div className="company-detail">
            <h1>Frontend Developer</h1>
            <h3>FloorWalk Consultant Pvt. Ltd.</h3>
            <p>Aug 2025 - Present</p>
          </div>
        </div>

        <div className="role-description">
          <hr />
          <ul>
            {fw_role_description.map((description, idx) => (
              <li key={idx}>{description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
