import React, {  useCallback } from 'react';
import Button from '../Button';
import Team from '../Team';
import  './IdeaCard.css';
import AddPersonSVG from '../AddPersonSVG';

const IdeaCard = ({
  idea,
  onOpenJoinIdeaOverlay,
  onOpenIdeaInfoOverlay
}) => {
  const _onOpenJoinIdeaOverlay = useCallback(() => {
    if (typeof onOpenJoinIdeaOverlay === 'function') {
      onOpenJoinIdeaOverlay(idea);
    }
  }, [idea, onOpenJoinIdeaOverlay]);

  const _onOpenIdeaInfoOverlay = useCallback(() => {
    if (typeof onOpenIdeaInfoOverlay === 'function') {
      onOpenIdeaInfoOverlay(idea);
    }
  }, [idea, onOpenIdeaInfoOverlay]);

  return (
    <div className="IdeaCard" key={idea._id}>
      <div className="IdeaCard-Container">
        {
          idea.team
          && <Team full={false} team={idea.team}/>
        }
        <div className="IdeaCard-Info">
          <p className="IdeaCard-Info-Name">
            {idea.name}
          </p>
          <p className="IdeaCard-Info-Description">
            {idea.description}
          </p>
        </div>
        <div className="IdeaCard-Actions">
          <Button type="isSecondaryTransparent"
            onClick={
              _onOpenJoinIdeaOverlay
            }>
            <AddPersonSVG /> join
          </Button>
          <Button type="isSecondaryTransparent"
            onClick={
              _onOpenIdeaInfoOverlay
            }>
            More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;