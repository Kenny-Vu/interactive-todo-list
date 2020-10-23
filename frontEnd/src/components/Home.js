import React, { useState, useReducer } from "react";
import "./Home.css";

import Modal from "./Modal/Modal";
import Task from "./Task/Task";

import taskReducer, { initialState } from "../reducer/taskReducer";
import StandardBtn from "./StandardButton/StandardBtn";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <>
      <div className="home-wrapper">
        <div className="exp-bar-container">
          <div className="exp-bar"></div>
        </div>
        <div className="user-stats">
          <div className="task-adder-container">
            <StandardBtn
              handleOnClick={() => setOpenModal(!openModal)}
              text="Add Task"
            />

            <div className="home-avatar">
              <img src="assets/quesito.png"></img>
            </div>
          </div>
          <div className="task-list">
            <ul>
              {Object.values(state.tasks).map((task, index) => {
                return <Task task={task} dispatch={dispatch} />;
              })}
            </ul>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default Home;
