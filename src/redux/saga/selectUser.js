import { put, call, takeLatest } from "redux-saga/effects";

import {
  userPosts,
  requestUserPost,
  requestPostError
} from "../actions/selectUser";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export function* watchGetUser() {
  yield takeLatest("SELECTED_USER", getUserPosts);
}

function* getUserPosts({ userId }) {
  try {
    yield put(requestUserPost());
    const posts = yield call(() =>
      fetch(`${BASE_URL}posts?userId=${userId}`).then(res =>
        res.json()
      )
    );

    // const user = yield call(() =>
    //   fetch(`${BASE_URL}users/${userId}`).then(res => res.json())
    // );

    yield put(userPosts(posts));
  } catch (error) {
    yield put(requestPostError());
  }
}
