import React from "react";
import { H1, H2 } from "../styled-components/Element";
import classes from "../styles/Newsletter.module.css";

export default function Newsletter() {
  return (
    <div className={` ${classes.newsletter}`}>
      <div className="row justify-content-between align-items-center">
        <div className={`col-md-5 ${classes.newsletterText}`}>
          <H1 color="var(--white-clr)">newsletter</H1>
          <H2 color="var(--white-clr)">Subscribe Us to join Our Community</H2>
        </div>
        <div className={`col-md-6 ${classes.form}`}>
          <form action="#">
            <div className="input-group">
              <input
                type="email"
                className="form-control cmnInput"
                placeholder="enter your email"
              />
              <button
                type="submit"
                className={`common-btn ${classes.newsletterBtn}`}
              >
                <i className="bx bx-send" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
