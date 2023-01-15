import React from "react";
import { Section } from "../styled-components/Container";
import { P } from "../styled-components/Element";
import classes from "../styles/ContactForm.module.css";
import Button from "./buttons/Submit";
import Iframe from "./Iframe";
import Input from "./Input";

export default function ContactForm() {
  return (
    <div>
      <Section padding="100px 0 220px">
        <div className="container">
          <div className="row">
            {/* address  */}
            <div className="col-lg-4">
              <div className={classes.singleInfo}>
                <div className={classes.infoIcon}>
                  <i className="bx bx-map" />
                </div>
                <div className={classes.infoContent}>
                  <h5>Address</h5>
                  <h4>228-5 Main Street, Georgia, USA </h4>
                </div>
              </div>
            </div>

            {/* mail address  */}

            <div className="col-lg-4">
              <div className={classes.singleInfo}>
                <div className={classes.infoIcon}>
                  <i className="bx bxs-envelope" />
                </div>
                <div className={`${classes.mail} ${classes.infoContent}`}>
                  <h5>Email Address</h5>
                  <h4>
                    <a href="mailto:info@rstheme.com">
                      hridoyhaque.info@gmail.com
                    </a>
                  </h4>
                </div>
              </div>
            </div>

            {/* phone number  */}

            <div className="col-lg-4">
              <div className={classes.singleInfo}>
                <div className={classes.infoIcon}>
                  <i className="bx bx-map" />
                </div>
                <div className={classes.infoContent}>
                  <h5>Phone Number</h5>
                  <h4>
                    <a href="tel:(+088)589-8745">(+088)589-8745</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className={`row ${classes.formContent}`}>
            <div className="col-lg-5 pe-0 pe-lg-4">
              <div className={classes.map}>
                <Iframe />
              </div>
            </div>
            <div className="col-lg-7 ps-0 ps-lg-4">
              <div className={`common-form ${classes.contactForm}`}>
                <h2>Get In Touch</h2>
                <P margin="10px 0 40px">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius
                  to mod tempor incidi dunt ut dolore.
                </P>
                <form action="#">
                  <div className="row">
                    <div className={`col-md-6 ${classes.singleInput}`}>
                      <Input type="text" placeholder="name" />
                    </div>
                    <div className={`col-md-6 ${classes.singleInput}`}>
                      <Input type="email" placeholder="email" />
                    </div>
                  </div>
                  <div className="row">
                    <div className={`col-md-6 ${classes.singleInput}`}>
                      <Input type="number" placeholder="phone" />
                    </div>
                    <div className={`col-md-6 ${classes.singleInput}`}>
                      <Input type="text" placeholder="subject" />
                    </div>
                  </div>
                  <div className={classes.textArea}>
                    <textarea placeholder="message" />
                  </div>
                  <div>
                    <Button bgClass="orange">submit now</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
