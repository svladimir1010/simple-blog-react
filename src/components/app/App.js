import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, UserPage } from "../pages";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />

      <Route path="/user/:userId" component={UserPage} />
    </Switch>
  );
}

export default App;
