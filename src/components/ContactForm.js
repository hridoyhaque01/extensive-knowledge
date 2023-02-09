import React from "react";
import { contactData } from "../database/ContactPageData";
import { Section } from "../styled-components/Container";
import { P } from "../styled-components/Element";
import classes from "../styles/ContactForm.module.css";
import Button from "./buttons/Submit";
import Iframe from "./Iframe";
import Input from "./Input";

export default function ContactForm() {
  return (
    <div>
      <Section padding="100px 0 220px" className="btmSec">
        <div className="container">
          <div className="row justify-content-center">
            {/* address  */}

            {contactData.map((currentEl) => (
              <div className="col-lg-4 col-md-6" key={currentEl.id}>
                <div
                  className={classes.singleInfo}
                  data-aos="fade-up"
                  data-aos-delay={currentEl.delay}
                >
                  <div className={classes.infoIcon}>
                    <img
                      src={currentEl.icon}
                      alt="ext-knowledge"
                      className="img-fluid"
                    />
                  </div>
                  <div className={classes.infoContent}>
                    <h5>{currentEl.title}</h5>
                    <h4>
                      <a href={currentEl.link}>{currentEl.text}</a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`row ${classes.formContent}`}>
            <div className="col-lg-5 pe-lg-4">
              <div className={classes.map}>
                <Iframe />
              </div>
            </div>
            <div className="col-lg-7 ps-lg-4">
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
                    <Button bgClass="blue">submit now</Button>
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
