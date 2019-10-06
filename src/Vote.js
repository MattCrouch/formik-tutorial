import React from "react";
import { Formik, Field } from "formik";
import classNames from "classnames";
import AnswerGroup from "./AnswerGroup";
import "./Vote.css";

// Form component
function Form({ touched, errors, handleSubmit }) {
  return (
    <form className="vote" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <div
          className={classNames({
            "validation-group": true,
            error: !!errors.name && touched.name
          })}
        >
          <Field autoComplete="name" type="text" id="name" name="name" />
          {!!errors.name && touched.name && (
            <div className="error-message">{errors.name}</div>
          )}
        </div>
      </div>

      <Field component={AnswerGroup} name="answer" />

      <input type="submit" value="Vote now" />
    </form>
  );
}

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

    if (!values.answer) {
      errors.answer = "Answer is required";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{ name: "", answer: "" }}
      onSubmit={onSubmit}
      validate={validate}
      render={props => <Form {...props} />}
    />
  );
}

export default Vote;
