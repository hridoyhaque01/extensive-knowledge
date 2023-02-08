import React from "react";
import { Link } from "react-router-dom";
import { Address, FooterData, Social } from "../database/HomePageData";
import { logo } from "../images/exporter/Images";
import { H4, P } from "../styled-components/Element";
import classes from "../styles/Footer.module.css";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <Newsletter />

        <div className={`row ${classes.transformTop}`}>
          {FooterData.map((currentEl) => (
            <div className={`col-sm-6 col-lg-3 `} key={currentEl.id}>
              <div className={classes.footerContent}>
                <H4 color="var(--white-clr)">{currentEl.title}</H4>
                <ul className={`d-flex flex-column ${classes.links}`}>
                  {currentEl.links.map((link) => (
                    <li key={link.id}>
                      <Link to={link.to}>{link.link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className={`col-sm-6 col-lg-3 `}>
            <div className={classes.footerContent}>
              <H4 color="var(--white-clr)">ADDRESS</H4>
              <ul className={`d-flex flex-column ${classes.links}`}>
                {Address.map((currentEl) => (
                  <li
                    key={currentEl.id}
                    className={`d-inline-flex align-items-start ${classes.addLink}`}
                  >
                    <span>
                      <i className={currentEl.icon} />
                    </span>
                    <a href={currentEl.link}>{currentEl.address}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`row align-items-center justify-content-center ${classes.copyright}`}
        >
          <div className="col-lg-3 col-md-5">
            <div className={` text-center text-md-start ${classes.logo}`}>
              <Link to="/">
                <img src={logo} alt="ext-knowledge" className="img-fluid" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-7 text-center">
            <div className={classes.copyText}>
              <P color="var(--white-clr)">
                © 2020 All Rights Reserved. Developed By{" "}
                <Link to="https:/hridoyhaque.fun/">Hridoy</Link>
              </P>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 ">
            <div className={classes.social}>
              <ul className="d-flex align-items-center justify-content-center justify-content-lg-end  ">
                {Social.map((currentEl) => (
                  <li key={currentEl.id}>
                    <Link to={currentEl.link}>
                      <img src={currentEl.icon} alt="ext-knowledge" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
