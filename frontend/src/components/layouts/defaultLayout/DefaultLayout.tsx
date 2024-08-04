import React, { FC } from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout: FC = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default DefaultLayout;
