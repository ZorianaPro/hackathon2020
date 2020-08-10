import React, { useCallback } from "react";
import * as addNewIdea from "../AddNewIdea/actions";
import { useDispatch } from "react-redux";
import "./Registration.css";
import Button from "../Button";
import {BrowserRouter as Router} from "react-router-dom";
import * as joinOverlay from "../JoinIdeaOverlay/actions";

const Registration = ({ dispatch }) => {

  dispatch = useDispatch();

  const openAddNewIdeaOverlay = useCallback(() => {
    dispatch(addNewIdea.open())
  }, [dispatch]);

  const joinIdeaOverlay = useCallback(() => {
    dispatch(joinOverlay.open({
      id: null
    }))
  }, [dispatch]);

  return (
    <Router>
      <section id="registration" className="Registration">
        <div className="Registration-Container">
          <p className="Registration-Title">
            Registration
          </p>
          <div className="Registration-Content">
            <Button label="Join an existing idea"
                    type="isActionFilled"
                    onClick={ joinIdeaOverlay }/>
            <Button label="Create your own idea"
                    type="isActionFilled"
                    onClick={ openAddNewIdeaOverlay }/>
          </div>
        </div>
      </section>
    </Router>
  )
};

export default Registration;