import { put, call, takeLatest } from "redux-saga/effects";

import {
  commentsFullField,
  requestComments,
  requestCommentsError
} from "../actions/getComments";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export function* watchGetComments() {
  yield takeLatest("SELECTED_COMMENTS", getComments);
}

function* getComments({ commentsId }) {
  try {
    yield put(requestComments());

    const fetchComments = yield call(() =>
      fetch(`${BASE_URL}comments?postId=${commentsId}`).then(res =>
        res.json()
      )
    );
    yield put(commentsFullField(fetchComments));
  } catch (error) {
    yield put(requestCommentsError());
  }
}

