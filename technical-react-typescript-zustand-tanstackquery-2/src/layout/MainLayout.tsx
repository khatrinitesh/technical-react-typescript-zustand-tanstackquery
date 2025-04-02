import React from "react";
// third party library
import { Outlet } from "react-router-dom";
// components
import Header from "./Header";
import Footer from "./Footer";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="appLayout">
        <Header />
        <div className="mainContent h-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
