export const requestComments = () => {
  return { type: "REQUESTED_COMMENTS" };
};

export const commentsFullField = comments => {     //get my comments
  return { type: "REQUESTED_COMMENTS_SUCCEEDED", comments };
};

export const requestCommentsError = error => {
  return { type: "REQUESTED_COMMENTS_FAILED", payload: error };
};
