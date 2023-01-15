import React from "react";
import { Outlet } from "react-router-dom";

function Course() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default Course;
