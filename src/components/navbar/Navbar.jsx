import { useState } from "react";
import "./Navbar.scss";
import underline from "../../assets/nav_underline.svg";
import theme_pattern from "../../assets/theme_pattern.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About me" },
    { id: "experience", label: "Experience" },
    { id: "mywork", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="navbar">
      <div className="my-name">
        <h1>Jaseem</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <ul className="nav-menu">
        {navItems.map((item) => (
          <li key={item.id}>
            <AnchorLink
              className="anchor-link"
              href={`#${item.id}`}
              onClick={() => setMenu(item.id)}
            >
              <p>{item.label}</p>
            </AnchorLink>

            {menu === item.id && <img src={underline} alt="underline" />}
          </li>
        ))}
      </ul>

      <AnchorLink
        className="anchor-link"
        href={"#contact"}
        offset={50}
        onClick={() => setMenu("contact")}
      >
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
