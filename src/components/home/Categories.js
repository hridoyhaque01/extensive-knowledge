import React from "react";
import { Link } from "react-router-dom";
import { CategoriesData } from "../../database/HomePageData";
import { Div, Section } from "../../styled-components/Container";
import { Button, H3, P } from "../../styled-components/Element";
import classes from "../../styles/home/categories.module.css";
import SectionTop from "../SectionTop";

export default function Categories() {
  return (
    <Section padding="100px 0" bgColor="var(--light-blue-clr)">
      <div className="container">
        <SectionTop title="SUBJECT CATEGORIES" subtitle="Our Top Categories">
          <Button
            to="/"
            padding="12px 34px"
            border="2px solid var(--blue-clr)"
            color="var(--dark-clr)"
          >
            VIEW ALL CATEGORIES
          </Button>
        </SectionTop>
        <Div margin="40px 0 0" className="row g-4">
          {CategoriesData.map((currentEl) => (
            <div
              className="col-lg-4 col-md-6"
              key={currentEl.id}
              data-aos="fade-up"
              data-aos-delay={currentEl.delay}
            >
              <Link
                href="/"
                className={`d-flex align-items-center ${classes.signleCat}`}
              >
                <div
                  className={`d-flex align-items-center justify-content-center ${classes.catImg}`}
                >
                  <img src={currentEl.image} alt="categories icon" />
                </div>
                <div className={classes.catDetails}>
                  <H3 color="var(--dark-clr)">{currentEl.title}</H3>
                  <P margin="6px 0 0" color="var(--fade-clr)">
                    {currentEl.courses}
                  </P>
                </div>
              </Link>
            </div>
          ))}
        </Div>
      </div>
    </Section>
  );
}
