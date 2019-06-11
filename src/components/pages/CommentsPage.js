import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { selectedComments } from "../../redux/actions/getComments";

import {
  BoxAllPostPage,
  BoxTitlePage,
  TitleHomePage,
  BoxComment,
  Load,
  IdComment
} from "./style";

class CommentsPage extends Component {
  componentDidMount() {
    const { commentsId } = this.props.match.params;
    this.props.selectedComments(commentsId);
  }

  mapComments = arr => {
    return arr.map(el => {
      return (
        <BoxComment key={el.id}>
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
    console.log("TCL: CommentsPage -> render -> comments", comments)

    return (
      <BoxAllPostPage>
        <BoxTitlePage>
          <TitleHomePage>Comments</TitleHomePage>
        </BoxTitlePage>

        {loading ? (
          <Load>Loading...</Load>
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
  selectedComments
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
}