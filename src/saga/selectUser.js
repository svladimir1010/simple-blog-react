import { put, call, takeLatest } from "redux-saga/effects";

import { requestPostError } from "../actions/getApi";
import { userPosts, requestUserPost } from "../actions/selectUser";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export function* watchGetUser() {
  yield takeLatest("SELECTED_USER", getUserPosts);
}

function* getUserPosts({ userId }) {
  try {
    yield put(requestUserPost())
    const posts = yield call(() =>
      fetch(`${BASE_URL}posts?userId=${userId}`).then(res =>
        res.json()
      )
    );

    yield put(userPosts(posts));
  } catch (error) {
    yield put(requestPostError());
  }
}
