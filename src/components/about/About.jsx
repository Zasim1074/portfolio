import React from "react";
import "./About.scss";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.png";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNode,
  FaReact,
  FaServer,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiFlutter,
  SiNextdotjs,
  SiPostman,
  SiReactquery,
  SiTypescript,
} from "react-icons/si";
import { MdOutlineSyncAlt } from "react-icons/md";
import { FaDiagramNext, FaT } from "react-icons/fa6";
const skills = [
  { Icon: FaReact, color: "#61DAFB", name: "React" },
  { Icon: SiNextdotjs, color: "#000000", name: "Next.js" },
  { Icon: FaJsSquare, color: "#F7DF1E", name: "JavaScript (ES6+)" },
  { Icon: SiTypescript, color: "#007ACC", name: "TypeScript" },

  // 🔥 ADD HERE (near React, not at bottom)
  { Icon: SiReactquery, color: "#FF4154", name: "React Query" },

  { Icon: FaHtml5, color: "#E34F26", name: "HTML5" },
  { Icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
  { Icon: SiBootstrap, color: "#7952B3", name: "Bootstrap" },

  { Icon: SiFlutter, color: "#02569B", name: "Flutter" },

  { Icon: FaServer, color: "#4CAF50", name: "REST APIs" },
  { Icon: MdOutlineSyncAlt, color: "#9C27B0", name: "WebSocket" },

  { Icon: FaGitAlt, color: "#F05032", name: "Git" },
  { Icon: SiPostman, color: "#FF6C37", name: "Postman" },
];

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="theme_pattern" />
        </div>

        <div className="about-section">
          <div className="about-img">
            <img src={about_profile} alt="" />
          </div>
          <div className="about-para">
            <hr />
            <p>
              I’m a frontend engineer focused on building scalable,
              production-grade web applications using React and modern
              JavaScript. My work involves optimizing performance, handling
              complex state and real-time data, and building reliable UI systems
              for production environments. I’ve significantly reduced bundle
              sizes and improved load performance in live applications used by
              enterprise clients.
            </p>
            <p>
              I also have experience developing cross-platform B2B mobile
              applications using Flutter, including real-time dashboards and
              feedback systems deployed across multiple client environments. I’m
              currently focused on deepening my expertise in frontend
              architecture, performance optimization, and building systems that
              scale efficiently.
            </p>
          </div>
        </div>

        <div className="skills-marquee">
          <div className="skills-track">
            {[...skills, ...skills].map(({ Icon, color, name }, index) => (
              <div
                className="skill-item"
                key={index}
                style={{ "--icon-color": color }}
                data-skill={name}
              >
                <Icon />
                <span className="skill-label">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
