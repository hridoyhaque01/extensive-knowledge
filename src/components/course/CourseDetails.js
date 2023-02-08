import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import {
  CurriculumData,
  DurationData,
  InstructorData,
  OverviewData,
  ReviewsData,
} from "../../database/CoursePageData";
import { courseVid } from "../../images/course/Image";
import { Section } from "../../styled-components/Container";
import classes from "../../styles/course/CourseDetails.module.css";
import Button from "../buttons/Button";
import PageNavigation from "../PageNavigation";
import PlayBtn from "../PlayBtn";

export default function CourseDetails() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <PageNavigation pageName="course details">
        <li className="breadcrumb-item">
          <Link to="/courses">courses</Link>
        </li>
      </PageNavigation>

      <Section
        padding="100px 0 220px"
        className="btmSec"
        bgColor="var(--light-blue-clr)"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div className={classes.introTabs}>
                <ul
                  className={`nav nav-tabs ${classes.tabLists}`}
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <button
                      type="button"
                      className="nav-link tabBtn active"
                      id="prod-overview-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#prod-overview"
                      role="tab"
                      aria-controls="prod-overview"
                      aria-selected="true"
                    >
                      Overview
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="nav-link tabBtn"
                      id="prod-curriculum-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#prod-curriculum"
                      role="tab"
                      aria-controls="prod-curriculum"
                      aria-selected="false"
                    >
                      Curriculum
                    </button>
                  </li>
                  <li className="nav-item tab-btns">
                    <button
                      type="button"
                      className="nav-link tabBtn"
                      id="prod-instructor-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#prod-instructor"
                      role="tab"
                      aria-controls="prod-instructor"
                      aria-selected="false"
                    >
                      Instructor
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="nav-link tabBtn"
                      id="prod-faq-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#prod-faq"
                      role="tab"
                      aria-controls="prod-faq"
                      aria-selected="false"
                    >
                      Faq
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="nav-link tabBtn"
                      id="prod-reviews-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#prod-reviews"
                      role="tab"
                      aria-controls="prod-reviews"
                      aria-selected="false"
                    >
                      Reviews
                    </button>
                  </li>
                </ul>

                {/* tab contents  */}

                <div
                  className={`tab-content ${classes.tabContent}`}
                  id="myTabContent"
                >
                  {/* overview content  */}

                  <div
                    className={`tab-pane fade show active ${classes.singleContent}`}
                    id="prod-overview"
                    role="tabpanel"
                    aria-labelledby="prod-overview-tab"
                  >
                    <div className={classes.contents}>
                      <h4 className={`${classes.commonClr} $`}>
                        {OverviewData.title}
                      </h4>
                      <p>{OverviewData.para1}</p>
                      <p>{OverviewData.para2}</p>
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
                      <h3
                        className={`${classes.commonClr} ${classes.subtitle}`}
                      >
                        {OverviewData.learnTitle}
                      </h3>
                      <ul className={classes.reviewLists}>
                        {OverviewData.learn.map((item) => (
                          <li key={item.id}>
                            <i className={item.icon} />
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                      <h3
                        className={`${classes.commonClr} ${classes.subtitle}  ${classes.requireText}`}
                      >
                        {OverviewData.reqTitle}
                      </h3>
                      <ul className={classes.reviewLists}>
                        {OverviewData.Requirement.map((item) => (
                          <li key={item.id}>
                            <i className={item.icon} />
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* curriculam content  */}

                  <div
                    className="tab-pane fade"
                    id="prod-curriculum"
                    role="tabpanel"
                    aria-labelledby="prod-curriculum-tab"
                  >
                    <div className={classes.contents}>
                      <div id="accordion" className={classes.accordionBox}>
                        {/* singleCollapse  */}

                        {CurriculumData.map((item) => (
                          <div
                            className={`card accordion ${classes.card}`}
                            key={item.id}
                          >
                            <div
                              className={`card-header ${classes.cardHeader}`}
                              id="headingOne"
                            >
                              <h5 className="mb-0">
                                <button
                                  type="button"
                                  className="common-btn"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#${item.id}`}
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  {item.title}
                                </button>
                              </h5>
                            </div>

                            <div
                              id={item.id}
                              className="collapse"
                              aria-labelledby="headingOne"
                              data-parent="#accordion"
                            >
                              <div
                                className={`card-body acc-content current ${classes.cardBody}`}
                              >
                                {item.lists.map((list) => (
                                  <div
                                    className={classes.cardContent}
                                    key={list.id}
                                  >
                                    <div className={classes.leftContent}>
                                      <p onClick={() => setOpen(true)}>
                                        <i className={list.icon} />
                                        {list.text}
                                      </p>
                                      <div className="">
                                        {list.link}
                                        <ModalVideo
                                          channel="youtube"
                                          isOpen={isOpen}
                                          videoId={list.link}
                                          onClose={() => setOpen(false)}
                                        />
                                      </div>
                                    </div>
                                    <div className={classes.rightContent}>
                                      <p className={classes.length}>
                                        {list.duration}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* instructor content  */}

                  <div
                    className={`tab-pane fade ${classes.singleContent}`}
                    id="prod-instructor"
                    role="tabpanel"
                    aria-labelledby="prod-instructor-tab"
                  >
                    <div className={classes.contents}>
                      <h3 className={`${classes.commonClr} ${classes.title}`}>
                        Instructors
                      </h3>
                      <div className="row">
                        {InstructorData.map((item) => (
                          <div
                            className="col-lg-6 col-md-6 col-sm-12"
                            key={item.id}
                          >
                            <div className={classes.singleItem}>
                              <div className={classes.imgPart}>
                                <img
                                  src={item.image}
                                  alt="ext-knowledge"
                                  className="img-fluid"
                                />
                              </div>
                              <div className={classes.teacherContent}>
                                <h4>
                                  <Link to={item.path}>{item.name}</Link>
                                </h4>
                                <span>{item.state}</span>
                                <ul className={classes.socialLinks}>
                                  {item.links.map((link) => (
                                    <li key={link.id}>
                                      <Link to={link.link}>
                                        <img
                                          src={link.icon}
                                          alt="ext-knowledge"
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
                  </div>

                  {/* faq content  */}

                  <div
                    className="tab-pane fade"
                    id="prod-faq"
                    role="tabpanel"
                    aria-labelledby="prod-curriculum-tab"
                  >
                    <div className={classes.contents}>
                      <div id="accordion" className={classes.accordionBox}>
                        {/* singleCollapse  */}

                        {CurriculumData.map((item) => (
                          <div
                            className={`card accordion ${classes.card}`}
                            key={`${item.id}01`}
                          >
                            <div
                              className={`card-header ${classes.cardHeader}`}
                              id="headingOne"
                            >
                              <h5 className="mb-0">
                                <button
                                  type="button"
                                  className="common-btn"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#${item.id}01`}
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  {item.title}
                                </button>
                              </h5>
                            </div>

                            <div
                              id={`${item.id}01`}
                              className="collapse"
                              aria-labelledby="headingOne"
                              data-parent="#accordion"
                            >
                              <div
                                className={`card-body acc-content current ${classes.cardBody}`}
                              >
                                {item.lists.map((list) => (
                                  <div
                                    className={classes.cardContent}
                                    key={`${list.id}01`}
                                  >
                                    <div className={classes.leftContent}>
                                      <p onClick={() => setOpen(true)}>
                                        <i className={list.icon} />
                                        {list.text}
                                      </p>
                                      <div className="">
                                        <ModalVideo
                                          channel="youtube"
                                          autoplay
                                          isOpen={isOpen}
                                          videoId={list.link}
                                          onClose={() => setOpen(false)}
                                        />
                                      </div>
                                    </div>
                                    <div className={classes.rightContent}>
                                      <p className={classes.length}>
                                        {list.duration}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* faq content  */}

                  {/* reviews content  */}

                  <div
                    className={`tab-pane fade ${classes.singleContent}`}
                    id="prod-reviews"
                    role="tabpanel"
                    aria-labelledby="prod-reviews-tab"
                  >
                    <div className={classes.content}>
                      {/* single review  */}

                      {ReviewsData.map((item) => (
                        <div className={classes.reviewBox} key={item.id}>
                          <h4
                            className={`${classes.commonClr} ${classes.title} ${classes.reviewTitle}`}
                          >
                            {item.name}
                          </h4>
                          <div className={classes.rating}>
                            <p>
                              <span>{item.number}</span>
                              <span>
                                <i className={item.review} />
                                <i className={item.review} />
                                <i className={item.review} />
                                <i className={item.review} />
                                <i className={item.review} />
                              </span>
                            </p>

                            <span>{item.text}</span>
                          </div>
                          <p>{item.para}</p>
                          <p className={classes.helpful}>{item.titletext}</p>
                          <ul className={classes.likeOption}>
                            <li>
                              <span>
                                <i className={item.icon1} />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className={item.icon2} />
                              </span>
                            </li>
                            <li>
                              <Link className={classes.report} to="/">
                                {item.reporttext}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-4">
              <div className={classes.wedgetContent}>
                <div className={classes.wedgetVideo}>
                  <div className={classes.imgPart}>
                    <img
                      className="courseVid"
                      src={courseVid}
                      alt="extensive-knowledge"
                    />
                  </div>
                  <div className={classes.playerContent}>
                    <PlayBtn handleClick={setOpen}>
                      <i className="bx bx-play" />
                    </PlayBtn>

                    <div className="">
                      <ModalVideo
                        channel="youtube"
                        autoplay
                        isOpen={isOpen}
                        videoId="FTFaQWZBqQ8"
                        onClose={() => setOpen(false)}
                      />
                    </div>

                    <h4>Preview this course</h4>
                  </div>
                </div>
                <div className={classes.courseFeature}>
                  <ul>
                    {DurationData.map((item) => (
                      <li key={item.id}>
                        <span className="label">
                          <i className={item.icon} />
                          {item.text}
                        </span>
                        <span className="value">{item.number}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={classes.btnPart}>
                  <Button to="/login" bgColor="orange">
                    $35
                  </Button>
                  <Button to="/login" bgColor="orange">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
