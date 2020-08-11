import React, { useCallback } from 'react';
import './AddIdeaButton.css';

const AddIdeaButton = ({
  onClick
}) => {
  const _onClick = useCallback((event) => {
    if (typeof onClick === 'function') {
      onClick(event);
    }
  }, [
    onClick
  ]);

  return (
    <div className="AddIdeaButton"
      onClick={
        _onClick
      }>
      <div className="AddIdeaButton-Background"/>
    </div>
  );
};

export default AddIdeaButton;