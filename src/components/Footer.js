import React from "react";
import { Link } from "react-router-dom";
import { Address, FooterData, Social } from "../database/HomePageData";
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
            <div
              className={`col-md-6 col-lg-3 ${classes.footerContent}`}
              key={currentEl.id}
            >
              <H4 color="var(--white-clr)">{currentEl.title}</H4>
              <ul className={`d-flex flex-column ${classes.links}`}>
                {currentEl.links.map((link) => (
                  <li key={link.id}>
                    <Link to={link.to}>{link.link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={`col-md-6 col-lg-3 ${classes.footerContent}`}>
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

        <div className={`row align-items-center ${classes.copyright}`}>
          <div className="col-md-3">
            <div className={classes.logo}>
              <Link to="/">extensive knowledge</Link>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <div className={classes.copyText}>
              <P color="var(--white-clr)">
                © 2020 All Rights Reserved. Developed By{" "}
                <Link to="https:/hridoyhaque.fun/">Hridoy</Link>
              </P>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className={classes.social}>
              <ul className="d-flex align-items-center justify-content-end">
                {Social.map((currentEl) => (
                  <li key={currentEl.id}>
                    <Link to={currentEl.link}>
                      <i className={currentEl.icon} />
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
