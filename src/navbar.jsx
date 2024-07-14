import React, { useState } from 'react';
import './navbar.css';
import logo from './assets/image.png';
import { Link } from 'react-scroll'
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
        <Link className='navitem' id="navitemlist" activeClass='active' to='homepage' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        <Link className='navitem' id="navitemlist" activeClass='active' to='aboutmain' spy={true} smooth={true} offset={-50} duration={500}>About</Link>
        <Link className='navitem'  id="navitemlist"activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
        <Link className='navitem'  id="navitemlist"activeClass='active' to='container' spy={true} smooth={true} offset={-50} duration={500}>Contact</Link>
        </div>
        <a href="/cv.pdf" download="vishakh.pdf"><button id="navbutton">
          RESUME
        </button></a>
      </nav>
    </>
  );
}

export default Navbar;
