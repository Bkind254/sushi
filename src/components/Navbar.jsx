import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/menu" className="nav-links">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/food" className="nav-links">
                Food
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="nav-links">
                About us
              </Link>
            </li>
            <li>
              <img src="assets/search.svg" alt="search" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
