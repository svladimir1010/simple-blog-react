import { put, call, takeLatest } from "redux-saga/effects";

import {
  requestPost,
  requestPostSuccess,
  requestPostError
} from "../actions/getApi";

import faker from "faker";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

// Сага-наблюдатель (watcher saga), импортится в store
export function* watchFetchPost() {
  yield takeLatest("FETCHED_POST", fetchPostAsync);
}
// Сага-рабочая (worker saga)

function* fetchPostAsync() {
  try {
    yield put(requestPost());
    const data = yield call(() => {
      return fetch(`${BASE_URL}posts`).then(res => res.json());
    });

    const users = yield call(() => {
      return fetch(`${BASE_URL}users`)
        .then(res => res.json())
        .then(res => {
          const data = res.map(el => {
            const avatar = faker.image.avatar();
            return {
              ...el,
              avatar
            };
          });
          return data;
        });
    });

    const result = data.map(el => {
      const user = users.find(user => user.id === el.userId);
      delete el.userId;
      return {
        ...el,
        user
      };
    });

    yield put(requestPostSuccess(result, users));
  } catch (error) {
    yield put(requestPostError());
  }
}
