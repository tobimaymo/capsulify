import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import NavBarCategories from "./NavBarCategories";

const NavBar = () => {
  return (
    <>
      <header className="navbar navcolor border-bottom shadow navbartype fixed-top">
        <div className="container-fluid navbarGrid">
          <div className="sidebarnav">
            <NavBarCategories />
          </div>
          <CartWidget />
        </div>
      </header>
    </>
  );
};

export default NavBar;
