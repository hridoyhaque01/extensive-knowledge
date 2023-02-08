import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/LinkBtn.module.css";
import { useScrollAuth } from "../contaxt/useScrollHook";

export default function Button({ bgColor, to, children, round, border }) {
  const { handleClick } = useScrollAuth();

  return (
    <Link
      to={to}
      className={`common-btn ${classes.addBtn} ${classes[bgColor]} ${classes[round]} ${classes[border]}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
