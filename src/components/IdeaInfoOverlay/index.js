import React, { useCallback } from 'react';
import Team from '../Team';
import './IdeaInfoOverlay.css';
import '../Overlay/Overlay.css';
import Overlay from '../Overlay';

const IdeaInfoOverlay = ({
  onClose,
  shouldClose,
  content
}) => {
  const _onClose = useCallback((event) => {
    if (typeof onClose === 'function') {
      onClose(event);
    }
  }, [onClose]);

  return (
    <Overlay
      onClose={
        _onClose
      }
      shouldClose={
        shouldClose
      }>
      <div className="IdeaInfoOverlay">
        <p className="IdeaInfoOverlay-Title">
          { content.name }
        </p>
        <p className="IdeaInfoOverlay-Description">
          { content.description }
        </p>
        <div className="IdeaInfoOverlay-Team">
          <div className="IdeaInfoOverlay-Team-Title">
            { content.team.length !== 0 ? 'Team' : 'There is no one in a team yet'}
          </div>
          {
            content.team
            && <Team full={ true }
              team={ content.team }/>
          }
        </div>
      </div>
    </Overlay>
  );
};

export default IdeaInfoOverlay;