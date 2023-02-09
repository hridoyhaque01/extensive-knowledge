import React from "react";
import { Link } from "react-router-dom";
import imgSrc from "../images/error.svg";
import classes from "../styles/Error.module.css";

function Error() {
  return (
    <section className={classes.dogesh}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={classes.dogImg}>
              <img src={imgSrc} alt="ext-knowledge" />
            </div>
            <div className={classes.errorContent}>
              <h1>Erorr</h1>
              <p>You have entered the wrong URL</p>
              <p>
                go back to <Link to="/">Home page </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error;
