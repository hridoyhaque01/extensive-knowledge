import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../styled-components/Container";
import classes from "../styles/PageNavigation.module.css";

export default function PageNavigation({ pageName, children }) {
  return (
    <Section padding="210px 0 120px" className={classes.pageNavigation}>
      <div
        className={`d-flex flex-column align-items-center ${classes.breadcrumbs}`}
      >
        <h1>{pageName}</h1>
        <nav aria-label="breadcrumb" className={classes.breadcrumbNav}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {children}
            <li className="breadcrumb-item active" aria-current="page">
              {pageName}
            </li>
          </ol>
        </nav>
      </div>
    </Section>
  );
}
