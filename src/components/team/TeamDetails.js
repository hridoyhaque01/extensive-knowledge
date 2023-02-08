import React from "react";
import { Link } from "react-router-dom";
import { Social } from "../../database/HomePageData";
import { team1 } from "../../images/team/Images";
import { Section } from "../../styled-components/Container";
import classes from "../../styles/team/TeacherDetails.module.css";
import PageNavigation from "../PageNavigation";

export default function TeamDetails() {
  return (
    <>
      <PageNavigation pageName="teacher details">
        <li className="breadcrumb-item">
          <Link to="/team">teacher</Link>
        </li>
      </PageNavigation>

      <Section padding="100px 0 220px" className="btmSec">
        <div className="container">
          <div className="row ">
            <div className="col-lg-5">
              <div className={classes.imagePart}>
                <div className={classes.img}>
                  <img
                    src={team1}
                    alt="extensive-knowledge"
                    className="img-fluid"
                  />
                </div>
                <div className={classes.teamContent}>
                  <h3>Eliena Rose</h3>
                  <p>Chief Instructor</p>
                  <ul
                    className={`d-flex align-items-center justify-content-between ${classes.personalInfo}`}
                  >
                    <li className="email">
                      <i className="bx bxs-envelope" />
                      <a href="mailto:info@yourwebsite.com">
                        info@yourwebsite.com
                      </a>
                    </li>
                    <li className="phone">
                      <i className="bx bxs-phone" />
                      <a href="tel:+088-589-8745">(+088) 589-8745</a>
                    </li>
                  </ul>
                </div>
                <div className={classes.social}>
                  <ul className="d-flex align-items-center justify-content-center">
                    {Social.map((currentEl) => (
                      <li key={currentEl.id}>
                        <Link to={currentEl.link}>
                          <img
                            src={currentEl.icon}
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
            <div className={`col-lg-7 ${classes.extraPadding}`}>
              <div className={classes.teamRightContent}>
                <h2>Eliena Rose</h2>
                <h4>A certified instructor From Educavo</h4>
                <ul
                  className={`d-flex align-items-center ${classes.studentDetails}`}
                >
                  <li>23,564 Total Students</li>
                  <li>
                    <span className="theme_color">4.5</span>
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                    <span className="fa fa-star" /> (1254 Rating)
                  </li>
                  <li>256 Reviews</li>
                </ul>
                <h5>About Me</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Nam liber tempor cum soluta
                  nobis eleifend option congue nihil imperdiet doming id quod
                  mazim placerat
                </p>
                <div className={classes.teamSkill}>
                  <h3>Our Teacher Skill:</h3>
                  <div className="row">
                    <div className={`col-md-6 ${classes.singleProgress}`}>
                      <div className={`progress ${classes.customProgress}`}>
                        <div
                          className={`progress-bar ${classes.progressBar}`}
                          role="progressbar"
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "95%" }}
                        >
                          <span className={classes.label}>Accounting</span>
                          <span className={classes.percentage}>95%</span>
                        </div>
                      </div>
                    </div>
                    <div className={`col-md-6 ${classes.singleProgress}`}>
                      <div className={`progress ${classes.customProgress}`}>
                        <div
                          className={`progress-bar ${classes.progressBar}`}
                          role="progressbar"
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "85%" }}
                        >
                          <span className={classes.label}>Accounting</span>
                          <span className={classes.percentage}>85%</span>
                        </div>
                      </div>
                    </div>
                    <div className={`col-md-6 ${classes.singleProgress}`}>
                      <div className={`progress ${classes.customProgress}`}>
                        <div
                          className={`progress-bar ${classes.progressBar}`}
                          role="progressbar"
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "95%" }}
                        >
                          <span className={classes.label}>Accounting</span>
                          <span className={classes.percentage}>95%</span>
                        </div>
                      </div>
                    </div>
                    <div className={`col-md-6 ${classes.singleProgress}`}>
                      <div className={`progress ${classes.customProgress}`}>
                        <div
                          className={`progress-bar ${classes.progressBar}`}
                          role="progressbar"
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "95%" }}
                        >
                          <span className={classes.label}>Accounting</span>
                          <span className={classes.percentage}>95%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className={classes.contentPart}>
              <h3>25 That Prevent Job Seekers From Overcoming Failure</h3>
              <p>
                Phasellus enim magna, varius et commodo ut, ultricies vitae
                velit. Ut nulla tellus, eleifend euismod pellentesque vel,
                sagittis vel justo. In libero urna, venenatis sit amet ornare
                non, suscipit nec risus. Sed consequat justo non mauris pretium
                at tempor justo sodales. Quisque tincidunt laoreet malesuada.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur.I was skeptical of SEO and content marketing at first,
                but the Lorem Ipsum Company not only proved itself financially
                speaking, but the response I have received from customers is
                incredible.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
