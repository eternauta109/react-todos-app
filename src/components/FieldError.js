import React from "react";

const FieldError = ({ errors = [] }) => {
  if (!errors.length) {
    return null;
  }
  return (
    <div className="alert-danger">
      {errors.map((e, key) => (
        <p key={key}> {e} </p>
      ))}
    </div>
  );
};

export default FieldError;
