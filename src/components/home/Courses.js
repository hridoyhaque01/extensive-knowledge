import React from "react";

import { Link } from "react-router-dom";
import { Course } from "../../database/HomePageData";
import { Div, Section } from "../../styled-components/Container";
import { P } from "../../styled-components/Element";
import classes from "../../styles/home/course.module.css";
import Button from "../buttons/Button";
import { useScrollAuth } from "../contaxt/useScrollHook";

import SectionTop from "../SectionTop";

export default function Courses() {
  const { handleClick } = useScrollAuth();

  return (
    <Section padding="100px 0">
      <div className="container">
        <SectionTop title="TOP COURSES" subtitle="Popular Courses">
          <Button to="/courses" bgColor="blue" border="border" round="round">
            VIEW ALL Courses
          </Button>
        </SectionTop>
        <Div margin="40px 0 0" className="row g-4">
          {Course.map((currentEl) => (
            <div
              className="col-lg-4 col-md-6"
              key={currentEl.id}
              data-aos="fade-up"
              data-aos-delay={currentEl.delay}
            >
              <Link
                to={currentEl.path}
                className={classes.singleCourse}
                onClick={handleClick}
              >
                <div className={classes.courseImg}>
                  <img
                    src={currentEl.image}
                    alt="single course"
                    className="img-fluid"
                  />
                </div>
                <div className={classes.courseDetails}>
                  <div className={classes.price}>
                    <span className="d-inline-block">{currentEl.price}</span>
                    <span>{currentEl.tag}</span>
                  </div>
                  <h4 className={classes.priceTitle} onClick={handleClick}>
                    {currentEl.title}
                  </h4>
                  <div className={classes.courseFooter}>
                    <P>
                      <span>
                        <i className={currentEl.userIcon} />
                      </span>
                      <span>{currentEl.views}</span>
                    </P>
                    <P>
                      <span>
                        <i className={currentEl.starIcon} />
                        <i className={currentEl.starIcon} />
                        <i className={currentEl.starIcon} />
                      </span>
                      <span>{currentEl.rating}</span>
                    </P>
                    <button
                      type="button"
                      className={classes.courseBtn}
                      onClick={handleClick}
                    >
                      <i className={currentEl.arrowIcon} />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Div>
      </div>
    </Section>
  );
}
