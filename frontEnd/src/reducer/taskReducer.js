export const initialState = { tasks: {} };

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: { ...state.tasks, [action.task.id]: action.task } };
    case "REMOVE_TASK": {
      const taskObj = { ...state.tasks };
      delete taskObj[action.task.id];
      return { tasks: taskObj };
    }
    default:
      return state;
  }
};

export default taskReducer;
