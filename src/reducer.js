// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
//   user: null,
//   users: []
  
// };
// const reducer = (state = initialState, action) => {
//   console.log("TCL: reducer -> action", action)
//   switch (action.type) {
//     case "REQUESTED_POST":
//       return {
//         data: [],
//         loading: true,
//         error: null
//       };
//     case "REQUESTED_POST_SUCCEEDED":
//       return {
//         data: action.data,
//         loading: false,
//         error: null,
//         users: action.users
//       };
//     case "REQUESTED_POST_FAILED":
//       return {
//         data: [],
//         loading: false,
//         error: action.payload
//       };

//     case "CONCAT_USER_POSTS":   // выбрали юзера
//       return {
//         ...state,
//         user: action.user,
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;

// // const initialState = {
// //   user: [],
// // };
// // const postsReducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case "SELECTED_USER":
// //       return {
// //         ...state,
// //         user: action.payload
// //       };

// //     default:
// //       return state;
// //   }
// // };

// // export default postsReducer;
