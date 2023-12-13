import React from "react";
import UsableHero from "../components/UsableHero";
import { images } from "../constant";
import { Footer, JobsSec, ValuesSec } from "../components";

const Career_page = () => {
  return (
    <div>
      <UsableHero
        text={
          "Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
        }
        title={"Welcome to "}
        colored={"YourBank Careers!"}
        image={images.career_img}
      />
      <ValuesSec />
      <JobsSec />
      <Footer />
    </div>
  );
};

export default Career_page;
