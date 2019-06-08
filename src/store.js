import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducer/index";

import { helloSaga } from "./sagas";

import { watchFetchPost } from "../src/saga/getApi";
import { watchGetUser } from "../src/saga/selectUser.js";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchFetchPost);

sagaMiddleware.run(watchGetUser);

sagaMiddleware.run(helloSaga);

export default store;
