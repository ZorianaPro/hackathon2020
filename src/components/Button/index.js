import React from "react";
import "./Button.css";

const Button = ({ title, action = "overlay", target, onClick }) => {

  const clickHandler = () => {
    if (typeof onClick === 'function') {
      onClick();
    } else {
      const targetEl = document.querySelector(`.${target}`);
      if (targetEl) {
        if (action === "scroll") {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <div className="Button" onClick={() => clickHandler()}>
      {title}
    </div>
  );
};

export default Button;
