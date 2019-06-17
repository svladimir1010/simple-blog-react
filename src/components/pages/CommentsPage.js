import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "../ui/Loader";
import PropTypes from "prop-types";

import { selectedUserComments } from "../../redux/actions/selectPost";

import {
  BoxAllPostPage,
  BoxTitlePage,
  TitleHomePage,
  BoxComment,
  // Load,
  IdComment,
  Button
} from "./style";

class CommentsPage extends Component {
  componentDidMount() {
    const { userId, postId } = this.props.match.params;
    this.props.selectedUserComments(userId, postId);
  }

  mapComments = arr => {
    return arr.map((el, id) => {
      return (
        <BoxComment key={id}>
          <IdComment>{el.id}.</IdComment>
          <IdComment> {el.body}</IdComment>
          <IdComment>name: &nbsp; &nbsp; {el.name}</IdComment>
          <IdComment>email: &nbsp; &nbsp; {el.email}</IdComment>
        </BoxComment>
      );
    });
  };

  render() {
    const { comments, loading, error } = this.props;

    return (
      <BoxAllPostPage>
        <BoxTitlePage>
          <TitleHomePage>Comments</TitleHomePage>
        </BoxTitlePage>
        <Button>
          <Link to={`${this.props.match.url}/addComment`}>
            New Comment
          </Link>
        </Button>

        {loading ? (
          <Loader />
        ) : error ? (
          <p>Error, try again</p>
        ) : (
          <>{this.mapComments(comments)}</>
        )}
      </BoxAllPostPage>
    );
  }
}

const mapStateToProps = ({ commentsReducer }) => {
  return commentsReducer;
};

const mapDispatchToProps = {
  selectedUserComments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsPage);

CommentsPage.propTypes = {
  commentsId: PropTypes.string,
  comments: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object
};
