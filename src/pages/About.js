import React from "react";
import AboutEx from "../components/about/AboutEx";
import Addmission from "../components/about/Addmission";
import Counter from "../components/about/Counter";
import Events from "../components/about/Events";
import Slider from "../components/about/Slider";
import Testimonial from "../components/about/Testimonial";
import PageNavigation from "../components/PageNavigation";

function About() {
  return (
    <main>
      <PageNavigation pageName="about" />
      <AboutEx />
      <Addmission />
      <Counter />
      <Events />
      <Testimonial />
      <Slider />
    </main>
  );
}

export default About;
