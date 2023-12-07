import React from "react";
import { Header, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
