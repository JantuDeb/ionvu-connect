import React from "react";
import "./Button.css";
const Button = ({ loading, text, clickHandler, btnStyle ,disabled=false}) => {
  return (
    <button className={`${btnStyle} ${loading? "btn-loading":""}`} onClick={clickHandler} disabled={disabled}>
      <span className="btn-text">{text}</span>
    </button>
  );
};

export default Button;
