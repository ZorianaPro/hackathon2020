import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import Header from "../Header";
import SVGSpriteSheet from '../SVGSpriteSheet';
import LocationSVG from '../LocationSVG';
import DateSVG from "../DateSVG";
import Button from "../Button";
import IdeaCard from "../IdeaCard";
import IdeaInfoOverlay from '../IdeaInfoOverlay'
import JoinIdeaOverlay from "../JoinIdeaOverlay";
import * as ideaOverlay from "../IdeaInfoOverlay/actions";
import * as addNewIdea from "../AddNewIdea/actions";
import { useDispatch } from "react-redux";
import AddNewIdea from "../AddNewIdea";

const App = ({
               dispatch
             }) => {

  dispatch = useDispatch();

  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8082/ideas')
    .then(response => response.json())
    .then(data => setIdeas(data));
  },[]);

  const openAddNewIdeaOverlay = useCallback(() => {
    dispatch(addNewIdea.open())
  }, [dispatch]);

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
           <button className=""
                onClick={() => openAddNewIdeaOverlay()}>
             Add Idea
           </button>
           <Button title='Go to registration'
                   action='scroll'
                   target='Registration'/>
         </div>
       </div>
      </section>
      <hr/>
      <section className="Registration">

      </section>
      <hr/>
      <section className="App-Ideas-Section">
        <div className="App-Ideas-Section-Container">
          <div className="App-Section-Title">
            Ideas
          </div>
{
            ideas.map((idea) => {
              return (
                <IdeaCard id={idea._id}
                name={idea.name}
                description={idea.description}
                team={idea.team}/>
              )
            })
          }
        </div>
      </section>
      <hr/>
      <SVGSpriteSheet/>
      <IdeaInfoOverlay/>
      <JoinIdeaOverlay/>
      <AddNewIdea/>
    </div>
  );
};

export default App;