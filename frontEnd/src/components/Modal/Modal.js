import React, { useState, useReducer } from "react";
import "./Modal.css";
import nextId from "react-id-generator";

import StandardBtn from "../StandardButton/StandardBtn";
import TextArea from "../TextArea/TextArea";

const Modal = ({ openModal, setOpenModal, addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const createTask = (e) => {
    e.preventDefault();
    const taskId = nextId();
    addTask({ taskId, taskName, taskDescription });
    setOpenModal(!openModal);
  };

  const handleTaskDescription = (e) => {
    setTaskDescription(e.target.value);
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
          <TextArea handleTextArea={handleTaskDescription} />
          <StandardBtn text={"submit"} handleOnClick={createTask} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
