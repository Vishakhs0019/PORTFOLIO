import React from 'react';
import './project.css';
import tictak from './assets/tictak.jpg'; 
import button from './assets/button.png';
import news from './assets/newshub.png';
import helmet from './assets/helmet.png'
import { useNavigate } from 'react-router-dom';

function Project() {
  const navigate = useNavigate();

  const handleGameClick = () => {
     <a href="https://vishakhs0019.netlify.app/game"></a>
  };

  return (
    <>
      <section id="works">
        <h2 id="worktitle">MY PROJECTS</h2>
        <span id="workdesc">
          Here are some of my projects that I have Developed
        </span>
        <div id="workimages">
          <div className="img">
            <img src={tictak} alt="work" className="workimg" />
            <h2>TIC TAC TOE</h2>
            <p>I built a Tic Tac Toe game using ReactJS, where two players compete to align three of their symbols in a row.</p>
           <button id="btn" onClick={handleGameClick}><img src={button} alt="work" id="img-button" /></button>
          </div>
          <div className="img">
            <img src={helmet} alt="work" className="workimg" />
            <h2>SHIELDED SKULLS</h2>
            <p>The Shielded Skulls is an online platform designed for the sales and distribution of helmets for all category of customers.
              The system offers a userfriendly interface.
              The System was developed using HTML,CSS,JS af frontend and PHP and MySql as backend.
            </p>
          </div>
          <div className="img">
            <img src={news} alt="work" className="workimg" />
            <h2>NEWS HUB</h2>
            <p>The System tries to automate the activities of a newspaper agency.
              Here the agency is the authority and can easily manage the stafs and customers.
              The System was developed using React JS as frontend and Nodejs,ExpressJs and MongoDB as backend.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
