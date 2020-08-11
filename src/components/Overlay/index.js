import React, { useState, useCallback, useEffect } from 'react';
import { component } from '@haensl/services';
import XCloseSVG from '../XCloseSVG';
import './Overlay.css';

const Overlay = ({
  animationDurationMs = 200,
  children,
  onClose,
  shouldClose
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const closeOverlay = useCallback(() => {
    setIsClosing(true);
  }, []);

  useEffect(() => {
    if (typeof shouldClose !== 'boolean') {
      return;
    }

    if (shouldClose && isOpen) {
      setIsClosing(true);
    } else if (!(shouldClose || isOpen)) {
      setIsOpening(true);
    }
  }, [
    shouldClose,
    isOpen
  ]);

  useEffect(() => {
    if (isOpening) {
      const timerId = setTimeout(() => {
        setIsOpen(true);
        setIsOpening(false);
      }, animationDurationMs);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [
    isOpening,
    animationDurationMs
  ]);

  useEffect(() => {
    if (isClosing) {
      const timerId = setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
        if (typeof onClose === 'function') {
          onClose();
        }
      }, animationDurationMs);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [
    isClosing,
    animationDurationMs,
    onClose
  ]);

  if (!(isOpen || isOpening || isClosing)) {
    return null;
  }

  const className = component.className({
    isOpen,
    isOpening,
    isClosing
  }, 'Overlay');

  return (
    <div className={ className }>
      <div className="Overlay-Content"
        style={{
          animationDuration: `${animationDurationMs}ms`
        }}>
        <div className="Overlay-Mask"
          onClick={ closeOverlay }
        />
        <div className="Overlay-Box">
          <div className="Overlay-Close"
            onClick={
              closeOverlay
            }>
            <XCloseSVG/>
          </div>
          {
            children
          }
        </div>
      </div>
    </div>
  );
};

export default Overlay;
