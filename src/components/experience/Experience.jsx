import React from "react";
import "./Experience.scss";
import theme_pattern from "../../assets/theme_pattern.svg";
import fw_logo from "../../assets/experience/fw_logo.png";

const fw_role_description = [
  "Built and maintained **high-traffic client-facing platforms (floorwalk.in, nps.floorwalk.in)** used by enterprise clients and end customers.",

  "Developed scalable **React applications with complex forms, validations, and dynamic UI** driven by evolving APIs.",

  "Reduced production bundle size from **~87 MB to ~13 MB** by optimizing asset handling, code splitting, and dependencies.",

  "Improved initial page load time from **~5–6 seconds to ~3–4 seconds** through frontend performance optimizations.",

  "Built and maintained **two cross-platform B2B Flutter applications** for real-time survey and feedback systems.",

  "Developed an admin dashboard (**FloorInsights Admin**) for real-time analytics and an NPS application (**FloorInsights**) deployed across stores and offices.",

  "Implemented **real-time dashboards using WebSockets**, including authentication, file uploads, charts, and reporting features.",

  "Built **multi-language support (8+ languages)** with dynamic translations and integrated **Firebase notifications** for live updates.",

  "Adapted quickly to **frequent API and product requirement changes** in production environments.",
];

const HighlightedText = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <span>
      {parts.map((part, index) =>
        part.startsWith("**") ? (
          <strong key={index} className="highlight">
            {part.replace(/\*\*/g, "")}
          </strong>
        ) : (
          part
        ),
      )}
    </span>
  );
};

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
              <li key={idx}>
                {" "}
                <HighlightedText text={description} />{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
