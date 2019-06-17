import React from "react";
import { Field, reduxForm } from "redux-form";

import {
  Form,
  BoxField,
  LabelField,
  Fields,
  BoxButton,
  Button
} from "./style";

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <BoxField>
        <LabelField>Name</LabelField>
        <Fields>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Name"
          />
        </Fields>
      </BoxField>

      <BoxField>
        <LabelField>Email</LabelField>
        <Fields>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </Fields>
      </BoxField>

      <BoxField>
        <LabelField>Body</LabelField>
        <Fields>
          <Field name="body" component="textarea" />
        </Fields>
      </BoxField>
      <BoxButton>
        <Button type="submit" disabled={pristine || submitting}>
          Sign Up
        </Button>
        {/* <button
          type="button"
          disabled={pristine || submitting}
          onClick={reset}>
          Clear Values
        </button> */}
      </BoxButton>
    </Form>
  );
};

export default reduxForm({
  form: "simple"
})(SimpleForm);
