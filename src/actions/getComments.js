export const selectedComments = commentsId => {
  return { type: "SELECTED_COMMENTS", commentsId: commentsId };
};

export const requestComments = () => {
  return { type: "REQUESTED_COMMENTS" };
};

export const commentsFullField = comments => {
  return { type: "REQUESTED_COMMENTS_SUCCEEDED", comments };
};

export const requestCommentsError = error => {
  return { type: "REQUESTED_COMMENTS_FAILED", payload: error };
};
