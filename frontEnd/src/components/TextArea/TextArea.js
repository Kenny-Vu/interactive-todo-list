import React from "react";
import "./TextArea.css";

const TextArea = ({ handleTextArea, value }) => {
  return (
    <textarea
      value={value}
      placeholder="Add task description..."
      className="task-description-textarea"
      onChange={handleTextArea}
    />
  );
};

export default TextArea;
