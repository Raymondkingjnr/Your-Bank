import React from "react";
import SectionTitle from "./SectionTitle";
import { images } from "../constant";

const OpenAccount = () => {
  return (
    <div className=" align-element relative flex flex-col md:flex-row justify-between place-content-center place-items-center gap-10 bg-gray-gray_bg rounded-lg my-20">
      <SectionTitle
        title={"Start your financial journey with "}
        colored={"YourBank today!"}
        text={
          "Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service"
        }
      />
      <button className="btn bg-green-bg text-black rounded-3xl border-transparent">
        Open an Account
      </button>
      <div>
        <img
          src={images.abstract_left}
          alt=""
          className=" absolute top-0 left-0 w-20 h-20"
        />
      </div>
    </div>
  );
};

export default OpenAccount;
