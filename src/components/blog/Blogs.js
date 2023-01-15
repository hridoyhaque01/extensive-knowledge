import React from "react";
import { Link } from "react-router-dom";
import src from "../../images/blogs/blog-img-1.jpg";
import { Section } from "../../styled-components/Container";
import { P } from "../../styled-components/Element";
import classes from "../../styles/blog/Blogs.module.css";
import PageNavigation from "../PageNavigation";
import BlogRightPart from "./BlogRightPart";

export default function Blogs() {
  return (
    <>
      <PageNavigation pageName="blog" />
      <Section padding="100px 0 220px">
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
                    <h3>
                      <Link to="/blog/1023">
                        University while the lovely valley team work
                      </Link>
                    </h3>
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
                    </ul>
                    <P margin="16px 0 40px">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam...
                    </P>

                    <Link
                      to="/"
                      className={`d-inline-flex align-items-center ${classes.readBtn}`}
                    >
                      <span>continue reading</span>
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
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
