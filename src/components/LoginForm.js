import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../styled-components/Container";
import classes from "../styles/Login.module.css";
import Button from "./buttons/Submit";
import Input from "./Input";

export default function LoginForm() {
  return (
    <Section padding="100px 0 220px">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className={classes.formData}>
              <h2>Login</h2>
              <form action="#">
                <div className={classes.singleInput}>
                  <Input type="email" placeholder="e-mail" />
                </div>
                <div className={classes.singleInput}>
                  <Input type="password" placeholder="password" />
                </div>
                <div className={classes.submitBtn}>
                  <Button bgClass="orange">login</Button>
                </div>
                <p>
                  Not registered? <Link to="/">Create an account</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}