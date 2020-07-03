import React from 'react';
import './Header.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Header = ({}) => {
  const handleClick = (event) => {
    event.target.classList.toggle('active');
    console.log(event.target);
  };

  return (
    <div className="Header">
      <ul className="Header-Navigation" onClick={handleClick}>
        <li>
          <NavLink
            to="/#about"
            smooth={true}
            isActive={() => {
              return (
                window.location.pathname + window.location.hash === '/#about'
              );
            }}
          >
            About
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink
            to="/#registration"
            smooth={true}
            isActive={() => {
              return (
                window.location.pathname + window.location.hash ===
                '/#registration'
              );
            }}
          >
            Registration
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink
            to="/#inspiration"
            smooth={true}
            isActive={() => {
              return (
                window.location.pathname + window.location.hash ===
                '/#inspiration'
              );
            }}
          >
            Inspiration
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink
            to="/#ideas"
            smooth={true}
            isActive={() => {
              return (
                window.location.pathname + window.location.hash === '/#ideas'
              );
            }}
          >
            Ideas
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink
            to="/#rules"
            smooth={true}
            isActive={() => {
              return (
                window.location.pathname + window.location.hash === '/#rules'
              );
            }}
          >
            Rules
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
