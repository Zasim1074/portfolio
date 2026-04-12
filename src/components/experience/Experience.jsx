import React from "react";
import "./Experience.scss";
import theme_pattern from "../../assets/theme_pattern.svg";
import fw_logo from "../../assets/experience/fw_logo.png";

const fw_role_description = [
"Improved React application performance by reducing **bundle size from 70MB → 13MB (-81%)**, decreasing load-time (~6s → ~4s).",
"Identified and resolved performance bottlenecks using Chrome DevTools, reducing **interaction latency (~300ms→ ~150ms)**.",
"Built real-time analytics dashboards using WebSockets, handling high-frequency updates.",
"**Reduced unnecessary component re-renders by ~40–60%** using memoization and state isolation techniques.",
"Designed reusable component structures to reduce duplication and improve feature development speed across modules.",
"Implemented authentication and file upload workflows with secure API integration and error handling.",
"Implemented robust API layer with caching and retries, significantly reducing redundant API calls.",
"Built multi-language **UI system supporting 8+ languages**.",
"Collaborated with backend teams to adapt frontend to evolving APIs.",
"Took ownership of frontend performance optimization initiatives across key application modules.",
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
