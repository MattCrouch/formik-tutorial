import React from "react";
import classNames from "classnames";
import { Formik, Field } from "formik";
import AnswerGroup from "./AnswerGroup";
import "./Vote.css";

// This component is the form itself
function Form({ errors, handleSubmit, options, touched }) {
  return (
    <form className="vote" onSubmit={handleSubmit}>
      <div className="input-group">
        {/* Label every element as usual */}
        <label htmlFor="name">Name</label>
        {/* Apply a class if there is an error */}
        <div
          className={classNames({
            "validation-group": true,
            error: !!errors.name && touched.name
          })}
        >
          {/* Use `Field` to connect to Formik */}
          <Field autoComplete="name" id="name" name="name" type="text" />
          {!!errors.name && touched.name && (
            <div className="error-message">{errors.name}</div>
          )}
        </div>
      </div>

      {/* Use the `component` prop to add a custom component to the form instead */}
      <Field component={AnswerGroup} options={options} name="answer" />

      {/* Submit the form like any other */}
      <input type="submit" value="Vote now" />
    </form>
  );
}

// This component is what is rendered within to <App>
function Vote({ options }) {
  // Submit form values
  const onSubmit = values => {
    console.log(values);
  };

  // Make sure all the data within the form is valid
  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.answer) {
      errors.answer = "Answer is required";
    }

    // The form will not submit without an empty `errors` object
    return errors;
  };

  // Define the behaviour of the form using the Formik component
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
