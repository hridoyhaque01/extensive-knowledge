import React from "react";
import About from "../components/home/About";
import Addmission from "../components/home/Addmission";
import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import Courses from "../components/home/Courses";
import Faq from "../components/home/Faq";
import News from "../components/home/News";
import Testimonial from "../components/home/Testimonial";

function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Categories />
      <Courses />
      <Addmission />
      <Faq />
      <Testimonial />
      <News />
    </main>
  );
}

export default Home;
