import React from "react";
import { Outlet } from "react-router-dom";
import ArrowButton from "../components/buttons/ArrowButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <ArrowButton />
      <Footer />
    </>
  );
}
