import React from "react";
import "./StandardBtn.css";

const StandardBtn = ({ text, handleOnClick }) => {
  return (
    <button className="standard-btn" onClick={handleOnClick}>
      {text}
    </button>
  );
};

export default StandardBtn;
