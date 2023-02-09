import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { H2, P } from "../../styled-components/Element";
import classes from "../../styles/about/Addmission.module.css";
import Button from "../buttons/Button";

export default function Addmission() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className={classes.addmission}>
      <div className="row">
        <div className={`col-lg-6 ${classes.addVideo}`} data-aos="fade-in">
          <div
            to="/"
            className={`d-inline-flex align-items-center ${classes.vidContent}`}
            onClick={() => setOpen(true)}
          >
            <div className={classes.play}>
              <i className="bx bx-play-circle" />
            </div>
            <h3>
              Take a Video Tour at <span>extensive knowledge</span>
            </h3>
          </div>

          <div className="">
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="FTFaQWZBqQ8"
              onClose={() => setOpen(false)}
            />
          </div>
        </div>

        <div className={`col-lg-6  ${classes.addDetails}`} data-aos="fade-left">
          <div className="">
            <H2 color="var(--dark-clr)">Admission Open for 2023 </H2>
            <P margin="14px 0 40px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius
              to mod tempor incididunt ut labore et dolore magna aliqua. Ut
              enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus
              et magnis.
            </P>
            <Button to="/login">apply now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
