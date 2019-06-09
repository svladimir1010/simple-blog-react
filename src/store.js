import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { helloSaga } from "./sagas";

import { watchFetchPost } from "../src/saga/getApi";
import { watchGetUser } from "../src/saga/selectUser.js";
import { watchGetComments } from "../src/saga/getComments.js";

import reducers from "./reducer";

const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

let persistor = persistStore(store);
sagaMiddleware.run(watchFetchPost);

sagaMiddleware.run(watchGetUser);

sagaMiddleware.run(watchGetComments);

sagaMiddleware.run(helloSaga);

// store.subscribe(() => {
//   console.log("TCL: store.getState()", store.getState());
// });
export { store, persistor };
