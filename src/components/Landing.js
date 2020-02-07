import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components"




const Landing = () => {
  return (
    <div style={{ border:"3px dashed black", margin:"1rem", height:"60%"}}>
      <div className="landingWrapper" style={{padding:'2rem'}}>
      <h3>
        Welcome to Don't Die. The goal of this game is, you guessed it, to not die. That's not the only thing you'll be guessing. To make to the end of the course you must guess the correct sequence of numbers to pass each section and make your way to the end. Good luck!
      </h3>
      <Link className="playButton" style={{border:"2px solid white", backgroundColor:'light-blue', padding:"1.3rem", fontSize:"1.3rem", margin:"auto", textDecoration:"none", color:"white",  }} to="/dashboard" className='play'>Play Now</Link>
      </div>
    </div>
  );
};

export default Landing;
