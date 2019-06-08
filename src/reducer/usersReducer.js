const initialState = {
  loading: false,
  error: null,
  userPosts: null
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTED_USER_POST":
      return {
        loading: true,
        error: null
      };

    case "USER_POSTS": // выбрали юзера
      return {
        userPosts: action.userPosts,
        loading: false,
        error: null
      };

    case "REQUESTED_POST_FAILED":
      return {
        userPosts: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default usersReducer;
