import React from "react";
import PropTypes from "prop-types";

import { Container, ListContain, ListBody, ListTitle } from "./style";

function MapListItems({ goToComment, userPosts }) {
  userPosts =
    userPosts &&
    userPosts.map(el => {
      return (
        <ListContain key={el.id}>
          <ListTitle onClick={() => goToComment(el.id)}>
            {el.title}
          </ListTitle>
          <br />
          <ListBody>{el.body}</ListBody>
        </ListContain>
      );
    });
  return <Container>{userPosts}</Container>;
}

export default MapListItems;

MapListItems.propTypes = {
  goToComment: PropTypes.func.isRequired,
  userPosts: PropTypes.array
}