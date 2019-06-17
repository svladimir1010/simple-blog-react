import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app/App";
import { store, persistor } from "./redux/store";

const rootEl = document.getElementById("root");

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  rootEl
);
