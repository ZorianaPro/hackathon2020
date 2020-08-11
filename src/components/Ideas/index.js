import React, { useCallback } from 'react';
import IdeaCard from '../IdeaCard';
import AddIdeaButton from '../AddIdeaButton';
import './Ideas.css';

const Ideas = ({
  ideas,
  loading,
  error,
  onOpenJoinIdeaOverlay,
  onOpenIdeaInfoOverlay,
  onClickAddIdeaBtn
}) => {
  const _onOpenJoinIdeaOverlay = useCallback((idea) => {
    if (typeof onOpenJoinIdeaOverlay === 'function') {
      onOpenJoinIdeaOverlay(idea);
    }
  }, [onOpenJoinIdeaOverlay]);

  const _onOpenIdeaInfoOverlay = useCallback((idea) => {
    if (typeof onOpenIdeaInfoOverlay === 'function') {
      onOpenIdeaInfoOverlay(idea);
    }
  }, [onOpenIdeaInfoOverlay]);

  const _onClickAddIdeaBtn = useCallback(() => {
    if (typeof onClickAddIdeaBtn === 'function') {
      onClickAddIdeaBtn();
    }
  }, [onClickAddIdeaBtn]);

  return (
    <section id="ideas" className="Ideas">
      <div className="Lightning-Left"
        data-aos-delay="50"
        data-aos-duration="200"
        data-aos="fade-down-right"/>
      <div className="Lightning-Right"
        data-aos="fade-down-left"
        data-aos-delay="50"
        data-aos-duration="200"/>
      <div className="Ideas-Container">
        <p className="Ideas-Title">
          Ideas &amp; Lightning
        </p>
        <div className="Ideas-Content">
          {
            loading && <div className="is-loading">
              Loading...
            </div>
          }
          {
            error
            && <div className="is-error">{error}</div>
          }
          {
            ideas
            && ideas.map((idea) => {
              return (
                <IdeaCard
                  idea={
                    idea
                  }
                  onOpenJoinIdeaOverlay={
                    _onOpenJoinIdeaOverlay
                  }
                  onOpenIdeaInfoOverlay={
                    _onOpenIdeaInfoOverlay
                  }/>
              );
            })
          }
          <AddIdeaButton
            onClick={
              _onClickAddIdeaBtn
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Ideas;