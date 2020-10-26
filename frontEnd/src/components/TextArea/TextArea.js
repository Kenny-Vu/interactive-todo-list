import React from "react";
import "./TextArea.css";

const TextArea = ({ handleTextArea }) => {
  return (
    <textarea
      placeholder="Add task description..."
      className="task-description-textarea"
      onChange={handleTextArea}
    />
  );
};

export default TextArea;
