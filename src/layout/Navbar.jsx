import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">
          <img src="/LOGOKASA.png" alt="logo" />
        </NavLink>
      </div>
      <div className="navig">
        <div className="accueil">
          <NavLink to="/">Accueil</NavLink>
        </div>
        <div className="apropos">
          <NavLink to="/about">A Propos</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;