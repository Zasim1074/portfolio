import React from "react";

const Footer = () => {
  return (
    <div style={divStyle}>
      <p>© 2026 Jaseem Quraishi. All rights reserved.</p>
    </div>
  );
};

export default Footer;

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
  minHeight: "60px",
};
