import React, { Profiler, useState } from "react";
import profileImage from "../../assets/profile_img.png";
import "./Hero.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = ({ setMenu }) => {
  return (
    <div id="hero" className="hero">
      <img src={profileImage} alt="profile-image" />

      <h1>
        <span>I'm Jaseem Quraishi,</span> a Frontend Engineer building
        high-performance <span>React & Next.js Applications.</span>
      </h1>

      <p>
        Built high-performance web apps with real-time features, reducing bundle
        size by <strong>80%+</strong> and improving production load times.
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
