import React from "react";
import "./Header.css";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { scrollElToCenter } from "../../support/handlers"

const Header = ({}) => {
  const handleClick = (event) => {
    event.target.classList.toggle("active");
  };

  const isNavLinkActive = (path) =>
    `${window.location.pathname}${window.location.hash}` === path;

  return (
    <Router>
      <div className="Header">
        <ul className="Header-Navigation" onClick={handleClick}>
          <li>
            <NavLink
              to="/#about"
              smooth={true}
              scroll={el => scrollElToCenter(el)}
              isActive={() => {
                return isNavLinkActive("/#about");
              }}
            >
              About
            </NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink
              to="/#registration"
              scroll={el => scrollElToCenter(el)}
              smooth={true}
              isActive={() => {
                return isNavLinkActive("/#registration");
              }}
            >
              Registration
            </NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink
              to="/#inspiration"
              scroll={el => scrollElToCenter(el)}
              smooth={true}
              isActive={() => {
                return isNavLinkActive("/#inspiration");
              }}
            >
              Inspiration
            </NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink
              to="/#ideas"
              scroll={el => scrollElToCenter(el)}
              smooth={true}
              isActive={() => {
                return isNavLinkActive("/#ideas");
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
              scroll={el => scrollElToCenter(el)}
              isActive={() => {
                return isNavLinkActive("/#rules");
              }}
            >
              Rules
            </NavLink>
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default Header;
