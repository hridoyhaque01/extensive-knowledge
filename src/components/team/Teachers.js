import React from "react";
import { Link } from "react-router-dom";
import src from "../../images/team/1.png";
import { Section } from "../../styled-components/Container";
import { H1, H2 } from "../../styled-components/Element";
import classes from "../../styles/team/Teacher.module.css";
import PageNavigation from "../PageNavigation";

export default function Teachers() {
  return (
    <>
      <PageNavigation pageName="teacher" />
      <Section padding="100px 0 220px">
        <div className="container">
          <div className={`text-center ${classes.sectionTop}`}>
            <H1 color="var(--orange-clr)">instructor</H1>
            <H2 color="var(--dark-clr)">Expert Teachers</H2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className={classes.singleTeacher}>
                <div className={classes.TeacherImg}>
                  <img
                    src={src}
                    alt="extensive-knowledge"
                    className="img-fluid"
                  />
                </div>
                <div className={classes.teacherDetails}>
                  <h2>
                    <Link to="/team/team1"> Jhon Pedrocas</Link>
                  </h2>
                  <h3>Professor</h3>
                  <ul
                    className={`d-flex align-items-center justify-content-center ${classes.social}`}
                  >
                    <li>
                      <Link to="/">
                        <i className="bx bxl-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="bx bxl-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="bx bxl-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="bx bxl-facebook" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
