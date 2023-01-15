import React from "react";
import { H1, H2 } from "../styled-components/Element";
import classes from "../styles/SectionTop.module.css";

export default function SectionTop({ title, subtitle, children }) {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <div className={classes.titles}>
        <H1 color="var(--blue-clr)">{title}</H1>
        <H2 color="var(--dark-clr)">{subtitle}</H2>
      </div>
      <div>{children}</div>
    </div>
  );
}
