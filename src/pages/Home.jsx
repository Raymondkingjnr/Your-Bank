import React from "react";
import { Footer, Header, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
