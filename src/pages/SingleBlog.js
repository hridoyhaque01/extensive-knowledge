import React from "react";
import { Link } from "react-router-dom";
import BlogRightPart from "../components/blog/BlogRightPart";
import Button from "../components/buttons/Submit";
import PageNavigation from "../components/PageNavigation";
import src from "../images/blogs/blog1.jpg";
import { Section } from "../styled-components/Container";
import classes from "../styles/blog/SingleBlog.module.css";

export default function SingleBlog() {
  return (
    <>
      <PageNavigation pageName="Single blog">
        <li className="breadcrumb-item">
          <Link to="/blog">blog</Link>
        </li>
      </PageNavigation>
      <Section padding="100px 0 220px" className="btmSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className={classes.contentArea}>
                <div
                  className={`${classes.commonShadow} ${classes.singleBlog}`}
                >
                  <div className={classes.blogImg}>
                    <Link to="/">
                      <img
                        src={src}
                        alt="extensive-knowledge"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className={classes.blogDetails}>
                    <ul
                      className={`d-inline-flex align-items-center ${classes.tags}`}
                    >
                      <li>
                        <span>
                          <i className="bx bxs-calendar" />
                        </span>
                        <span>September 14, 2020</span>
                      </li>
                      <li>
                        <span>
                          <i className="bx bxs-user" />
                        </span>
                        <span>admin</span>
                      </li>
                      <li>
                        <span>
                          <i className="bx bx-book-alt" />
                        </span>
                        <span>University</span>
                      </li>
                      <li>
                        <span>
                          <i className="bx bx-chat" />
                        </span>
                        <span>05</span>
                      </li>
                    </ul>
                    <p>
                      We denounce with righteous indige nation and dislike men
                      who are so beguiled and demo realized by the charms of
                      pleasure of the moment, so blinded by desire, that they
                      cannot foresee the pain and trouble that are bound to
                      ensue; and equal blame belongs to those who fail in their
                      duty through weakness of will, which is the same as saying
                      through shrinking from toil and pain. These cases are
                      perfectly simple and easy to distinguish. In a free hour,
                      when our power of choice is untrammelled and when nothing
                      prevents our being able to do what we like best, every
                      pleasure is to be welcomed and every pain avoided.
                    </p>
                    <blockquote className={classes.quote}>
                      <p>
                        Globally incubate standards compliant channels before
                        scalable benefits. Quickly disseminate superior
                        deliverables whereas web-enabled applications.
                      </p>
                    </blockquote>
                    <p>
                      Interactively procrastinate high-payoff content without
                      backward-compatible data. Quickly cultivate optimal
                      processes and tactical architectures. Completely iterate
                      covalent strategic theme areas via accurate e-markets.
                      Globally incubate standards compliant channels before
                      scalable benefits.
                    </p>
                    <h2 className={classes.title}>
                      Economy may face double recession
                    </h2>
                    <p>
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches to corporate
                      strategy foster collaborative thinking to further the
                      overall value proposition. Organically grow the holistic
                      world view of disruptive innovation via workplace
                      diversity and empowerment. Bring to the table win-win
                      survival strategies to ensure proactive domination. At the
                      end of the day, going forward, a new normal that has
                      evolved from generation X is on the runway heading towards
                      a streamlined cloud solution. User generated content in
                      real-time will have multiple touchpoints for offshoring.
                    </p>
                    <div className={classes.postImg}>
                      <img
                        src={src}
                        alt="ext-knowledge"
                        className="img-fluid"
                      />
                    </div>
                    <p>
                      Phosfluorescently engage worldwide methodologies with
                      web-enabled technology. Interactively coordinate proactive
                      e-commerce via process-centric “outside the box” thinking.
                      Completely pursue scalable customer service through
                      sustainable potentialities. Collaboratively administrate
                      turnkey channels whereas virtual e-tailers. Objectively
                      seize scalable metrics whereas proactive e-services.
                      Seamlessly empower fully researched growth strategies and
                      interoperable internal or “organic” sources.
                    </p>
                    <ul className={`d-flex flex-column ${classes.lists}`}>
                      <li className="d-flex align-items-center">
                        <span>
                          <i className="bx bx-chevron-right" />
                        </span>
                        <span>New Construction Benefit of Service</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <span>
                          <i className="bx bx-chevron-right" />
                        </span>
                        <span>Renovations Benefit of Service</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <span>
                          <i className="bx bx-chevron-right" />
                        </span>
                        <span>Historic Renovations and Restorations</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <span>
                          <i className="bx bx-chevron-right" />
                        </span>
                        <span>Additions Benefit of Service</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <span>
                          <i className="bx bx-chevron-right" />
                        </span>
                        <span>Rebuilding from fire or water damage</span>
                      </li>
                    </ul>
                    <h2 className={classes.title}>
                      Experts Always Ready to Maximizing Products
                    </h2>
                    <p>
                      Proactively fabricate one-to-one materials via effective
                      e-business. Completely synergize scalable e-commerce
                      rather than high standards in e-services. Assertively
                      iterate resource maximizing products after leading-edge
                      intellectual capital. Capitalize on low hanging fruit to
                      identify a ballpark value added activity to beta test.
                      Override the digital divide with additional clickthroughs
                      from DevOps. Nanotechnology immersion along the
                      information highway will close the loop on focusing solely
                      on the bottom line.
                    </p>
                    <h3 className={classes.subTitle}>
                      Experts Always Ready to Maximizing Products
                    </h3>
                    <p>
                      Interactively procrastinate high-payoff content without
                      backward-compatible data. Quickly cultivate optimal
                      processes and tactical architectures. Completely iterate
                      covalent strategic theme areas via accurate e-markets.
                      Globally incubate standards compliant channels before
                      scalable benefits. Quickly disseminate superior
                      deliverables whereas web-enabled applications. Quickly
                      drive clicks-and-mortar catalysts for change before
                      vertical architectures.
                    </p>
                  </div>
                </div>
                <div className={classes.navigation}>
                  <ul>
                    <li>
                      <Link to="/">
                        <span className="next-link">Next</span>
                        <i className="bx bx-right-arrow-alt" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="link-text">
                          Soundtrack filma Lady Exclusive Music
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={classes.commentArea}>
                  {/* <div className={classes.singleComment}></div> */}
                  <div className={classes.commentsForm}>
                    <h3 className={classes.replyTitle}>Leave a Reply</h3>
                    <p>
                      Your email address will not be published. Required fields
                      are marked
                    </p>
                    <form action="#" className={classes.formFeild}>
                      <div className="row">
                        <div
                          className={`col-md-6 col-sm-12 px-0 ${classes.inputs}`}
                        >
                          <label htmlFor="name-id">name</label>
                          <input
                            type="text"
                            className="form-control cmnInput"
                            required=""
                            id="name-id"
                          />
                        </div>
                        <div
                          className={`col-md-6 col-sm-12 px-0 ${classes.inputs}`}
                        >
                          <label htmlFor="email">Email*</label>
                          <input
                            type="email"
                            className="form-control cmnInput"
                            required=""
                            id="email"
                          />
                        </div>
                      </div>
                      <div className={classes.message}>
                        <label htmlFor="message">Your comment here...</label>
                        <textarea
                          cols="40"
                          rows="10"
                          className="form-control"
                          required=""
                          id="message"
                        />
                      </div>
                      <div className={classes.submitBtn}>
                        <Button bgClass="blue">post comment</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <BlogRightPart />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
