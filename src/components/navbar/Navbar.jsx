import { useRef, useState } from "react";
import "./Navbar.scss";
import underline from "../../assets/nav_underline.svg";
import theme_pattern from "../../assets/theme_pattern.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("hero");
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuRef.current.style.right = "-350px";
  };

  const handleNavClick = (id) => {
    setMenu(id);
    closeMenu();
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About me" },
    { id: "experience", label: "Experience" },
    { id: "mywork", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="navbar">
      <div className="my-name">
        <h1>Jaseem</h1>
        <img src={theme_pattern} alt="decorative pattern" />
      </div>

      {!isMenuOpen && (
        <img
          src={menu_open}
          alt="Open menu"
          className="nav-mob-open"
          onClick={openMenu}
        />
      )}

      <ul ref={menuRef} className="nav-menu">
        {isMenuOpen && (
          <img
            src={menu_close}
            alt="Close menu"
            className="nav-mob-close"
            onClick={closeMenu}
          />
        )}

        {navItems.map((item) => (
          <li key={item.id}>
            <AnchorLink
              className="anchor-link"
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
            >
              <p>{item.label}</p>
            </AnchorLink>

            {menu === item.id && <img src={underline} alt="active section" />}
          </li>
        ))}
      </ul>

      <AnchorLink
        className="anchor-link"
        href="#contact"
        offset={50}
        onClick={() => handleNavClick("contact")}
      >
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
