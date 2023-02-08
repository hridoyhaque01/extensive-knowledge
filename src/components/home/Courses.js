import React from "react";

import { Link } from "react-router-dom";
import { Course } from "../../database/HomePageData";
import { Div, Section } from "../../styled-components/Container";
import { Button as ArrBtn, P } from "../../styled-components/Element";
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
            <div className="col-lg-4 col-md-6" key={currentEl.id}>
              <Link
                to="/courses"
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
                  <Link
                    className={classes.priceTitle}
                    to={currentEl.path}
                    onClick={handleClick}
                  >
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
                    <ArrBtn
                      href="/"
                      padding="6px 14px"
                      border="1px solid var(--blue-clr)"
                      color="var(--dark-clr)"
                      className={classes.courseBtn}
                      onClick={handleClick}
                    >
                      <i className={currentEl.arrowIcon} />
                    </ArrBtn>
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
