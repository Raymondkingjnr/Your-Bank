import React from "react";
import {
  FAQ,
  Features,
  Hero,
  OpenAccount,
  OurProducts,
  Testimonies,
  Usecase,
} from "../components";

const Landing_page = () => {
  return (
    <>
      <Hero />
      <OurProducts />
      <Usecase />
      <Features />
      <FAQ />
      <Testimonies />
      <OpenAccount />
    </>
  );
};

export default Landing_page;
