import React from "react";
import { about } from "../../images/about/Image";
import { Section } from "../../styled-components/Container";
import { H1, H2 } from "../../styled-components/Element";
import classes from "../../styles/about/AboutEx.module.css";

export default function AboutEx() {
  return (
    <Section padding="100px 0" className="wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6  ps-lg-2 order-lg-2">
            <div
              className={classes.aboutImg}
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img src={about} alt="about-details" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6  pe-lg-5 order-lg-1">
            <div
              className={classes.aboutDetails}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <H1 color="var(--blue-clr)">about extensive knowledge</H1>
              <H2 color="var(--dark-clr)">
                Welcome to The Educavo Online Learning
              </H2>
              <p className={classes.detailsHead}>
                Recogizing the need is the primary than we expected Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Sint ipsa
                voluptatibus,
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed
                eius to mod tempors incididunt ut labore et dolore magna this
                aliqua enims ad minim. Lorem ipsum dolor sit amet, consectetur
                adipisic ing elit, sed eius to mod tempor. Lorem ipsum dolor sit
                amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
