import React from "react";
import classNames from "classnames";
import { Formik, Field } from "formik";
import AnswerGroup from "./AnswerGroup";
import "./Vote.css";

// This component is the form itself
function Form({ errors, handleSubmit, options, touched }) {
  return <form className="vote"></form>;
}

// This component is what is rendered within to <App>
function Vote({ options }) {
  // Submit form values

  // Make sure all the data within the form is valid

  // Define the behaviour of the form using the Formik component
  return null;
}

export default Vote;
