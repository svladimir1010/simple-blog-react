import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, UserPage, CommentsPage } from "../pages";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />

      <Route path="/user/:userId" component={UserPage} exact />

      <Route
        path="/user/:userId/comments=:commentsId"
        component={CommentsPage}
      />
    </Switch>
  );
}

export default App;
