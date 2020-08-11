import React, { useCallback } from 'react';
import './Button.css';

const Button = ({ children, label, onClick, type }) => {
  const _onClick = useCallback(() => {
    if (typeof onClick === 'function') {
      onClick();
    }
  }, [onClick]);

  return (
    <div className={ `Button ${type ? `Button--${type}` : ''}` }>
      <p className="Button-Label" onClick={ _onClick }>
        { label }
      </p>
      <div className="Button-Inside" onClick={ _onClick }>
        { children }
      </div>
    </div>
  );
};

export default Button;
