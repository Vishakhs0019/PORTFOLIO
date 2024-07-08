import React from 'react'
import './navbar.css'
import logo from '../../assets/image.png'


function Navbar() {
  return (
    <>
    <nav id="navbar">
        <img src={logo} alt="loading" id="navbarlogo"/>
        <div id="navitems">
           <a href="/" id="navitemlist">HOME</a>
           <a href="/about" id="navitemlist">ABOUT ME</a>
           
           <a href="/project" id="navitemlist">PROJECTS</a>
           <a href="/contact" id="navitemlist">CONTACT</a>
        </div>
        <a href="/cv.pdf" download="vishakh.pdf"><button id="navbutton">
            RESUME
        </button></a>
        
    </nav>
    </>
  )
}

export default Navbar