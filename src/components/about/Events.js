import React from "react";
import { tabDetails, TabsData } from "../../database/AboutPageData";
import { eventBg } from "../../images/about/Image";
import { Section } from "../../styled-components/Container";
import { H2, P } from "../../styled-components/Element";
import classes from "../../styles/about/Events.module.css";

export default function Events() {
  return (
    <Section padding="100px 0">
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className={`col-lg-6 px-0 ${classes.eventLeft}`}>
            <div className={`d-none d-md-block ${classes.eventBg}`}>
              <img src={eventBg} alt="event bg" className="img-fluid" />
            </div>
            <div className={classes.eventTabs}>
              <ul
                className="nav nav-pills flex-column"
                id="pills-tab"
                role="tablist"
              >
                {TabsData.map((tab) => (
                  <li
                    className={`nav-item ${classes.tabItem}`}
                    role="presentation"
                    key={tab.id}
                  >
                    <button
                      className={`nav-link ${classes.tabBtn} ${tab.active}`}
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target={`#${tab.id}`}
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      <span>
                        <i className={tab.icon} />
                      </span>
                      <span>{tab.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-5">
            <div
              className={`tab-content ${classes.tabContent}`}
              id="pills-tabContent"
            >
              {tabDetails.map((currentEl) => (
                <div
                  className={`tab-pane fade ${classes.singleEvent} ${currentEl.active}`}
                  id={currentEl.id}
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  key={currentEl.id}
                >
                  <H2 color="var(--dark-clr)">{currentEl.title}</H2>
                  <P margin="30px 0 20px">{currentEl.texts}</P>
                  <div className={classes.tabImg}>
                    <img
                      src={currentEl.image}
                      alt="tabImg"
                      className="img-fluid"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
