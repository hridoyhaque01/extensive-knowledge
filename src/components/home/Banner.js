import React from "react";
import { P } from "../../styled-components/Element";
import classes from "../../styles/home/Banner.module.css";
import Button from "../buttons/Button";

export default function Banner() {
  return (
    <section className={`${classes.banner}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 ">
            <h1>Education During COVID-19 Moving Towards E-Learning</h1>
            <P margin="25px 0 35px">
              Every act of conscious learning requires the willingness to suffer
              an injury to one’s self-esteem during COVID-19.
            </P>

            <Button to="/login" round="round" bgColor="blue">
              get started now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
