import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/image.png';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      <nav id="navbar" className={isActive ? 'active' : ''}>
        <img src={logo} alt="loading" id="navbarlogo" />
        <div id="hamburger" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="navitems">
          <a href="/" id="navitemlist" className="navitem">HOME</a>
          <a href="/about" id="navitemlist" className="navitem">ABOUT ME</a>
          <a href="/project" id="navitemlist" className="navitem">PROJECTS</a>
          <a href="/contact" id="navitemlist" className="navitem">CONTACT</a>
        </div>
        <a href="/cv.pdf" download="vishakh.pdf"><button id="navbutton">
          RESUME
        </button></a>
      </nav>
    </>
  );
}

export default Navbar;
