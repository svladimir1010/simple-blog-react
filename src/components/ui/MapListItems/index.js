import React from "react";
import { Container, ListContain, ListBody, ListTitle } from "./style";

function MapListItems({ userPosts }) {
  userPosts =
    userPosts &&
    userPosts.map(el => {
      return (
        <ListContain key={el.id}>
          <ListTitle> {el.title} </ListTitle>
          <ListBody>{el.body}</ListBody>
        </ListContain>
      );
    });
  return <Container>{userPosts}</Container>;
}

export default MapListItems;
