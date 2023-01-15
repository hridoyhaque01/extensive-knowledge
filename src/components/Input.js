import React from "react";
import classes from "../styles/Input.module.css";

export default function Input({ handleChange, customeClass, ...rest }) {
  return (
    <input
      type="text"
      onChange={(e) => handleChange(e.target.value)}
      className={`${classes.commonInput} ${classes[customeClass]}`}
      {...rest}
    />
  );
}
