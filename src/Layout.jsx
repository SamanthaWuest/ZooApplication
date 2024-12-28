import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <Outlet />
      <nav>
        </nav>
        </>
    )
};

export default Layout;