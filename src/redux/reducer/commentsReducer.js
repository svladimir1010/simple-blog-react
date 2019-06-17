const initialState = {
  loading: false,
  error: null,
  comments: [],
  myComments: [
    // {
    //   body: "111111111uiopxcvbnm,   11111111",
    //   email: "ddd@ss.com",
    //   userId: "1",
    //   name: "Bob",
    //   postId: "1"
    // },
    // {
    //   body: "222222222 777777777 99916161616",
    //   email: "jogn@gmail.com",
    //   userId: "4",
    //   name: "161616",
    //   postId: "10"
    // }
  ]
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTED_COMMENTS":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "REQUESTED_COMMENTS_SUCCEEDED":
      return {
        ...state,
        comments: action.comments,
        loading: false,
        error: null
      };

    case "REQUESTED_COMMENTS_FAILED":
      return {
        ...state,
        comments: [],
        loading: false,
        error: action.payload
      };

    case "ADD_COMMENT":
      const arr = state.myComments.slice();

      arr[arr.length] = action.addComment;

      return {
        ...state,
        myComments: arr
      };

    default:
      return state;
  }
};

export default commentsReducer;
