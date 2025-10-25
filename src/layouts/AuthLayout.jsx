import React from "react";
import { Outlet } from "react-router";
import ScrollToUp from "../components/shared/ScrollToUp";

const AuthLayout = () => {
  return (
    <>
      <ScrollToUp></ScrollToUp>
      <Outlet></Outlet>
    </>
  );
};

export default AuthLayout;
