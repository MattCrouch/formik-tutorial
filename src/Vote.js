import React from "react";
import classNames from "classnames";
import { Formik, Field } from "formik";
import AnswerGroup from "./AnswerGroup";
import "./Vote.css";

// Form component
function Form({ errors, handleSubmit, options, touched }) {
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
          <Field autoComplete="name" id="name" name="name" type="text" />
          {!!errors.name && touched.name && (
            <div className="error-message">{errors.name}</div>
          )}
        </div>
      </div>

      <Field component={AnswerGroup} options={options} name="answer" />

      <input type="submit" value="Vote now" />
    </form>
  );
}

// Exported function
function Vote({ options }) {
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
      render={props => <Form {...props} options={options} />}
      validate={validate}
    />
  );
}

export default Vote;
