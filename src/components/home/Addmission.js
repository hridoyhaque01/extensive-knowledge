import React from "react";
import { addmission } from "../../images/exporter/Images";
import { Section } from "../../styled-components/Container";
import { H2, P } from "../../styled-components/Element";
import classes from "../../styles/home/Addmission.module.css";
import Button from "../buttons/Button";

export default function Addmission() {
  return (
    <Section bgColor="var(--light-blue-clr)" className="noPadd">
      <div className="row align-items-xl-center g-0">
        <div className="col-lg-6 ">
          <div className={`${classes.commonPart} ${classes.addImg}`}>
            <img src={addmission} alt="addmission" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6 ">
          <div className={`${classes.commonPart} ${classes.addDetails}`}>
            <H2 color="var(--dark-clr)">Admission Open for 2020</H2>
            <P margin="20px 0 30px">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of your moment,
              so blinded by desire those who fail in their duty through
              weakness. These cases are perfectly simple and easy every pleasure
              is to be welcomed and every pain avoided.
            </P>
            <Button to="/login" round="round" bgColor="blue">
              Apply now
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
