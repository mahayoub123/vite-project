import React, { useState } from "react";
import arrImg from "../../assets/imges/arrowright.svg";
import menue from "../../assets/imges/menu.svg";
import logo from "../../assets/imges/Logo.svg";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className="Container">
        <p className="titleStyle">
          Admission is Open, Grab your seat now <img src={arrImg} alt="arrow" />
        </p>
      </div>
      <div className="navDecoration">
        <div>
          <img src={logo} alt="logo" className="logoContainer" />
        </div>
        <div className="linksContainer">
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Academics</a>
            </li>
            <li>
              <a href="#">Admissions</a>
            </li>
            <li>
              <a href="#">Student Life</a>
            </li>
            <li>
              <a className="btnStyle" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <span
          className="menuIcon"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <img src={menue} alt="menu" />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
