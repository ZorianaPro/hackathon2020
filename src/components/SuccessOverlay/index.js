import React, { useCallback, useState, useEffect } from 'react';
import Overlay from '../Overlay';
import './SuccessOverlay.css';

const SuccessOveray = ({
  onClose,
  shouldClose
}) => {
  const [_shouldClose, setShouldClose] = useState(shouldClose);
  const _onClose = useCallback((event) => {
    if (typeof onClose === 'function') {
      onClose(event);
    }
  }, [
    onClose
  ]);

  useEffect(() => {
    setShouldClose(shouldClose);
  }, [
    shouldClose
  ]);

  return (
    <Overlay onClose={
      _onClose
    }
    shouldClose={
      _shouldClose
    }>
      <div className="Success-Message">
        Woohoo.. It was successful!
      </div>
    </Overlay>
  );
};

export default SuccessOveray;