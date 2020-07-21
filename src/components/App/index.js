import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import Header from "../Header";
import SVGSpriteSheet from '../SVGSpriteSheet';
import LocationSVG from '../LocationSVG';
import DateSVG from "../DateSVG";
import Button from "../Button";
import Ideas from "../Ideas";
import Schedule from '../Schedule';
import Rules from "../Rules";
import Footer from "../Footer";
import Registration from "../Registration";

const App = ({

}) => {

  return (
    <div className="App">
      <Header />
      <section id="about" className="App-Main-Section">
        <div className="App-Main-Section-Container">
          <div className="App-Main-Section-Info">
            <div className="App-Main-Section-Title">
              Cool name for our cool hackathon
           </div>
            <div className="App-Main-Section-Date">
              <DateSVG />
              <p> 12-15 December 2020 </p>
            </div>
            <div className="App-Main-Section-Location">
              <LocationSVG />
              <p> Online </p>
            </div>
            <Button title='Go to registration'
              action='scroll'
              target='Registration' />
          </div>
        </div>
      </section>
      <hr />
      <section id="schedule" className="Schedule-Section">
        <h1 className="App-Section-Title">Schedule</h1>
        <Schedule/>
      </section>
      <hr />
      <section id="registration" className="Registration">
        <h1 className="App-Section-Title">Registration</h1>
      </section>
      <Registration/>
      <hr />
      <section id="inspiration" className="Inspiration">
        <h1 className="App-Section-Title">Inspiration</h1>
      </section>
      <hr />
      <Ideas />
      <hr />
      <section id="rules">
        <h1 className="App-Section-Title">Rules</h1>
        <Rules/>
      </section>
      <hr />
      <SVGSpriteSheet />
      <Footer/>
      <hr />
    </div >
  );
};

export default App;