import React, { useEffect, useState, useCallback } from 'react';
import './Header.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

const Header = () => {
  const [scrollOnTop, setScrollOnTop] = useState(true);
  const [shouldOpenMenu, setShouldOpenMenu] = useState(false);

  const onScroll = () => {
    setScrollOnTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const truncated = scrollOnTop ? '' : 'Header--truncated';

  const handleClick = (event) => {
    event.target.classList.toggle('active');
  };

  const isNavLinkActive = (path) =>
    `${window.location.pathname}${window.location.hash}` === path;

  const onBurgerClick = useCallback(() => {
    setShouldOpenMenu(!shouldOpenMenu);
  }, [shouldOpenMenu, setShouldOpenMenu]);

  return (
    <Router>
      <div className={`Header ${truncated}`}>
        <div className="Header-Container">
          <div className="Header-Logo">
            <img src="/assets/header-logo.png" alt=""/>
          </div>
          <div className="Navigation-Container">
            <div className="Mobile-Menu">
              <div className="Mobile-Menu-Burger"
                onClick={ onBurgerClick }>
                <span/>
                <span/>
                <span/>
              </div>
            </div>
            <ul className={`Header-Navigation ${shouldOpenMenu ? 'Header-Navigation--open' : ''}`}
              onClick={ handleClick }>
              <li>
                <NavLink
                  to='/#about'
                  smooth={true}
                  onClick={ onBurgerClick }
                  isActive={() => {
                    return isNavLinkActive('/#about');
                  }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/#registration'
                  smooth={true}
                  onClick={ onBurgerClick }
                  isActive={() => {
                    return isNavLinkActive('/#registration');
                  }}
                >
                  Registration
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/#inspiration'
                  smooth={true}
                  onClick={ onBurgerClick }
                  isActive={() => {
                    return isNavLinkActive('/#inspiration');
                  }}
                >
                  Inspiration
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/#ideas'
                  smooth={true}
                  onClick={ onBurgerClick }
                  isActive={() => {
                    return isNavLinkActive('/#ideas');
                  }}
                >
                  Ideas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/#rules'
                  smooth={true}
                  onClick={ onBurgerClick }
                  isActive={() => {
                    return isNavLinkActive('/#rules');
                  }}
                >
                  Rules
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Header;
