import React from "react";
import classes from "../../styles/SubmitBtn.module.css";

export default function Button({ children, bgClass }) {
  return (
    <button
      type="submit"
      className={`${classes.submitBtn} ${classes[bgClass]}`}
    >
      {children}
    </button>
  );
}
