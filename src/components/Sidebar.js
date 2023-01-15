import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarGallary, Social } from "../database/HomePageData";
import { team1 } from "../images/exporter/Images";
import { P } from "../styled-components/Element";
import classes from "../styles/Sidebar.module.css";
import Fancybox from "./fancybox/Fancybox";
import Iframe from "./Iframe";

export default function Sidebar() {
  return (
    <div
      className={`offcanvas offcanvas-end ${classes.sidebar}`}
      tabIndex="-1"
      id="offcanvasRight"
    >
      <button
        type="button"
        className={`common-btn ${classes.closeBtn}`}
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i className="bx bx-x" />
      </button>
      <div className="offcanvas-body text-center">
        <div className={classes.sidebarDetails}>
          <NavLink to="/">
            <span>extensive knowledge</span>
          </NavLink>
          <P margin="20px 0 0 ">
            We denounce with righteous indige nationality and dislike men who
            are so beguiled and demo by the charms of pleasure of the moment
            data com so blinded by desire.
          </P>
        </div>

        {/* image gallary  */}

        <div className={`${classes.galary}`}>
          <Fancybox thumbnail="https://loremflickr.com/320/240" image={team1}>
            {SidebarGallary.map((currentEl) => (
              <div className={classes.singleImg} key={currentEl.id}>
                <a data-fancybox="gallery" href={currentEl.image}>
                  <img
                    alt="image1"
                    src={currentEl.image}
                    className={`${classes.img} img-fluid`}
                  />
                </a>
              </div>
            ))}
          </Fancybox>
        </div>

        {/* map  */}

        <div className={classes.map}>
          <Iframe />
        </div>

        {/* social  */}

        <div className={`d-flex justify-content-center ${classes.social}`}>
          <ul className="d-flex align-items-center">
            {Social.map((currentEl) => (
              <li key={currentEl.id}>
                <a href={currentEl.link} rel="noreferrer" target="_blank">
                  <i className={currentEl.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
