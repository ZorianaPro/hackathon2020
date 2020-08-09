import React, { useEffect } from 'react';
import IdeaCard from "../IdeaCard";
import AddIdeaButton from "../AddIdeaButton";
import IdeaInfoOverlay from "../IdeaInfoOverlay";
import JoinIdeaOverlay from "../JoinIdeaOverlay";
import AddNewIdea from "../AddNewIdea";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllIdeas, fetchFakeIdeas } from './actions';
import './Ideas.css'

const Ideas = ({
  dispatch,
  ideas,
  loading,
  error
}) => {

    [ideas, loading, error] = useSelector(state => [
        state.ideasReducer.ideas,
        state.ideasReducer.loading,
        state.ideasReducer.error
    ]);

    dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllIdeas())
    }, []);

    return (
        <section id="ideas" className="Ideas">
          <div className="Lightning-Left"/>
          <div className="Lightning-Right"/>
            <div className="Ideas-Container">
                <p className="Ideas-Title">
                  Ideas &amp; Lightning
                </p>
              <div className="Ideas-Content">
                {
                    loading && 'Loading...'
                }
                {
                    error
                    && <div>{error}</div>
                }
                { ideas
                    && ideas.map((idea) => {
                        return (
                            <IdeaCard id={idea._id}
                                      name={idea.name}
                                      description={idea.description}
                                      team={idea.team}/>
                        )
                    })
                }
                <AddIdeaButton/>
              </div>
            </div>
        </section>
    )
};

export default Ideas;