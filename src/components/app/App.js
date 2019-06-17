import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, UserPage, CommentsPage, Form } from "../pages";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />

      <Route path="/user/:userId" component={UserPage} exact />

      <Route
        path="/user/:userId/postId/:postId"
        component={CommentsPage}
        exact
      />

      <Route
        path="/user/:userId/postId/:postId/addComment"
        component={Form}
      />
    </Switch>
  );
}

export default App;