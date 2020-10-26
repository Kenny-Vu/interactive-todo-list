import React, { createContext, useReducer } from "react";

import taskReducer, { initialState } from "../reducer/taskReducer";

export const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = ({ taskId, taskName, taskDescription }) => {
    dispatch({
      type: "ADD_TASK",
      task: { id: taskId, task: taskName, description: taskDescription },
    });
  };

  const openEditor = (task) => {
    dispatch({
      type: "OPEN_EDITOR",
      task,
    });
  };
  const closeEditor = (task) => {
    dispatch({
      type: "CLOSE_EDITOR",
      task,
    });
  };

  const editTask = (task) => {
    dispatch({
      type: "EDIT_TASK",
      task,
    });
  };

  const removeTask = (task) => {
    dispatch({ type: "REMOVE_TASK", task });
  };

  return (
    <TaskContext.Provider
      value={{
        taskState: state.tasks,
        dispatch,
        removeTask,
        addTask,
        editTask,
        openEditor,
        closeEditor,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
