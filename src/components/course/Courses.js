import React, { useState } from "react";

import { Link } from "react-router-dom";
import { CourseData } from "../../database/CoursePageData";
import { Section } from "../../styled-components/Container";
import classes from "../../styles/course/Course.module.css";
import { useScrollAuth } from "../contaxt/useScrollHook";
import PageNavigation from "../PageNavigation";

export default function Courses() {
  const { handleClick } = useScrollAuth();
  const buttons = [];

  const [currentPage, setCurrentPage] = useState(1);
  const [bookPerPage, setBookPerPage] = useState(6);

  const totalCourse = CourseData;
  const courseLength = CourseData.length;
  const lastPostIndex = currentPage * bookPerPage;
  const firstPostIndex = lastPostIndex - bookPerPage;
  const currentBooks = totalCourse.slice(firstPostIndex, lastPostIndex);

  for (let i = 1; i <= Math.ceil(courseLength / bookPerPage); i++) {
    buttons.push(i);
  }

  return (
    <>
      <PageNavigation pageName="course" />
      <Section padding="100px 0 220px" className="text-center btmSec">
        <div className="container ">
          <div className="row gy-4 ">
            {currentBooks.map((currentEl) => (
              <div
                className="col-md-6 col-lg-4"
                key={currentEl.id}
                data-aos="fade-up"
                data-aos-delay={currentEl.delay}
              >
                <div className={classes.singleCourse}>
                  <div className={classes.courseContent}>
                    <div className={classes.courseImg}>
                      <img src={currentEl.img} alt="" className="img-fluid" />
                    </div>
                    <div className={classes.courseName}>
                      <h2>{currentEl.tag}</h2>
                      <h3>
                        <Link to="/courses/12a">{currentEl.title}</Link>
                      </h3>
                    </div>
                  </div>

                  <div className={classes.courseDetails}>
                    <div className={classes.courseName}>
                      <h2>{currentEl.tag}</h2>
                      <h3>
                        <Link to="/courses/12a" onClick={handleClick}>
                          {currentEl.title}
                        </Link>
                      </h3>
                    </div>
                    <div
                      className={`d-flex align-items-center justify-content-center ${classes.review}`}
                    >
                      <p>
                        <span>
                          <i className={currentEl.userIcon} />
                        </span>
                        <span>{currentEl.vote}</span>
                      </p>
                      <p>
                        <span>
                          <i className={currentEl.starIcon} />
                          <i className={currentEl.starIcon} />
                          <i className={currentEl.starIcon} />
                        </span>
                        <span>[5]</span>
                      </p>
                    </div>
                    <div className={classes.prices}>
                      <Link to="/courses/12a" className={classes.priceBtn}>
                        <span>${parseFloat(currentEl.price).toFixed(2)}</span>
                        <span className={classes.arrowIcon}>
                          <i className={currentEl.arrowIcon} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* pagination  */}

          <div
            className={`${classes.pagination} d-inline-flex align-items-center`}
          >
            <button
              type="button"
              className={`common-btn ${classes.prev} ${classes.pageBtn}`}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <i className="bx bx-arrow-back" />
            </button>
            {buttons
              ? buttons.map((button, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`common-btn ${classes.pageBtn} ${
                      button === currentPage ? `${classes.active}` : ""
                    }`}
                    onClick={() => setCurrentPage(button)}
                  >
                    {button} <span>.</span>
                  </button>
                ))
              : ""}
            <button
              type="button"
              className={`common-btn ${classes.next} ${classes.pageBtn}`}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === buttons.length}
            >
              <i className="bx bx-arrow-back" />
            </button>
          </div>
        </div>
      </Section>
    </>
  );
}
