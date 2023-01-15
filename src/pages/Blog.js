import React from "react";
import { Outlet } from "react-router-dom";
// import PageNavigation from "../components/PageNavigation";

function Blog() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default Blog;
