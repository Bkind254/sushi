import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="header__nav">
          <div className="header__logo">
            <h4 data-aos="fade-down">Sushiman</h4>
            <div className="header__logo-overlay"></div>
          </div>
          <ul className="header__menu" data-aos="fade-down">
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
            {/*
            <li>
              <Link to="/hero">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/food">Food</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <img src="../../src/assets/search.svg" alt="search" />
            </li>*/}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
