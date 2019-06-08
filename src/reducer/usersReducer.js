const initialState = {
  user: []
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_USER":
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};

export default usersReducer;
