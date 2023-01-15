import React from "react";
import CountUp from "react-countup";
import { Counterdata } from "../../database/AboutPageData";
import { Section } from "../../styled-components/Container";
import { H2, P } from "../../styled-components/Element";
import classes from "../../styles/about/Counter.module.css";

export default function Counter() {
  return (
    <Section padding="100px 0">
      <div className="container">
        <div className="row">
          {Counterdata.map((currentEl) => (
            <div className={`col-md-4 ${classes.counter}`} key={currentEl.id}>
              <div
                className={`d-flex flex-column align-items-center text-center ${classes.sinlgeCount} `}
              >
                <H2 color="var(--dark-clr)">
                  <CountUp end={currentEl.count} decimals={currentEl.decimal} />
                  <span>{currentEl.amount}</span>
                </H2>
                <P>{currentEl.title}</P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
