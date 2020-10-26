import React from "react";
import "./Input.css";

const Input = ({ handleInput, value }) => {
  return (
    <input
      value={value}
      placeholder="Task name..."
      className="task-name-input"
      onChange={handleInput}
    />
  );
};

export default Input;
