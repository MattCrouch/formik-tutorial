import React from "react";
import "./AnswerGroup.css";

function AnswerGroup({ options, field, form, props }) {
  return (
    <fieldset className="answer-group">
      <legend>Vote</legend>
      {options.map(({ label, value }) => (
        <React.Fragment key={value}>
          <input
            {...field}
            id={`answer-${value}`}
            type="radio"
            name={field.name}
            value={value}
          />
          <label htmlFor={`answer-${value}`}>{label}</label>
        </React.Fragment>
      ))}
    </fieldset>
  );
}

export default AnswerGroup;
