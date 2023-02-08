import React from "react";
import { H1, H2 } from "../styled-components/Element";
import classes from "../styles/SectionTop.module.css";

export default function SectionTop({ title, subtitle, children }) {
  return (
    <div className="d-flex flex-column flex-md-row  align-items-center justify-content-md-between align-items-md-end">
      <div className={`${classes.titles} text-center text-md-start`}>
        <H1 color="var(--blue-clr)">{title}</H1>
        <H2 color="var(--dark-clr)">{subtitle}</H2>
      </div>
      <div className={classes.secBtn}>{children}</div>
    </div>
  );
}
