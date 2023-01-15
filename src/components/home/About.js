import React from "react";
import { NoticeBoard } from "../../database/HomePageData";
import { ceo, sign } from "../../images/exporter/Images";
import { Section } from "../../styled-components/Container";
import { H1, H2, P } from "../../styled-components/Element";
import classes from "../../styles/home/About.module.css";

export default function About() {
  return (
    <Section>
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 pe-0 pe-lg-4">
            <div className={`${classes.transform} ${classes.aboutDetails}`}>
              <H1 color="var(--blue-clr)">About us</H1>
              <H2 color="var(--dark-clr)">
                World Best Virtual Learning Network Educavo eLearning
              </H2>
              <P margin="20px 0 40px">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius
                to mod tempor incidi dunt ut labore et dolore magna aliqua. Ut
                enims ad minim veniam.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, eius to mod tempor incidi dunt ut labore et
                dolore magna aliqua. Ut enims ad minim veniam.Lorem sum dolor
                sit amet, consectetur adipisicing.
              </P>
              <div
                className={`d-inline-flex align-items-center ${classes.signPart}`}
              >
                <div>
                  <img src={ceo} alt="ceo" />
                </div>
                <div className={classes.authorPart}>
                  <img src={sign} alt="" />
                  <P margin="10px 0 0">CEO & Founder of Educavo</P>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ps-0 ps-lg-4">
            <div className={`${classes.transform} ${classes.noticeBoard}`}>
              <div className={classes.noticeTitle}>
                <h2>notice board</h2>
              </div>
              <div className={classes.noticePart}>
                {NoticeBoard.map((currentEl) => (
                  <div
                    className={`d-flex align-items-center ${classes.singleNotice}`}
                    key={currentEl.id}
                  >
                    <div className={classes.date}>
                      <span className="d-block">{currentEl.date}</span>
                      <span className="d-block">{currentEl.month}</span>
                    </div>
                    <div className={classes.notice}>
                      <p>{currentEl.notice}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
