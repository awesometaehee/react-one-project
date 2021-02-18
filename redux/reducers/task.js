const tasks = (state = [], task) => {
  switch (task.type) {
    case 'ADD_TASK':
      return [...state, { ...task.payload }];
    case 'REMOVE_TASK':
      return [...state.filter((item) => item.id != task.payload)];
    default:
      return state;
  }
};

export default tasks;
