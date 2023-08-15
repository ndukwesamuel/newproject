import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="nav-brand" href="/">
        My Website
      </a>

      <ul className="navbar-links">
        <li className="navbar-link"> Home </li>
        <li className="navbar-link"> About </li>
        <li className="navbar-link"> Services </li>
        <li className="navbar-link"> Contact </li>
      </ul>
    </nav>
  );
}

export default Navbar;
