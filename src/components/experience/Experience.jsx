import React from "react";
import "./Experience.scss";
import theme_pattern from "../../assets/theme_pattern.svg";
import fw_logo from "../../assets/experience/fw_logo.png";

const fw_role_description = [
  "Worked on client-facing public web platforms **(floorwalk.in, nps.floorwalk.in)** used by customers and enterprise clients.",
  "Contributed to high-traffic React web applications, focusing on complex forms, validations, and stable UI behavior at scale.",
  "Optimized frontend builds by improving asset handling, code splitting, and dependency usage, reducing production bundle size from **~87 MB to ~13 MB** on one web application.",
  "Improved initial page load performance on a production website, reducing load time from **~5–6 seconds to ~3–4 seconds** through frontend performance optimizations.",
  "Maintained and enhanced existing production codebases, adapting UI frequently to evolving APIs and business requirements.",
  "Developed and maintained **two cross-platform B2B** Flutter applications.",
  "An admin dashboard(**FloorInsights Admin**) for monitoring real-time survey data. An NPS survey application(**FloorInsights**) deployed across client stores, showrooms, and offices.",
  "Applications are actively used by internal employees, managers, enterprise clients, and end customers to capture real-time feedback.",
  "Implemented real-time dashboards using **WebSockets**, along with authentication, form validations, file uploads, charts, and detailed reports.",
  "Built **multi-language UI support (8+ languages)** with real-time on-screen translation and integrated **Firebase notifications** for live updates.",
  "Handled frequent UI and workflow changes driven by API updates and reporting requirements in production environments.",
  "Focused exclusively on frontend architecture, performance, and UI/UX, with no backend ownership.",
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
        )
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
