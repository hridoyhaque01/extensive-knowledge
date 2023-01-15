import React from "react";
import { Link } from "react-router-dom";
import { Course } from "../../database/HomePageData";
import { Div, Section } from "../../styled-components/Container";
import { Button, P } from "../../styled-components/Element";
import classes from "../../styles/home/course.module.css";
import SectionTop from "../SectionTop";

export default function Courses() {
  return (
    <Section padding="100px 0">
      <div className="container">
        <SectionTop title="TOP COURSES" subtitle="Popular Courses">
          <Button
            to="/"
            padding="12px 34px"
            border="2px solid var(--blue-clr)"
            color="var(--dark-clr)"
          >
            VIEW ALL Courses
          </Button>
        </SectionTop>
        <Div margin="40px 0 0" className="row g-5">
          {Course.map((currentEl) => (
            <div className="col-md-4" key={currentEl.id}>
              <div className={classes.singleCourse}>
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
                  <Link className={classes.priceTitle} to="/">
                    {currentEl.title}
                  </Link>
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
                    <Button
                      to="/"
                      padding="6px 14px"
                      border="1px solid var(--blue-clr)"
                      color="var(--dark-clr)"
                      className={classes.courseBtn}
                    >
                      <i className={currentEl.arrowIcon} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Div>
      </div>
    </Section>
  );
}
