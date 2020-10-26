export const initialState = { tasks: {}, openModal: false, currentTask: {} };

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: { ...state.tasks, [action.task.id]: action.task },
      };
    case "REMOVE_TASK": {
      const taskObj = { ...state.tasks };
      delete taskObj[action.task.id];
      return { ...state, tasks: taskObj };
    }
    case "OPEN_EDITOR": {
      return { ...state, openModal: true, currentTask: action.task };
    }
    case "CLOSE_EDITOR": {
      return { ...state, openModal: false, currentTask: {} };
    }
    case "EDIT_TASK": {
      return {
        tasks: { ...state.tasks, [action.task.id]: action.task },
        openModal: false,
        currentTask: {},
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
