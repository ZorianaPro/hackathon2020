import React, { useCallback } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import * as addNewIdea from "../AddNewIdea/actions";
import { useDispatch } from "react-redux";
import "./Registration.css";
import Button from "../Button";
import {BrowserRouter as Router} from "react-router-dom";

const Registration = ({ dispatch }) => {

  dispatch = useDispatch();

  const openAddNewIdeaOverlay = useCallback(() => {
    dispatch(addNewIdea.open())
  }, [dispatch]);

  return (
    <Router>
      <section id="registration" className="Registration">
        <div className="Registration-Container">
          <h1 className="Registration-Title">
            Registration
          </h1>
          <div className="Registration-Content">
            You can
            <NavLink
              to="/#registration"
              smooth={true}
            >
              <Button
                title='Join an existing idea'
              />
            </NavLink>
            or
            <Button
              title='Create your own idea'
              onClick={() => openAddNewIdeaOverlay()}
            />
          </div>
        </div>
      </section>
    </Router>
  )
};

export default Registration;