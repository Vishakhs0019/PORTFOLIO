import React from 'react'
import './about.css'
import webb from '../../assets/web.jpg'
import uii from '../../assets/ui.jpeg'
import js from '../../assets/js.webp'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import react from '../../assets/react.png'
import php from '../../assets/php.jpg'
import mongo from '../../assets/mongo.png'
import sql from '../../assets/sql.png'
function About() {
  return (
  <>
    <div id="aboutmain">
      <span id="skilltitle">ABOUT ME</span>
      <p id="skilldesc">
        
      I am a self-taught web developer and MCA graduate with a passion for creating beautiful and functional websites. I thrive on continually learning new techniques and technologies to enhance my skills and deliver outstanding web experiences.
      </p>
      <div id="skillbars">
        <div className="skillbar">
          <img src={uii} alt="Design" className="skillbarimage" />
          <div className="skillbartext">
            <h2>UI/UX</h2>
            <p>As a UI/UX designer, I love making websites and apps that are both easy to use and look great. I start by learning what users want through research. Then, I design and improve prototypes to make sure everything is simple and intuitive. By working closely with teams, I make sure our designs work well when they're built, so people enjoy using them.</p>
          </div>
        </div>

        <div className="skillbar">
          <img src={webb} alt="Web Development" className="skillbarimage" />
          <div className="skillbartext">
            <h2>WEB </h2>
            <h2>DEVELOPMENT</h2>
            <p id="para">As a web developer, my primary role is to build and maintain websites and web applications using
              languages like HTML, CSS, and JavaScript to create the structure, style, and functionality of web pages. I work on both the frontend,and the backend.
              My tasks include designing user interfaces, ensuring websites work well on different devices , optimizing performance, and implementing features that enhance user experience and functionality. 

</p>
          </div>
        </div>
      </div>

    </div>
    <div id="skill">
    <img src={html} alt="Design" className="skillbarimage" />
    <img src={css} alt="Design" className="skillbarimage" />
    <img src={js} alt="Design" className="skillbarimage" />
    <img src={react} alt="Design" className="skillbarimage" />
    <img src={php} alt="Design" className="skillbarimage" />
    <img src={sql} alt="Design" className="skillbarimage" />
    <img src={mongo} alt="Design" className="skillbarimage" />
    </div>
    </>
  )
}

export default About
