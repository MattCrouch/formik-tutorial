import React from "react";
import "./AnswerGroup.css";

function AnswerGroup({ field, form, props }) {
  return (
    <fieldset>
      <legend>Vote</legend>
      <input
        {...field}
        id="answer-a"
        type="radio"
        name={field.name}
        value="a"
      />
      <label htmlFor="answer-a">Answer A</label>

      <input
        {...field}
        id="answer-b"
        type="radio"
        name={field.name}
        value="b"
      />
      <label htmlFor="answer-b">Answer B</label>

      <input
        {...field}
        id="answer-c"
        type="radio"
        name={field.name}
        value="c"
      />
      <label htmlFor="answer-c">Answer C</label>

      <input
        {...field}
        id="answer-d"
        type="radio"
        name={field.name}
        value="d"
      />
      <label htmlFor="answer-d">Answer D</label>
    </fieldset>
  );
}

export default AnswerGroup;
