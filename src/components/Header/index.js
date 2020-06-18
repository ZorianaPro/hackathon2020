import React from "react";
import "./Header.css";
import LocationSVG from "../LocationSVG";
import DateSVG from "../DateSVG";
import Button from "../Button";

const teaserImg = require("../../assets/teaser.PNG");

const Header = ({}) => {
  return (
    <section>
      <div className="App-Header-Section-Container">
        <div className="App-Header-Section-Info">
          <div className="App-Header-Section-Title">
            Cool name for our cool hackathon
          </div>
          <div className="App-Header-Section-Date">
            <DateSVG />
            <p> 12-15 December 2020 </p>
          </div>
          <div className="App-Header-Section-Location">
            <LocationSVG />
            <p> Online </p>
          </div>
          <Button
            title="Go to registration"
            action="scroll"
            target="Registration"
          />
        </div>
        <div className="App-Header-Section-Image">
          <img src={teaserImg} alt="Teaser" />
        </div>
      </div>
    </section>
  );
};

export default Header;
