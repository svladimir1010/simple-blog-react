const initialState = {
  loading: false,
  error: null,
  comments: null
};
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTED_COMMENTS":
      return {
        loading: true,
        error: null
      };

    case "REQUESTED_COMMENTS_SUCCEEDED": // выбрали юзера
      return {
        comments: action.comments,
        loading: false,
        error: null
      };

    case "REQUESTED_COMMENTS_FAILED":
      return {
        comments: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default commentsReducer;
