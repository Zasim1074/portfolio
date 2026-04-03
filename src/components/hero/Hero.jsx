import React, { Profiler, useState } from "react";
import profileImage from "../../assets/profile_img.png";
import "./Hero.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = ({ setMenu }) => {
  
  return (
    <div id="hero" className="hero">
      <img src={profileImage} alt="profile-image" />
      <h1>
        <span>I'm Jaseem Quraishi,</span> Frontend Developer (React Web ·
        Flutter Mobile) based in India.
      </h1>
      <p>
        I build responsive web applications using React and modern JavaScript,
        and cross-platform mobile apps using Flutter.
      </p>
      <div className="hero-action">
        <AnchorLink
          className="anchor-link"
          href={"#contact"}
          offset={50}
          onClick={() => setMenu?.("contact")}
        >
          {" "}
          <div className="hero-connect">Connect With Me</div>
        </AnchorLink>
        <a
          className="hero-resume"
          onClick={() => {
            window.open(
              "https://docs.google.com/document/d/1_1lrN_8E4yJmf8emc7gMcQCuBBCk0OOwFdoB7OQY4y4/export?format=pdf",
              "_blank",
            );
          }}
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
