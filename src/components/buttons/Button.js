import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/LinkBtn.module.css";

export default function Button({ bgColor, to, children }) {
  return (
    <Link
      to={to}
      className={`common-btn ${classes.addBtn} ${classes[bgColor]}`}
    >
      {children}
    </Link>
  );
}
