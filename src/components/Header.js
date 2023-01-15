import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../database/HomePageData";
import classes from "../styles/Header.module.css";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <header className={`sticky-top ${classes.header}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <NavLink to="/" className="navbar-brand">
              extensive knowledge
            </NavLink>
          </div>
          <nav className={classes.menu}>
            <ul className={`nav ${classes.navList} ${classes.menuList}`}>
              {Navbar.map((item) => (
                <li className="nav-item " key={item.id}>
                  <NavLink
                    to={item.to}
                    className="nav-link d-flex flex-column align-items-center"
                  >
                    <span className="d-inline-block d-lg-none">
                      <i className={item.icon} />
                    </span>
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={`${classes.sidebar} d-flex align-items-center`}>
            <ul className={`nav ${classes.navList}`}>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  register
                </NavLink>
              </li>
            </ul>
            <button
              className={`common-btn ${classes.menuBtn}`}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="bx bx-menu-alt-right" />
            </button>
          </div>
        </div>
      </div>
      <Sidebar />
    </header>
  );
}
