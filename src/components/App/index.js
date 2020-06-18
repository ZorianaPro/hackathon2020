import React from "react";
import "./App.css";
import Nav from "../Nav";
import Header from "../Header";
import SVGSpriteSheet from "../SVGSpriteSheet";
import IdeaCard from "../IdeaCard";
import { ideas } from "../../server/mockServerData";
import IdeaInfoOverlay from "../IdeaInfoOverlay";
import JoinIdeaOverlay from "../JoinIdeaOverlay";

import registrationImg from "../../assets/registration.PNG";
import inspirationImg from "../../assets/inspiration.PNG";
import rulesImg from "../../assets/rules.PNG";
import ideasImg from "../../assets/ideas.PNG";

const App = () => {
  return (
    <div className="App">
      <article>
        <Nav />
        <Header />
      </article>
      <section className="Inspiration">
        <div className="Title--with-image">
          <img src={inspirationImg} alt="Inspiration" />
          <h1 className="App-Section-Title">Inspiration</h1>
        </div>
      </section>
      <main className="App-Main-Section">
        <hr />
        <section className="App-Ideas-Section">
          <div className="Title--with-image">
            <img src={ideasImg} alt="Registration" />
            <h1 className="App-Section-Title">Ideas</h1>
          </div>
          <div className="App-Ideas-Section-Container">
            {(ideas || []).map((idea) => {
              return (
                <IdeaCard
                  id={idea.id}
                  name={idea.name}
                  description={idea.description}
                  teamId={idea.teamId}
                />
              );
            })}
          </div>
        </section>
        <hr />
        <section className="Registration">
          <div className="Title--with-image">
            <img src={registrationImg} alt="Registration" />
            <h1 className="App-Section-Title">Registration</h1>
          </div>
        </section>
        <hr />
        <section className="Rules">
          <div className="Title--with-image">
            <img src={rulesImg} alt="Rules" />
            <h1 className="App-Section-Title">Rules</h1>
          </div>
        </section>
        <hr />
      </main>
      <SVGSpriteSheet />
      <IdeaInfoOverlay />
      <JoinIdeaOverlay />
    </div>
  );
};

export default App;
