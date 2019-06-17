import React from "react";
import PropTypes from "prop-types";

import { Container, ListContain, ListBody, ListTitle } from "./style";

function MapUserPosts({ goToComment, userPosts }) {
  userPosts =
    userPosts &&
    userPosts.map((el, id) => {
      return (
        <ListContain key={id}>
          <ListTitle onClick={() => goToComment(el.userId, id)}>
            {el.title}
          </ListTitle>
          <br />
          <ListBody>{el.body}</ListBody>
        </ListContain>
      );
    });
  return <Container>{userPosts}</Container>;
}

export default MapUserPosts;

MapUserPosts.propTypes = {
  goToComment: PropTypes.func.isRequired,
  userPosts: PropTypes.array
};
