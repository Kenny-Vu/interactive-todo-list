import React from "react";
import "./Task.css";

import StandardBtn from "../StandardButton/StandardBtn";

const Task = ({ task, removeTask, openEditor }) => {
  return (
    <li className="task-container">
      <h2 className="task-title">{task.task}</h2>
      <span>{task.description}</span>
      <StandardBtn text={"Edit"} handleOnClick={() => openEditor(task)} />
      <StandardBtn handleOnClick={() => removeTask(task)} text={"Remove"} />
    </li>
  );
};

export default Task;
