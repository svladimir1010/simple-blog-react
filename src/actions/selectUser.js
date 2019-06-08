export const requestUserPost = () => {
  return { type: "REQUESTED_USER_POST" };
};

export const selectedUser = userId => {
  
  return { type: "SELECTED_USER", userId: userId };
};

export const userPosts = userPosts => {
  
  return { type: "USER_POSTS", userPosts };
};

export const requestPostError = error => {
  return { type: "REQUESTED_POST_FAILED", payload: error };
};