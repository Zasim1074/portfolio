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
import { SiBootstrap, SiExpress, SiFlutter } from "react-icons/si";
import { MdOutlineSyncAlt } from "react-icons/md";

const skills = [
  { Icon: FaReact, color: "#61DAFB", name: "React" },
  { Icon: FaJsSquare, color: "#F7DF1E", name: "JavaScript (ES6+)" },
  { Icon: FaHtml5, color: "#E34F26", name: "HTML5" },
  { Icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
  { Icon: SiBootstrap, color: "#7952B3", name: "Bootstrap" },

  { Icon: SiFlutter, color: "#02569B", name: "Flutter" },

  { Icon: FaNode, color: "#339933", name: "Node.js" },
  { Icon: SiExpress, color: "#FFFFFF", name: "Express.js" },

  { Icon: FaServer, color: "#4CAF50", name: "REST APIs" },
  { Icon: MdOutlineSyncAlt, color: "#9C27B0", name: "WebSocket" },

  { Icon: FaGitAlt, color: "#F05032", name: "Git" },
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
              I am a frontend developer specializing in building responsive web
              applications using React and modern JavaScript. I also have
              experience developing cross-platform mobile applications using
              Flutter.
            </p>
            <p>
              My work involves converting UI designs into functional interfaces,
              managing component state, integrating APIs, and writing clean,
              maintainable code. I am currently focused on strengthening my
              frontend fundamentals and preparing for frontend developer roles.
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
