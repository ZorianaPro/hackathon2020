import React from 'react';
import './Header.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Header = ({ }) => {
  return (
    <div className="Header">
      <ul>
        <li>
          <NavLink to="/#about" smooth={true}>About</NavLink>
        </li>
        <li>
          <NavLink to="/#registration" smooth={true}>Registration</NavLink>
        </li>
        <li>
          <NavLink to="/#inspiration" smooth={true}>Inspiration</NavLink>
        </li>
        <li>
          <NavLink to="/#ideas" smooth={true}>Ideas</NavLink>
        </li>
        <li>
          <NavLink to="/#rules" smooth={true}>Rules</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
