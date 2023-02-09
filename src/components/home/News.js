import React from "react";
import { Link } from "react-router-dom";
import { Events, NewsData } from "../../database/HomePageData";
import { Div, Section } from "../../styled-components/Container";
import { H1, H2, P } from "../../styled-components/Element";
import classes from "../../styles/home/News.module.css";
import { useScrollAuth } from "../contaxt/useScrollHook";

export default function News() {
  const { handleClick } = useScrollAuth();

  return (
    <Section padding="100px 0 220px" className={`btmSec ${classes.newsSec}`}>
      <div className="container">
        <div className="text-center">
          <H1 color="var(--blue-clr)">NEWS UPDATE</H1>
          <H2 color="var(--dark-clr)">Latest News & Events</H2>
        </div>
        <Div className="row" margin="70px 0 0">
          <div className="col-lg-7 ps-0 pe-0 pe-lg-4">
            <div className={classes.events}>
              {NewsData.map((currentEl) => (
                <div
                  className={`${classes.singleItem}`}
                  key={currentEl.id}
                  data-aos="fade-right"
                  data-aos-delay={currentEl.delay}
                >
                  <div className={`${classes.newsImg}`}>
                    <img
                      src={currentEl.image}
                      alt="news img"
                      className="img-fluid"
                    />
                  </div>
                  <div className={` ${classes.newsDetails}`}>
                    <div className="d-flex align-items-center">
                      <P>
                        <i className={currentEl.userIcon} />
                        <span>{currentEl.user}</span>
                      </P>
                      <P margin="0 0 0 20px">
                        <i className={currentEl.dateIcon} />
                        <span>{currentEl.date}</span>
                      </P>
                    </div>
                    <h1 className={classes.title}>
                      <Link
                        to="/blog/blg01"
                        className={classes.commonClr}
                        onClick={handleClick}
                      >
                        {currentEl.title}
                      </Link>
                    </h1>
                    <Link
                      to="/blog/blg01"
                      className={`d-inline-flex align-items-center ${classes.commonClr} ${classes.readMore}`}
                      onClick={handleClick}
                    >
                      <span className="d-inline-block me-2">
                        {currentEl.more}
                      </span>
                      <i className={currentEl.arrowIcon} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 pe-0 ps-0 ps-lg-4">
            {Events.map((currentEl) => (
              <div
                className={`${classes.singleEvent}`}
                key={currentEl.id}
                data-aos="fade-left"
                data-aos-delay={currentEl.delay}
              >
                <div
                  className={`d-flex flex-column justify-content-center ${classes.date}`}
                >
                  <p>{currentEl.date}</p>
                  <p>{currentEl.month}</p>
                </div>
                <div className={classes.event}>
                  <P>{currentEl.subjects}</P>
                  <h1 className={classes.title}>
                    <Link
                      to="/courses/12a"
                      className={classes.commonClr}
                      onClick={handleClick}
                    >
                      {currentEl.title}
                    </Link>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </Div>
      </div>
    </Section>
  );
}
