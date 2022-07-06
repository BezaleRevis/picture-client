import React from "react";
import "./function.css";
const Alert = ({ message, displayMessage, classN }) => {
  return (
    <div
      style={{
        display: displayMessage,
      }}
      className={`${classN} alert alert-messege`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Alert;
