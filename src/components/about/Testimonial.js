import React from "react";
import { TestimonalData } from "../../database/AboutPageData";
// import { Link } from "react-router-dom";
import { lapOne } from "../../images/about/Image";
import { Section } from "../../styled-components/Container";
import { H1, P } from "../../styled-components/Element";
import classes from "../../styles/about/Testimonial.module.css";
import Button from "../buttons/Button";

export default function Testimonial() {
  return (
    <Section padding="100px 0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div
              className={classes.donation}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={classes.donateImg}>
                <img src={lapOne} alt="donate img" />
              </div>
              <H1 color="var(--dark-clr)">Donation helps us</H1>
              <P margin="0 0 40px">
                Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed
                eius to mod tempors incididunt ut labore et dolore magna this
                aliqua enims ad minim.
              </P>
              <Button to="/login">Become A Donor</Button>
            </div>
          </div>

          <div className={`col-lg-8 ${classes.testimonialTexts}`}>
            {TestimonalData.map((currentEl) => (
              <div
                className={` ${classes.singleTest}`}
                key={currentEl.id}
                data-aos="fade-left"
                data-aos-delay={currentEl.delay}
              >
                <div className={classes.writerImg}>
                  <img
                    src={currentEl.image}
                    alt="person img"
                    className="img-fluid"
                  />
                </div>
                <div className={classes.testDetails}>
                  <h2>
                    <span className={classes.topQuote}>
                      <i className={currentEl.quoteTopIcon} />
                    </span>{" "}
                    {currentEl.quote}
                    <span className={classes.bottomQuote}>
                      <i className={currentEl.quoteBottomIcon} />
                    </span>
                  </h2>
                  <h3>{currentEl.name}</h3>
                  <p>{currentEl.state}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
