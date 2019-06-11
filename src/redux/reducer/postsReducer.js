const initialState = {
  data: [],
  users: [],
  loading: false,
  error: null
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTED_POST":
      return {
        data: [],
        loading: true,
        error: null
      };
    case "REQUESTED_POST_SUCCEEDED":
      return {
        data: action.data,
        users: action.users,
        loading: false,
        error: null
      };
    case "REQUESTED_POST_FAILED":
      return {
        data: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default postsReducer;
