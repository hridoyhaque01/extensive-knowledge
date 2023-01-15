import React from "react";
import { Link } from "react-router-dom";
import PageNavigation from "../PageNavigation";

export default function TeamDetails() {
  return (
    <>
      <PageNavigation pageName="teacher details">
        <li className="breadcrumb-item">
          <Link to="/team">teacher</Link>
        </li>
      </PageNavigation>

      <section>
        <h1>teacher details</h1>
      </section>
    </>
  );
}
