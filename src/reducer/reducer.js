const initialState = {
  data: [],
  loading: false,
  error: null,
  userPosts: [],
  users: []
};
const reducers = (state = initialState, action) => {
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
        loading: false,
        error: null,
        users: action.users
      };
    case "REQUESTED_POST_FAILED":
      return {
        data: [],
        loading: false,
        error: action.payload
      };

    case "REQUESTED_USER_POST":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "USER_POSTS": // выбрали юзера
      return {
        ...state,
        userPosts: action.userPosts,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default reducers;
