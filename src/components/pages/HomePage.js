import React, { Component } from "react";
import { connect } from "react-redux";
import { Loader } from "../ui/Loader";
import PropTypes from "prop-types";

import { fetchPost } from "../../redux/actions/getApi";

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
    const { data } = this.props;
    !data.length && this.props.fetchPost();
  }

  goToUserCard = id => {
    this.props.history.push("/user/" + id);
  };

  renderPosts = arr => {
    return arr.map(({ id, user, title, body }) => {
      
      return (
        <Box key={id}>
          <BoxUserAvatar
            onClick={() => {
              this.goToUserCard(user.id);
            }}>
            <Avatar alt="avatar" src={user.avatar} />
            <UserName>{user.name}</UserName>
          </BoxUserAvatar>
          <BoxPost>
            <PostsTitle>{title}</PostsTitle>
            <PostsBody>{body}</PostsBody>
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
          <Loader />
        ) : error ? (
          <p>Error, try again</p>
        ) : (
          <>{this.renderPosts(data)}</>
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
