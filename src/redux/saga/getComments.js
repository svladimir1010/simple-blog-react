import { put, call, takeLatest, select } from "redux-saga/effects";

import {
  commentsFullField,
  requestComments,
  requestCommentsError
} from "../actions/getComments";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export function* watchGetComments() {
  yield takeLatest("GET_COMMENTS_OF_USER", getComments);
}

function* getComments({ userId, postId }) {
  try {
    yield put(requestComments());

    const fetchComments = yield call(() =>
      fetch(`${BASE_URL}comments?postId=${userId}`).then(res =>
        res.json()
      )
    );
    const lastId = fetchComments[fetchComments.length - 1].id;

    const getMyComments = yield select(({ commentsReducer }) => {
      return commentsReducer.myComments;
    });

    const data = getMyComments.filter((el, i) => {
      return el.userId === userId && el.postId === postId;
    });

    data.forEach((el, i) => {
      el.id = lastId + i + 1;
    });

    const result = (data && [...fetchComments, ...data]) || [
      ...fetchComments
    ];
    yield put(commentsFullField(result));
  } catch (error) {
    yield put(requestCommentsError());
  }
}
