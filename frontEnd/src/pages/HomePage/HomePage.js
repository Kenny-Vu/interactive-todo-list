import React, { useState, useContext } from "react";
import "./HomePage.css";

import Modal from "../../components/Modal/Modal";
import Task from "../../components/Task/Task";
import TaskEditor from "../../components/TaskEditor/TaskEditor";

import StandardBtn from "../../components/StandardButton/StandardBtn";
import { TaskContext } from "../../context/taskContext";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  const {
    taskState,
    addTask,
    removeTask,
    editTask,
    openEditor,
    closeEditor,
    openTaskEditor,
    currentTask,
  } = useContext(TaskContext);
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
              {taskState &&
                Object.values(taskState).map((task, index) => {
                  return (
                    <Task
                      key={`task-${index}`}
                      task={task}
                      removeTask={removeTask}
                      openEditor={openEditor}
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          addTask={addTask}
        />
      )}
      {openTaskEditor && (
        <TaskEditor
          closeEditor={closeEditor}
          currentTask={currentTask}
          editTask={editTask}
        />
      )}
    </>
  );
};

export default HomePage;
