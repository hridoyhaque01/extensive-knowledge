import React, { useEffect, useState } from "react";

import imgSrc from "../../images/arrowUp.svg";
import classes from "../../styles/ArrowBtn.module.css";

export default function ArrowButton() {
  const [scrollCls, setScrollCls] = useState("");

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 820) {
        setScrollCls("scrollBtn");
      } else {
        setScrollCls("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleClick]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      className={`${classes.arrowBtn} ${scrollCls}`}
      onClick={handleClick}
    >
      <img src={imgSrc} alt="ext-knowledge" className="img-fluid" />
    </button>
  );
}
