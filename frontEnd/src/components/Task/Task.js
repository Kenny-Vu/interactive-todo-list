import React from "react";
import "./Task.css";

import StandardBtn from "../StandardButton/StandardBtn";

const Task = ({ task, dispatch }) => {
  const removeTask = () => {
    dispatch({ type: "REMOVE_TASK", task });
  };

  return (
    <li className="task-container">
      <h2 className="task-title">{task.task}</h2>
      <span>{task.description}</span>
      <StandardBtn text={"Edit"} />
      <StandardBtn handleOnClick={removeTask} text={"Remove"} />
    </li>
  );
};

export default Task;
