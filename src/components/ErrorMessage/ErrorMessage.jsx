import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={s.error}>
      <p>{message || "Something went wrong. Please try again later."}</p>
    </div>
  );
};

export default ErrorMessage;
