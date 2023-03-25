import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

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
    <>
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
            <div className="navbar-left">
                <Link to={"/capsulify/browse"}>
                <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="LogoCapsulify"/>
                 <span>Capsulify</span>
                </Link>
            </div>
            <div className="navbar-center">
                <Link to={"/capsulify/browse"}>Home</Link>
                <Link to={"/capsulify/artist/BTS"}>BTS</Link>
                <Link to={"/capsulify/artist/Taylor Swift"}>Taylor Swift</Link>
                <a href="#">Link 4</a>
                <a href="#">Link 5</a>
            </div>
            <div className="navbar-right">
                <a href="#">Log In</a>
                <div className="cart-widget">
                <a href="#">
                    <i className="fas fa-shopping-cart"></i>
                    <span>0</span>
                </a>
                </div>
            </div>
        </nav>

    </>
  );
};

export default NavBar;
