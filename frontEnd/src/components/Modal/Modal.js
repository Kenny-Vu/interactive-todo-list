import React, { useState, useReducer } from "react";
import "./Modal.css";
import nextId from "react-id-generator";

import StandardBtn from "../StandardButton/StandardBtn";

const Modal = ({ openModal, setOpenModal, dispatch }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const createTask = (e) => {
    e.preventDefault();
    const taskId = nextId();
    dispatch({
      type: "ADD_TASK",
      task: { id: taskId, task: taskName, description: taskDescription },
    });
    setOpenModal(!openModal);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <StandardBtn
          text="Close"
          handleOnClick={() => setOpenModal(!openModal)}
        />
        <form className="modal-form">
          <input
            placeholder="Task name..."
            className="task-name-input"
            onChange={(e) => setTaskName(e.target.value)}
          />
          <textarea
            placeholder="Add task description..."
            className="task-description-textarea"
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <StandardBtn text={"submit"} handleOnClick={createTask} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
