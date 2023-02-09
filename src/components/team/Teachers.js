import React from "react";
import { Link } from "react-router-dom";
import { TeachersData } from "../../database/TeamPageData";
import { Section } from "../../styled-components/Container";
import { H1, H2 } from "../../styled-components/Element";
import classes from "../../styles/team/Teacher.module.css";
import { useScrollAuth } from "../contaxt/useScrollHook";
import PageNavigation from "../PageNavigation";

export default function Teachers() {
  const { handleClick } = useScrollAuth();

  return (
    <>
      <PageNavigation pageName="teacher" />
      <Section padding="100px 0 220px" className="btmSec">
        <div className="container">
          <div className={`text-center ${classes.sectionTop}`}>
            <H1 color="var(--blue-clr)">instructor</H1>
            <H2 color="var(--dark-clr)">Expert Teachers</H2>
          </div>
          <div className="row gy-4">
            {TeachersData.map((currentEl) => (
              <div className="col-lg-4 col-md-6" key={currentEl.id}>
                <div
                  className={classes.singleTeacher}
                  data-aos="fade-up"
                  data-aos-delay={currentEl.delay}
                >
                  <div className={classes.TeacherImg}>
                    <img
                      src={currentEl.image}
                      alt="extensive-knowledge"
                      className="img-fluid"
                    />
                  </div>
                  <div className={classes.teacherDetails}>
                    <h2>
                      <Link to={currentEl.path} onClick={handleClick}>
                        {" "}
                        {currentEl.name}
                      </Link>
                    </h2>
                    <h3>{currentEl.state}</h3>

                    <ul
                      className={`d-flex align-items-center justify-content-center ${classes.social}`}
                    >
                      {currentEl.links.map((link) => (
                        <li key={link.id}>
                          <Link to={link.link}>
                            <img
                              src={link.icon}
                              alt="ext-knowledge"
                              className="img-fluid"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
