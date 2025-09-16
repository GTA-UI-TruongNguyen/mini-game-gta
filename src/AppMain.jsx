import React from "react";
import { Outlet } from "react-router";

const AppMain = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Outlet />
    </div>
  );
};

export default AppMain;
