import React from "react";
import UsableHero from "../components/UsableHero";
import { images } from "../constant";
import { FAQ, Footer, ProtectSec } from "../components";

const Security_page = () => {
  return (
    <section>
      <main>
        <UsableHero
          text={
            "At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."
          }
          title={"Your Security is Our "}
          colored={"Top Priority"}
          image={images.security_img}
        />
      </main>
      <ProtectSec />
      <FAQ />
    </section>
  );
};

export default Security_page;
