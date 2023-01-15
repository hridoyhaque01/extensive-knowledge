import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/blog/Blogs.module.css";

export default function BlogRightPart() {
  return (
    <div className={classes.wedgetArea}>
      {/* search area  */}
      <div className={`${classes.commonShadow} ${classes.singleWedget} `}>
        <div className={classes.searchArea}>
          <input
            type="text"
            className="form-control cmnInput"
            placeholder="searching..."
          />
          <button type="button" className={classes.searchBtn}>
            <i className="bx bx-search" />
          </button>
        </div>
      </div>

      {/* Recent Posts area  */}

      <div
        className={`${classes.commonShadow} ${classes.singleWedget} ${classes.borderTop}`}
      >
        <h3>Recent Posts</h3>
        <ul>
          <li>
            <Link to="/">University while the lovely valley team work</Link>
          </li>
          <li>
            <Link to="/">High school program starting soon 2021</Link>
          </li>
          <li>
            <Link to="/">Modern School the lovely valley team work</Link>
          </li>
          <li>
            <Link to="/">While the lovely valley team work</Link>
          </li>
          <li>
            <Link to="/">This is a great source of content for anyone…</Link>
          </li>
        </ul>
      </div>

      {/* Archives  area  */}

      <div
        className={`${classes.commonShadow} ${classes.singleWedget} ${classes.rightIcon}`}
      >
        <h3>Archives</h3>
        <ul>
          <li>
            <Link to="/">September 2020</Link>
          </li>
          <li>
            <Link to="/">September 2020</Link>
          </li>
        </ul>
      </div>

      {/* Categories  area  */}

      <div
        className={`${classes.commonShadow} ${classes.singleWedget} ${classes.rightIcon}`}
      >
        <h3>Categories</h3>
        <ul>
          <li>
            <Link to="/">College</Link>
          </li>
          <li>
            <Link to="/">High School</Link>
          </li>
          <li>
            <Link to="/">Primary</Link>
          </li>
          <li>
            <Link to="/">School</Link>
          </li>
          <li>
            <Link to="/">University</Link>
          </li>
        </ul>
      </div>

      {/* meta  area  */}

      <div
        className={`${classes.commonShadow} ${classes.singleWedget} ${classes.borderTop}`}
      >
        <h3>Meta</h3>
        <ul>
          <li>
            <Link to="/">Log in</Link>
          </li>
          <li>
            <Link to="/">Entries feed</Link>
          </li>
          <li>
            <Link to="/">Comments feed</Link>
          </li>
          <li>
            <Link to="/">WordPress.org</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
