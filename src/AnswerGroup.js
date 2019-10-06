import React from "react";
import classNames from "classnames";
import "./AnswerGroup.css";

function AnswerGroup({ field, form, options }) {
  return (
    <fieldset className="answer-group">
      <legend>Answer</legend>
      <div
        className={classNames({
          "validation-group": true,
          error: !!form.errors[field.name] && form.touched[field.name]
        })}
      >
        {options.map(({ label, value }) => (
          <React.Fragment key={value}>
            <input
              {...field}
              id={`answer-${value}`}
              name={field.name}
              type="radio"
              value={value}
            />
            <label htmlFor={`answer-${value}`}>{label}</label>
          </React.Fragment>
        ))}

        {!!form.errors[field.name] && form.touched[field.name] && (
          <div className="error-message">{form.errors[field.name]}</div>
        )}
      </div>
    </fieldset>
  );
}

export default AnswerGroup;
