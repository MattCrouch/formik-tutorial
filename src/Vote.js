import React from "react";
import { Formik, Field } from "formik";
import classNames from "classnames";
import "./Vote.css";

// Form component
const Form = ({ errors, handleSubmit }) => (
  <form className="vote" onSubmit={handleSubmit}>
    <div className="input-group">
      <label htmlFor="name">Name</label>
      <div
        className={classNames({
          "validation-group": true,
          error: !!errors.name
        })}
      >
        <Field autoComplete="name" type="text" id="name" name="name" />
        {!!errors.name && <div className="error-message">{errors.name}</div>}
      </div>
    </div>

    <input type="submit" value="Vote now" />
  </form>
);

// Exported function
function Vote() {
  const onSubmit = values => {
    console.log(values);
  };

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={onSubmit}
      validate={validate}
      render={props => <Form {...props} />}
    />
  );
}

export default Vote;
