import React, { useCallback } from 'react';
import './Registration.css';
import Button from '../Button';

const Registration = ({
  onOpenAddIdeaOverlay,
  onOpenJoinIdeaOverlay
}) => {
  const _onOpenJoinIdeaOverlay = useCallback((event) => {
    if (typeof onOpenJoinIdeaOverlay === 'function') {
      onOpenJoinIdeaOverlay(event);
    }
  }, [
    onOpenJoinIdeaOverlay
  ]);

  const _onOpenAddIdeaOverlay = useCallback((event) => {
    if (typeof onOpenAddIdeaOverlay === 'function') {
      onOpenAddIdeaOverlay(event);
    }
  }, [
    onOpenAddIdeaOverlay
  ]);

  return (
    <section id="registration" className="Registration">
      <div className="Registration-Container">
        <p className="Registration-Title">
          Registration
        </p>
        <div className="Registration-Content">
          <Button label="Join an existing idea"
            type="isActionFilled"
            onClick={
              _onOpenJoinIdeaOverlay
            }
          />
          <Button label="Create your own idea"
            type="isActionFilled"
            onClick={
              _onOpenAddIdeaOverlay
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Registration;