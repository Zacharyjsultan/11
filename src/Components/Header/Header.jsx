import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/bio" className="nav-link">
              Bio
            </a>
          </li>
          <li className="nav-item">
            <a href="/resume" className="nav-link">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a href="/testtest12" className="nav-link">
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
