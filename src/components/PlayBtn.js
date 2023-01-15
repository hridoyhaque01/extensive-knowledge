import React from "react";
import classes from "../styles/PlayBtn.module.css";

export default function PlayBtn({ children, handleClick }) {
  return (
    <div className={classes.playBtn} onClick={() => handleClick(true)}>
      {children}
    </div>
  );
}
