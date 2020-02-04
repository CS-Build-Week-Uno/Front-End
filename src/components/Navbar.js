import React from "react";
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content;
  font-weight: 600;
`;

const NavItems = styled.ul`
  margin-left: auto;
  list-style: none;
  margin-top: 0;
`;

const StyledLink = styled(Link)`
    margin-right: 1rem;
    text-decoration: none;
`;

const NavLink = ({to, children}) => (
  <StyledLink to={to} activeStyle={{
    color: 'red'
  }}>{children}</StyledLink>
)


const Navbar = () => {
    return (
      <NavWrapper>
          <span>Don't Die!</span>
          <NavItems>
              <NavLink to='/'>Login</NavLink>
              <NavLink to='/register'>Registration</NavLink>
              <NavLink to= '/home'>Home</NavLink>
              <NavLink to='/dashboard' >Don't Die!</NavLink>
          </NavItems>
      </NavWrapper>
    );
  };
  
  export default Navbar;