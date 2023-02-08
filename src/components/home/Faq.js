import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { FAQ } from "../../database/HomePageData";
import { sideOne } from "../../images/exporter/Images";
import { Section } from "../../styled-components/Container";
import { Button, H2, P } from "../../styled-components/Element";
import classes from "../../styles/home/Faq.module.css";

export default function Faq() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Section padding="100px 0">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6">
            <div
              className={`accordion d-flex flex-column ${classes.question} ${classes.commonPart}`}
              id="accordion"
            >
              <H2 color="var(--dark-clr)">Frequently Asked Questions</H2>
              <div className={`d-flex flex-column ${classes.faqQNA}`}>
                {FAQ.map((currentEl) => (
                  <div className={classes.card} key={currentEl.id}>
                    <div className={classes.cardHeader}>
                      <a
                        className="d-flex align-items-center questionBtn collapsed"
                        data-bs-toggle="collapse"
                        href={`#${currentEl.id}`}
                        aria-expanded="false"
                      >
                        <span>
                          <i className={currentEl.bellOffIcon} />
                        </span>
                        <span>
                          <i className={currentEl.bellIcon} />
                        </span>
                        <span>{currentEl.question}</span>
                      </a>
                    </div>
                    <div
                      id={currentEl.id}
                      className="collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className={classes.cardBody}>
                        <P>{currentEl.answer}</P>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`${classes.questionVid} ${classes.commonPart}`}>
              <div className={classes.thumbneil}>
                <img src={sideOne} alt="question video thumbnail" />
              </div>
              <div className={classes.videoPlayer}>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="kqtD5dpn9C8"
                  onClose={() => setOpen(false)}
                />
                <div className={classes.playBtn}>
                  <Button
                    to="/"
                    color="var(--white-clr)"
                    className="btn-primary"
                    onClick={() => setOpen(true)}
                  >
                    <i className="bx bx-play" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
