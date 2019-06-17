import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleForm from "../ui/Form/SimpleForm";
import { addComment } from "../../redux/actions/addComment";

import { WrapperForm, Headline } from "./style";

class Form extends Component {
  submit = values => {
    const reg = /^\/\w+\/\d+\/\w+\/\d+/;

    const { userId, postId } = this.props.match.params;

    this.props.history.push(...this.props.match.url.match(reg));
    const result = { ...values, userId, postId };

    this.props.addComment(result);
  };

  getInitialValues() {
    return {
      name: "Юрчик",
      body: "JJJJJJJ",
      email: "email@gmail.com"
    };
  }

  render() {
    return (
      <WrapperForm>
        <Headline>Добавьте свой коментарий</Headline>
        <SimpleForm
          onSubmit={this.submit}
          initialValues={this.getInitialValues()}
        />
      </WrapperForm>
    );
  }
}
const mapStateToProps = ({ commentsReducer }) => {
  return commentsReducer;
};

const mapDispatchToProps = {
  addComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

