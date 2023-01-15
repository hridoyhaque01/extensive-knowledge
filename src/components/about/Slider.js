import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import { SliderData } from "../../database/AboutPageData";
import { Section } from "../../styled-components/Container";
import classes from "../../styles/about/Slider.module.css";

export default function Slider() {
  return (
    <Section padding="100px 0 220px">
      <div className="container">
        <OwlCarousel className="owl-theme" items={5} loop margin={50}>
          {SliderData.map((currentEl) => (
            <div className="item" key={currentEl.id}>
              <Link to={currentEl.link} className={classes.singleSlider}>
                <img src={currentEl.image} alt="nunito" className="img-fluid" />
              </Link>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </Section>
  );
}
