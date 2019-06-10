import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  goToUserCard = id => {
    this.props.history.push("/user/" + id);
  };

  posts = arr => {
    return arr.map(item => {
      return (
        <Box key={item.id}>
          <BoxUserAvatar
            onClick={() => {
              this.goToUserCard(item.user.id);
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
    const { data, loading, error } = this.props;

    return (
      <BoxAllPostPage>
        <BoxTitlePage>
          <TitleHomePage>All Posts</TitleHomePage>
        </BoxTitlePage>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error, try again</p>
        ) : (
          <>{this.posts(data)}</>
        )}
      </BoxAllPostPage>
    );
  }
}

const mapStateToProps = ({ postsReducer }) => {
  return postsReducer;
};

const mapDispatchToProps = {
  fetchPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

HomePage.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};
