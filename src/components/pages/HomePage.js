import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../actions/getApi";

import {
  Box,
  BoxPost,
  BoxUserAvatar,
  TitleHomePage,
  BoxAllPostPage,
  PostsBody,
  PostsTitle,
  BoxTitlePage,
  Avatar,
  UserName
} from "./style";

class App extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  goTuUserCard = id => {
    this.props.history.push("/user/" + id);
  };

  posts = arr => {
    return arr.map(item => {
      return (
        <Box key={item.id}>
          <BoxUserAvatar
            onClick={() => {
              this.goTuUserCard(item.user.id);
            }}>
            <Avatar alt="avatar" src={item.user.avatar} />
            <UserName>{item.user.name}</UserName>
          </BoxUserAvatar>
          <BoxPost>
            <PostsTitle>{item.title}</PostsTitle>
            <PostsBody>{item.body}</PostsBody>
          </BoxPost>
        </Box>
      );
    });
  };

  render() {
    const { data } = this.props.reducers;

    return (
      <BoxAllPostPage>
        <BoxTitlePage>
          <TitleHomePage>All Posts</TitleHomePage>
        </BoxTitlePage>

        {this.props.reducers.loading ? (
          <p>Loading...</p>
        ) : this.props.reducers.error ? (
          <p>Error, try again</p>
        ) : (
          <>{this.posts(data)}</>
        )}
      </BoxAllPostPage>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  fetchPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
