import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/blog/Blogs.module.css";

import {
  ArchiveData,
  CategoriesData,
  MetaData,
  Recentdata,
} from "../../database/BlogPageData";

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
          {Recentdata.map((currentEl) => (
            <li key={currentEl.id}>
              <Link to="/">{currentEl.linkText}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Archives  area  */}

      <div
        className={`${classes.commonShadow} ${classes.singleWedget} ${classes.rightIcon}`}
      >
        <h3>Archives</h3>
        <ul>
          {ArchiveData.map((currentEl) => (
            <li key={currentEl.id}>
              <Link to="/">{currentEl.linkText}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories  area  */}

      <div
        className={`${classes.commonShadow} ${classes.singleWedget} ${classes.rightIcon}`}
      >
        <h3>Categories</h3>
        <ul>
          {CategoriesData.map((currentEl) => (
            <li key={currentEl.id}>
              <Link to="/">{currentEl.linkText}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* meta  area  */}

      <div
        className={`${classes.commonShadow} ${classes.singleWedget} ${classes.borderTop}`}
      >
        <h3>Meta</h3>
        <ul>
          {MetaData.map((currentEl) => (
            <li key={currentEl.id}>
              <Link to="/">{currentEl.linkText}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
