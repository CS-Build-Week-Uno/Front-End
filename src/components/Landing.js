import React from "react";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <>
      <h3>
        Welcome to Don't Die. The goal of this game is, you guessed it, to not die. That's not the only thing you'll be guessing. To make to the end of the course you must guess the correct sequence of numbers to pass each section and make your way to the end. Good luck!
      </h3>
      <Link to="/dashboard" className='play'>Play Now</Link>
    </>
  );
};

export default Landing;
