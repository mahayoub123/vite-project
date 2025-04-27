import React from "react";
import "./Footer.css";
import logo from "../../assets/imges/logo.svg";
import emailIcon from "../../assets/imges/mail.svg";
import phoneIcon from "../../assets/imges/phone.svg";
import locationIcon from "../../assets/imges/location.svg";
import facbookIcon from "../../assets/imges/facebook.svg";
import twitterIcon from "../../assets/imges/twitter.svg";
import linkedinIcon from "../../assets/imges/linkedin.svg";
const Footer = () => {
  return (
    <footer className="footerStyle">
      <div className="links">
        <div className="footerContainer">
          {" "}
          <img src={logo} alt="logo" />
          <p className="footerText">
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
          <div className="footerIconContainer">
            <img src={emailIcon} alt="emailIcon" />
            <p>hello@littlelearners.com</p>
          </div>
          <div className="footerIconContainer">
            <img src={phoneIcon} alt="phoneIcon" />
            <p>+91 91813 23 2309</p>
          </div>
          <div className="footerIconContainer">
            <img src={locationIcon} alt="locationIcon" />
            <p>Somewhere in the World</p>
          </div>
        </div>
        <div className="homeLinks">
          <ul className="listStyle">
            <li>
              <a className="style">Home</a>
            </li>
            <li>
              <a className="footerLinkStyle" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="footerLinkStyle" href="#">
                Our Testimonials
              </a>
            </li>
            <li>
              <a className="footerLinkStyle" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="aboutUsLinks">
          <ul className="listStyle">
            <li>
              <a className="style">About Us</a>
            </li>
            <li>
              <a className="footerLinkStyle" href="#">
                Our Mission
              </a>
            </li>
            <li>
              <a className="footerLinkStyle" href="#">
                Our Vission
              </a>
            </li>
            <li>
              <a className="footerLinkStyle" href="#">
                Awards and Recognitions
              </a>
            </li>
            <li>
              <a className="footerLinkStyle" href="#">
                History
              </a>
            </li>
            <li>
              <a className="footerLinkStyle" href="#">
                Teachers
              </a>
            </li>
          </ul>
        </div>
        <div className="acadimicsLinks">
          <ul className="listStyle">
            <li>
              <a className="style">Academics</a>
            </li>
            <li>
              <a className="footerLinkStyle" href="#">
                Special Features
              </a>
            </li>
            <li>
              <a className="footerLinkStyle" href="#">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        <div className="contactUsLinks">
          <ul className="listStyle">
            <li>
              <a className="style">Contact Us</a>
            </li>
            <li>
              <a className="footerLinkStyle" href="#">
                Information
              </a>
            </li>
            <li>
              <a className="footerLinkStyle" href="#">
                Map & Direction
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lastContainer">
        <p className="footerTextStyle">
          Terms of Service| Privacy Policy|Cookie Policy
        </p>
        <div>
          <img src={facbookIcon} alt="facbookIcon" />
          <img src={twitterIcon} alt="twitterIcon" />
          <img src={linkedinIcon} alt="linkedinIcon" />
        </div>
      </div>
      <div>
        <p className="copyRightsStyle">
          Copyright © [2023] Little Learners Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
