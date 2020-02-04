import React from "react";
import {Link} from 'react-router-dom';
//import styled from 'styled-components';



const Navbar = () => {
    return (
      <div className='nav-wrapper'>
          <span>Don't Die!</span>
          <ul className='nav-items'>
              <Link to='/' classNam="navLink">Login</Link>
              <Link to='/register' classNam="navLink">Registration</Link>
              <Link to= '/home' classNam="navLink">Home</Link>
              <Link to='/dashboard' classNam="navLink" >Don't Die!</Link>
          </ul>
      </div>
    );
  };
  
  export default Navbar;