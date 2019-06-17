export const selectedUserComments = (userId, postId) => {
  return { type: "GET_COMMENTS_OF_USER", userId,  postId};
};