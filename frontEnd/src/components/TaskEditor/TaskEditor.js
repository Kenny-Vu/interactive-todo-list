import React, { useState } from "react";
import "./TaskEditor.css";

import StandardBtn from "../StandardButton/StandardBtn";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

const TaskEditor = ({ closeEditor, editTask, currentTask }) => {
  const [input, setInput] = useState(`${currentTask.task}`);
  const [textArea, setTextArea] = useState(`${currentTask.description}`);
  console.log(currentTask.task);
  return (
    <div className="task-editor">
      <div className="task-modal">
        <StandardBtn text="Close" handleOnClick={closeEditor} />
        <form className="modal-form">
          <Input value={input} handleInput={(e) => setInput(e.target.value)} />
          <TextArea
            value={textArea}
            handleTextArea={(e) => setTextArea(e.target.value)}
          />
          <StandardBtn
            text="Edit"
            handleOnClick={(e) =>
              editTask(e, {
                id: currentTask.id,
                task: input,
                description: textArea,
              })
            }
          />
        </form>
      </div>
    </div>
  );
};

export default TaskEditor;
