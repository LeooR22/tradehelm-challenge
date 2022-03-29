export const listReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((list) => list.id !== action.payload);

    case "toggle":
      return state.map((list) =>
        list.id === action.payload ? { ...list, done: !list.done } : list
      );

    default:
      return state;
  }
};
