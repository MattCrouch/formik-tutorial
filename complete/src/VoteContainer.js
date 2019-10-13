import React from "react";
import { Formik } from "formik";
import Vote from "./Vote";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  answer: Yup.mixed()
    .oneOf(["a", "b", "c", "d"])
    .required("Answer is required")
});

// Hold all of the logic for the form
function VoteContainer({ options }) {
  // Submit form values
  const onSubmit = async (values, { setSubmitting }) => {
    // Only called once the form is valid
    console.log("submitting...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitting(false);
    console.log(values);
  };

  // Define the behaviour of the form using the Formik component
  return (
    <Formik
      initialValues={{ name: "", answer: "" }}
      onSubmit={onSubmit}
      render={props => <Vote {...props} options={options} />}
      validationSchema={schema}
    />
  );
}

export default VoteContainer;
