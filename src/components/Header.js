import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../database/HomePageData";
import { logo } from "../images/exporter/Images";
import classes from "../styles/Header.module.css";
import { useScrollAuth } from "./contaxt/useScrollHook";
import Sidebar from "./Sidebar";

export default function Header() {
  const [navClass, setNavClass] = useState("");

  const { handleClick } = useScrollAuth();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 0) {
        setNavClass("scrolled");
      } else {
        setNavClass("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleClick]);

  return (
    <header className={` ${classes.header} ${navClass}`}>
      <div className={`container ${classes.contain}`}>
        <div className="d-flex align-items-center justify-content-center justify-content-lg-between ">
          <div className={classes.logo}>
            <NavLink to="/" className="navbar-brand">
              <img src={logo} alt="ext-knowledge" className="img-fluid" />
            </NavLink>
          </div>
          <nav className={classes.menu}>
            <ul className={`nav ${classes.navList} ${classes.menuList}`}>
              {Navbar.map((item) => (
                <li className="nav-item " key={item.id}>
                  <NavLink
                    to={item.to}
                    className="nav-link "
                    onClick={handleClick}
                  >
                    <span className="d-lg-none">
                      <img
                        src={item.icon}
                        alt="ext-knowledge"
                        className="img-fluid"
                      />
                      <img
                        src={item.icon2}
                        alt="ext-knowledge"
                        className="img-fluid"
                      />
                    </span>

                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={`${classes.sidebar} d-none d-xl-flex align-items-center`}
          >
            <ul className={`nav ${classes.navList}`}>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" onClick={handleClick}>
                  login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className="nav-link"
                  onClick={handleClick}
                >
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
