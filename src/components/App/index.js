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
import { scrollElToCenter } from "../../support/handlers";
import IdeaInfoOverlay from "../IdeaInfoOverlay";
import JoinIdeaOverlay from "../JoinIdeaOverlay";
import AddNewIdea from "../AddNewIdea";

const App = ({

}) => {

  const scrollTo = useCallback((event) => {
    scrollElToCenter('registration')
  }, []);

  useEffect(() => {
   setInterval(() => {
    document.querySelector('.Hack-guy').classList.remove('animate');
   }, 1800);

   setInterval(() => {
    document.querySelector('.App-Main-Section-Logo').classList.remove('animate');
   }, 1000)
  }, []);

  return (
    <div className="App">
      <div className="Hack-guy animate"/>
      <section id="about" className="App-Main-Section">
        <div className="App-Main-Section-Container">
          <Header />
          <div className="App-Main-Section-Left">
            <div className="App-Main-Section-Logo animate">
              {/*<div className="App-Main-Section-Date">*/}
              {/*<DateSVG />*/}
              {/*<p> 3-4 September 2020 </p>*/}
              {/*</div>*/}
              {/*<div className="App-Main-Section-Location">*/}
              {/*<LocationSVG />*/}
              {/*<p> Office </p>*/}
              {/*</div>*/}
              <div className="App-Main-Section-Left-Container">
                <Button label="Go to registration"
                        type="isActionFilled"
                onClick={ scrollTo }/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Registration/>
      <Ideas />
      {/*<section id="schedule" className="Schedule-Section">*/}
        {/*<h1 className="App-Section-Title">Schedule</h1>*/}
        {/*<Schedule/>*/}
      {/*</section>*/}
      {/*<section id="inspiration" className="Inspiration">*/}
        {/*<h1 className="App-Section-Title">Inspiration</h1>*/}
      {/*</section>*/}
      {/*<section id="rules">*/}
        {/*<h1 className="App-Section-Title">Rules</h1>*/}
        {/*<Rules/>*/}
      {/*</section>*/}
      <SVGSpriteSheet />
      <Footer/>
      <IdeaInfoOverlay/>
      <JoinIdeaOverlay/>
      <AddNewIdea/>
    </div >
  );
};

export default App;