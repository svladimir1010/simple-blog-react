export const fetchPost = () => {
  return { type: "FETCHED_POST" };
};

export const requestPost = () => {
  return { type: "REQUESTED_POST" };
};

export const requestPostSuccess = (data, users) => {
  return {
    type: "REQUESTED_POST_SUCCEEDED",
    data: data,
    users: users
  };
};

export const requestPostError = error => {
  return { type: "REQUESTED_POST_FAILED", payload: error };
};
