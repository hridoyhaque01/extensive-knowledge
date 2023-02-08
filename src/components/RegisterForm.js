import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../styled-components/Container";
import classes from "../styles/Register.module.css";
import Button from "./buttons/Submit";
import { useScrollAuth } from "./contaxt/useScrollHook";
import Input from "./Input";

export default function LoginForm() {
  const { handleClick } = useScrollAuth();
  return (
    <Section padding="100px 0 220px">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className={classes.formData}>
              <h2>Create New Account</h2>
              <form action="#">
                <div className={classes.singleInput}>
                  <Input type="text" placeholder="first name" />
                </div>
                <div className={classes.singleInput}>
                  <Input type="text" placeholder="last name" />
                </div>
                <div className={classes.singleInput}>
                  <Input type="email" placeholder="email address" />
                </div>
                <div className={classes.singleInput}>
                  <Input type="text" placeholder="username" />
                </div>
                <div className={classes.singleInput}>
                  <Input type="text" placeholder="password" />
                </div>
                <div className={classes.singleInput}>
                  <Input type="text" placeholder="confirm password" />
                </div>
                <div className={classes.submitBtn}>
                  <Button bgClass="orange">SIGN UP</Button>
                </div>
                <p>
                  Already have an account?{" "}
                  <Link to="/login" onClick={handleClick}>
                    {" "}
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
