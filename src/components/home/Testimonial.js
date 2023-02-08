import React from "react";
import OwlCarousel from "react-owl-carousel";
import { TestimonialData } from "../../database/HomePageData";
import { Section } from "../../styled-components/Container";
import { H3, P } from "../../styled-components/Element";
import classes from "../../styles/home/Testimonial.module.css";

export default function Testimonial() {
  return (
    <Section padding="100px 0" bgColor="var(--light-blue-clr)">
      <div className="container">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={40}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
          }}
        >
          {TestimonialData.map((currentEl) => (
            <div className="item" key={currentEl.id}>
              <div className={classes.singleSlider}>
                <div className={classes.quote}>
                  <img src={currentEl.icon} alt="quote" className="img-fluid" />
                </div>
                <P margin="10px 0 0">{currentEl.quote}</P>
                <div className={`d-flex align-items-center ${classes.writer} `}>
                  <div className={classes.writerImg}>
                    <img
                      src={currentEl.image}
                      alt="writer"
                      className="img-fluid"
                    />
                  </div>
                  <div className={classes.writerDetails}>
                    <H3 color="var(--dark-clr)">Brain gardner</H3>
                    <p>Founder, minimologie </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </Section>
  );
}
