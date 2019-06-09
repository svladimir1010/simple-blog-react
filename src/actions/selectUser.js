export const selectedUser = userId => {
  return { type: "SELECTED_USER", userId: userId };
};

export const requestUserPost = () => {
  return { type: "REQUESTED_USER_POST" };
};

export const userPosts = userPosts => {
  return { type: "REQUESTED_POSTS_SUCCEEDED", userPosts };
};

export const requestPostError = error => {
  return { type: "REQUESTED_POSTS_FAILED", payload: error };
};
