import React from "react";
import { addmission } from "../../images/exporter/Images";
import { Section } from "../../styled-components/Container";
import { Button, H2, P } from "../../styled-components/Element";
import classes from "../../styles/home/Addmission.module.css";

export default function Addmission() {
  return (
    <Section bgColor="var(--light-blue-clr)">
      <div className="row align-items-center g-0">
        <div className="col-md-6 pe-4">
          <div className={classes.addImg}>
            <img src={addmission} alt="addmission" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 ps-4">
          <div className={classes.addDetails}>
            <H2 color="var(--dark-clr)">Admission Open for 2020</H2>
            <P margin="20px 0 30px">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of your moment,
              so blinded by desire those who fail in their duty through
              weakness. These cases are perfectly simple and easy every pleasure
              is to be welcomed and every pain avoided.
            </P>
            <Button
              to="/"
              padding="16px 40px"
              bgColor="var(--blue-clr)"
              color="var(--white-clr)"
            >
              Apply now
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
