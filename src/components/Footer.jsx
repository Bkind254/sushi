import React from "react";
import "./Footer.css";
import FACEBOOK from "../assets/facebook.svg";
import INSTAGRAM from "../assets/instagram.svg";
import TWITTER from "../assets/twitter.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer flex-between">
        <h3 className="footer__logo">
          <span>Sushi</span>man
        </h3>

        <ul className="footer__nav">
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#food">Food</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
        </ul>

        <ul className="footer__social">
          <li className="flex-center">
            <img src={FACEBOOK} alt="facebook" />
          </li>
          <li className="flex-center">
            <img src={INSTAGRAM} alt="instagram" />
          </li>
          <li className="flex-center">
            <img src={TWITTER} alt="twitter" />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
