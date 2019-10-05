import React from "react";
import { Formik } from "formik";
import "./Vote.css";

// Form component
const Form = ({ handleSubmit, handleChange, handleBlur, values, errors }) => (
  <form className="vote" onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input autoComplete="name" type="text" id="name" name="name" />
    <input type="submit" value="Vote now" />
  </form>
);

// Exported function
function Vote() {
  return <Formik render={props => <Form {...props} />} />;
}

export default Vote;
