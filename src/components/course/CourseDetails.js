import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
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

      <Section padding="100px 0 220px" bgColor="var(--light-blue-clr)">
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
                        Educavo Course Details
                      </h4>
                      <p>
                        Phasellus enim magna, varius et commodo ut, ultricies
                        vitae velit. Ut nulla tellus, eleifend euismod
                        pellentesque vel, sagittis vel justo. In libero urna,
                        venenatis sit amet ornare non, suscipit nec risus. Sed
                        consequat justo non mauris pretium at tempor justo
                        sodales. Quisque tincidunt laoreet malesuada. Cum sociis
                        natoque penatibus.
                      </p>
                      <p>
                        Eleifend euismod pellentesque vel Phasellus enim magna,
                        varius et commodo ut, ultricies vitae velit. Ut nulla
                        tellus, sagittis vel justo. In libero urna, venenatis
                        sit amet ornare non, suscipit nec risus. Sed consequat
                        justo non mauris pretium at tempor justo sodales.
                        Quisque tincidunt laoreet malesuada. Cum sociis natoque
                        penatibus.
                      </p>
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
                        What you’ll learn?
                      </h3>
                      <ul className={classes.reviewLists}>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          <span>
                            Phasellus enim magna, varius et commodo ut.
                          </span>
                        </li>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          Sed consequat justo non mauris pretium at tempor
                          justo.
                        </li>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          <span>
                            Ut nulla tellus, eleifend euismod pellentesque vel,
                            sagittis vel justo
                          </span>
                        </li>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          <span>
                            Phasellus enim magna, varius et commodo ut.
                          </span>
                        </li>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          <span>
                            Phasellus enim magna, varius et commodo ut.
                          </span>
                        </li>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          <span>
                            Sed consequat justo non mauris pretium at tempor
                            justo.
                          </span>
                        </li>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          <span>
                            Ut nulla tellus, eleifend euismod pellentesque vel,
                            sagittis vel justo
                          </span>
                        </li>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          <span>
                            Phasellus enim magna, varius et commodo ut.
                          </span>
                        </li>
                      </ul>
                      <h3
                        className={`${classes.commonClr} ${classes.subtitle}  ${classes.requireText}`}
                      >
                        Requirements
                      </h3>
                      <ul className={classes.reviewLists}>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          <span>
                            Phasellus enim magna, varius et commodo ut,
                            ultricies vitae velit. Ut nulla tellus, eleifend
                            euismod pellentesque vel, sagittis vel justo
                          </span>
                        </li>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          <span>
                            Ultricies vitae velit. Ut nulla tellus, eleifend
                            euismod pellentesque vel.
                          </span>
                        </li>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          <span />
                          Phasellus enim magna, varius et commodo ut.
                        </li>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          <span>
                            Varius et commodo ut, ultricies vitae velit. Ut
                            nulla tellus.
                          </span>
                        </li>
                        <li>
                          <i className="bx bx-chevrons-right" />
                          <span>
                            Phasellus enim magna, varius et commodo ut.
                          </span>
                        </li>
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

                        <div className={`card accordion ${classes.card}`}>
                          <div
                            className={`card-header ${classes.cardHeader}`}
                            id="headingOne"
                          >
                            <h5 className="mb-0">
                              <button
                                type="button"
                                className="common-btn"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                UI/ UX Introduction
                              </button>
                            </h5>
                          </div>

                          <div
                            id="collapseOne"
                            className="collapse "
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div
                              className={`card-body acc-content current ${classes.cardBody}`}
                            >
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* singleCollapse  */}

                        <div className={`card accordion ${classes.card}`}>
                          <div
                            className={`card-header ${classes.cardHeader}`}
                            id="headingOne"
                          >
                            <h5 className="mb-0">
                              <button
                                type="button"
                                className="common-btn"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="true"
                                aria-controls="collapseTwo"
                              >
                                Color Theory
                              </button>
                            </h5>
                          </div>

                          <div
                            id="collapseTwo"
                            className="collapse "
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div
                              className={`card-body acc-content current ${classes.cardBody}`}
                            >
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* singleCollapse  */}

                        <div className={`card accordion ${classes.card}`}>
                          <div
                            className={`card-header ${classes.cardHeader}`}
                            id="headingOne"
                          >
                            <h5 className="mb-0">
                              <button
                                type="button"
                                className="common-btn"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="true"
                                aria-controls="collapseThree"
                              >
                                Basic typography
                              </button>
                            </h5>
                          </div>

                          <div
                            id="collapseThree"
                            className="collapse "
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div
                              className={`card-body acc-content current ${classes.cardBody}`}
                            >
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-lg-6 col-md-6 col-sm-12 sm-mb-30">
                          <div className={classes.singleItem}>
                            <div className={classes.imgPart}>
                              <img src={courseVid} alt="" />
                            </div>
                            <div className={classes.teacherContent}>
                              <h4>
                                <Link to="/">Jhon Pedrocas</Link>
                              </h4>
                              <span>Professor</span>
                              <ul className={classes.socialLinks}>
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
                        <div className="col-lg-6 col-md-6 col-sm-12 sm-mb-30">
                          <div className={classes.singleItem}>
                            <div className={classes.imgPart}>
                              <img src={courseVid} alt="" />
                            </div>
                            <div className={classes.teacherContent}>
                              <h4>
                                <Link to="/">Jhon Pedrocas</Link>
                              </h4>
                              <span>Professor</span>
                              <ul className={classes.socialLinks}>
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
                  </div>

                  {/* faq content  */}

                  <div
                    className={`tab-pane fade `}
                    id="prod-faq"
                    role="tabpanel"
                    aria-labelledby="prod-faq-tab"
                  >
                    <div className={classes.contents}>
                      <div id="accordionTwo" className={classes.accordionBox}>
                        {/* singleCollapse  */}

                        <div className={`card accordion ${classes.card}`}>
                          <div
                            className={`card-header ${classes.cardHeader}`}
                            id="headingOne"
                          >
                            <h5 className="mb-0">
                              <button
                                type="button"
                                className="common-btn"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2One"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                UI/ UX Introduction
                              </button>
                            </h5>
                          </div>

                          <div
                            id="collapse2One"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionTwo"
                          >
                            <div
                              className={`card-body acc-content current ${classes.cardBody}`}
                            >
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* singleCollapse  */}

                        <div className={`card accordion ${classes.card}`}>
                          <div
                            className={`card-header ${classes.cardHeader}`}
                            id="headingOne"
                          >
                            <h5 className="mb-0">
                              <button
                                type="button"
                                className="common-btn"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2Two"
                                aria-expanded="true"
                                aria-controls="collapseTwo"
                              >
                                Color Theory
                              </button>
                            </h5>
                          </div>

                          <div
                            id="collapse2Two"
                            className="collapse "
                            aria-labelledby="headingOne"
                            data-parent="#accordion2Two"
                          >
                            <div
                              className={`card-body acc-content current ${classes.cardBody}`}
                            >
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* singleCollapse  */}

                        <div className={`card accordion ${classes.card}`}>
                          <div
                            className={`card-header ${classes.cardHeader}`}
                            id="headingOne"
                          >
                            <h5 className="mb-0">
                              <button
                                type="button"
                                className="common-btn"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2Three"
                                aria-expanded="true"
                                aria-controls="collapseThree"
                              >
                                Basic typography
                              </button>
                            </h5>
                          </div>

                          <div
                            id="collapse2Three"
                            className="collapse "
                            aria-labelledby="headingOne"
                            data-parent="#accordion2Two"
                          >
                            <div
                              className={`card-body acc-content current ${classes.cardBody}`}
                            >
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                              <div className={classes.cardContent}>
                                <div className={classes.leftContent}>
                                  <p onClick={() => setOpen(true)}>
                                    <i className="bx bx-play" />
                                    What is UI/ UX Design?
                                  </p>
                                  <div className="">
                                    <ModalVideo
                                      channel="youtube"
                                      autoplay
                                      isOpen={isOpen}
                                      videoId="L61p2uyiMSo"
                                      onClose={() => setOpen(false)}
                                    />
                                  </div>
                                </div>
                                <div className={classes.rightContent}>
                                  <p className={classes.length}>35 Minutes</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* reviews content  */}

                  <div
                    className={`tab-pane fade ${classes.singleContent}`}
                    id="prod-reviews"
                    role="tabpanel"
                    aria-labelledby="prod-reviews-tab"
                  >
                    <div className={classes.content}>
                      {/* single review  */}
                      <div className={classes.reviewBox}>
                        <h4
                          className={`${classes.commonClr} ${classes.title} ${classes.reviewTitle}`}
                        >
                          Stephane Smith
                        </h4>
                        <div className={classes.rating}>
                          <span>4.5</span>
                          <span>
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                          </span>

                          <span>256 Reviews</span>
                        </div>
                        <p>
                          Phasellus enim magna, varius et commodo ut, ultricies
                          vitae velit. Ut nulla tellus, eleifend euismod
                          pellentesque vel, sagittis vel justo. In libero urna,
                          venenatis sit amet ornare non, suscipit nec risus.
                        </p>
                        <p className={classes.helpful}>
                          Was this review helpful?
                        </p>
                        <ul className={classes.likeOption}>
                          <li>
                            <span>
                              <i className="bx bxs-like" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="bx bxs-dislike" />
                            </span>
                          </li>
                          <li>
                            <Link className={classes.report} to="/">
                              Report
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* single review  */}
                      <div className={classes.reviewBox}>
                        <h4
                          className={`${classes.commonClr} ${classes.title} ${classes.reviewTitle}`}
                        >
                          Anna Sthesia
                        </h4>
                        <div className={classes.rating}>
                          <span>4.5</span>
                          <span>
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                          </span>

                          <span>256 Reviews</span>
                        </div>
                        <p>
                          Phasellus enim magna, varius et commodo ut, ultricies
                          vitae velit. Ut nulla tellus, eleifend euismod
                          pellentesque vel, sagittis vel justo. In libero urna,
                          venenatis sit amet ornare non, suscipit nec risus.
                        </p>
                        <p className={classes.helpful}>
                          Was this review helpful?
                        </p>
                        <ul className={classes.likeOption}>
                          <li>
                            <span>
                              <i className="bx bxs-like" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="bx bxs-dislike" />
                            </span>
                          </li>
                          <li>
                            <Link className={classes.report} to="/">
                              Report
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* single review  */}
                      <div className={classes.reviewBox}>
                        <h4
                          className={`${classes.commonClr} ${classes.title} ${classes.reviewTitle}`}
                        >
                          Petey Cruiser
                        </h4>
                        <div className={classes.rating}>
                          <span>4.5</span>
                          <span>
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                          </span>

                          <span>256 Reviews</span>
                        </div>
                        <p>
                          Phasellus enim magna, varius et commodo ut, ultricies
                          vitae velit. Ut nulla tellus, eleifend euismod
                          pellentesque vel, sagittis vel justo. In libero urna,
                          venenatis sit amet ornare non, suscipit nec risus.
                        </p>
                        <p className={classes.helpful}>
                          Was this review helpful?
                        </p>
                        <ul className={classes.likeOption}>
                          <li>
                            <span>
                              <i className="bx bxs-like" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="bx bxs-dislike" />
                            </span>
                          </li>
                          <li>
                            <Link className={classes.report} to="/">
                              Report
                            </Link>
                          </li>
                        </ul>
                      </div>
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

                    <h4>Preview this course</h4>
                  </div>
                </div>
                <div className={classes.courseFeature}>
                  <ul>
                    <li>
                      <span className="label">
                        <i className="bx bx-file-blank" />
                        Lectures
                      </span>
                      <span className="value">3</span>
                    </li>

                    <li>
                      <span className="label">
                        <i className="bx bx-file-blank" />
                        Quizzes
                      </span>
                      <span className="value">0</span>
                    </li>

                    <li>
                      <span className="label">
                        <i className="bx bx-file-blank" /> Duration
                      </span>
                      <span className="value">10 week </span>
                    </li>

                    <li>
                      <span className="label">
                        <i className="bx bx-file-blank" />
                        Students
                      </span>
                      <span className="value">21</span>
                    </li>

                    <li>
                      <span className="label">
                        <i className="bx bx-file-blank" /> Assessments
                      </span>
                      <span className="value">Yes</span>
                    </li>
                  </ul>
                </div>

                <div className={classes.btnPart}>
                  <Button to="/" bgColor="orange">
                    $35
                  </Button>
                  <Button to="/" bgColor="orange">
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
