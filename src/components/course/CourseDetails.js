import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../styled-components/Container";
import PageNavigation from "../PageNavigation";

export default function CourseDetails() {
  return (
    <>
      <PageNavigation pageName="course details">
        <li className="breadcrumb-item">
          <Link to="/courses">courses</Link>
        </li>
      </PageNavigation>

      <Section padding="100px 0 200px">
        <h1>CourseDetails details</h1>
      </Section>
    </>
  );
}
