import React, { useState, useReducer } from "react";
import "./Modal.css";
import nextId from "react-id-generator";

import StandardBtn from "../StandardButton/StandardBtn";
import TextArea from "../TextArea/TextArea";
import Input from "../Input/Input";

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

  const handleInput = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <StandardBtn
          text="Close"
          handleOnClick={() => setOpenModal(!openModal)}
        />
        <form className="modal-form">
          <Input handleInput={handleInput} />
          <TextArea handleTextArea={handleTaskDescription} />
          <StandardBtn text={"submit"} handleOnClick={createTask} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
