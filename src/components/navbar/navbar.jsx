import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""} ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-left">
        <Link to={"/capsulify/"}>
          <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="LogoCapsulify" />
          <span>Capsulify</span>
        </Link>
      </div>
      <div className="navbar-center">
        <div className="menu-toggler" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={`menu-links ${menuOpen ? "open" : ""}`}>
          <Link to={"/capsulify/"} onClick={toggleMenu}>
            Home
          </Link>
          <Link to={"/capsulify/artist/BTS"} onClick={toggleMenu}>
            BTS
          </Link>
          <Link to={"/capsulify/artist/Taylor Swift"} onClick={toggleMenu}>
            Taylor Swift
          </Link>
          <a href="#" onClick={toggleMenu}>
            Link 4
          </a>
          <a href="#" onClick={toggleMenu}>
            Link 5
          </a>
          <a href="#" className="log-in-toggler" onClick={toggleMenu}>
            Log In
          </a>
        </div>
      </div>
      <div className="navbar-right">
        <a href="#" className="log-in">
          Log In
        </a>
        <div className="cart-widget">
          <a href="#">
            <i className="fas fa-shopping-cart"></i>
            <span>0</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
