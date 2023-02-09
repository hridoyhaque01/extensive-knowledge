import React from "react";
import { Link } from "react-router-dom";
import { BlogData } from "../../database/BlogPageData";
import { Section } from "../../styled-components/Container";
import { P } from "../../styled-components/Element";
import classes from "../../styles/blog/Blogs.module.css";
import { useScrollAuth } from "../contaxt/useScrollHook";
import PageNavigation from "../PageNavigation";
import BlogRightPart from "./BlogRightPart";

export default function Blogs() {
  const { handleClick } = useScrollAuth();

  return (
    <>
      <PageNavigation pageName="blog" />
      <Section padding="100px 0 220px" className="btmSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {BlogData.map((currentEl) => (
                <div
                  className={classes.contentArea}
                  key={currentEl.id}
                  data-aos="fade-up"
                  data-aos-delay={currentEl.delay}
                >
                  <div
                    className={`${classes.commonShadow} ${classes.singleBlog}`}
                  >
                    <div className={classes.blogImg}>
                      <Link to="/" onClick={handleClick}>
                        <img
                          src={currentEl.image}
                          alt="extensive-knowledge"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className={classes.blogDetails}>
                      <h3>
                        <Link
                          to={`/blog/${currentEl.link}`}
                          onClick={handleClick}
                        >
                          {currentEl.title}
                        </Link>
                      </h3>
                      <ul
                        className={`d-inline-flex align-items-center ${classes.tags}`}
                      >
                        {currentEl.details.map((detail) => (
                          <li key={detail.id}>
                            <img
                              src={detail.icon}
                              alt="extensive-knowledge"
                              className="img-fluid"
                            />
                            <span>{detail.texts}</span>
                          </li>
                        ))}
                      </ul>
                      <P margin="16px 0 40px">{currentEl.para}</P>

                      <Link
                        to={`/blog/${currentEl.link}`}
                        className={`d-inline-flex align-items-center ${classes.readBtn}`}
                        onClick={handleClick}
                      >
                        <span>{currentEl.linkText}</span>
                        <img
                          src={currentEl.icon}
                          alt="extensive-knowledge"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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
