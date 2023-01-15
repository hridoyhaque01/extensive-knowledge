import React from "react";
import { Outlet } from "react-router-dom";

function Team() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default Team;
