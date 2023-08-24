import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Імпортуємо файл стилів для Navbar

function Navbar() {
  return (
    <nav>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/page1">Publications</Link>
        </li>
        <li className="navbar-item">
          <Link to="/page2">Photos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/page3">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
