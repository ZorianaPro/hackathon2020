import React, { Component } from 'react';
import './App.css';
import Header from "../Header";
import SVGSpriteSheet from '../SVGSpriteSheet';
import LocationSVG from '../LocationSVG';
import DateSVG from "../DateSVG";
import Button from "../Button";
import IdeaInfoOverlay from '../IdeaInfoOverlay'

class App extends Component {
  render() {
    return (
    <div className="App">
      <section className="App-Main-Section">
       <div className="App-Main-Section-Container">
         <Header/>
         <div className="App-Main-Section-Info">
           <div className="App-Main-Section-Title">
             Cool name for our cool hackathon
           </div>
           <div className="App-Main-Section-Date">
             <DateSVG/>
             <p> 12-15 December 2020 </p>
           </div>
           <div className="App-Main-Section-Location">
             <LocationSVG/>
             <p> Online </p>
           </div>
           <Button title='Go to registration'
                   action='scroll'
                   target='Registration'/>
         </div>
       </div>
      </section>
      <section className="Registration">

      </section>
      <SVGSpriteSheet/>
      <IdeaInfoOverlay/>
    </div>
    );
  }
}

export default App;