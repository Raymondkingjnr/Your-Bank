import React from "react";
import { IoIosBriefcase } from "react-icons/io";
import { CiSaveDown2 } from "react-icons/ci";
import { FaMoneyBills } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";

const items = [
  {
    icon: <IoIosBriefcase />,
    title: "Checking Accounts",
    text: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
  },
  {
    icon: <CiSaveDown2 />,
    title: "Savings Accounts",
    text: "Build your savings with our competitive interest rates and flexible savings account options. Whether youre saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
  },
  {
    icon: <FaMoneyBills />,
    title: "Loans and Mortgages",
    text: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
  },
];

const OurProducts = () => {
  return (
    <section className="align-element">
      <div className=" flex flex-col justify-between md:flex-row place-items-center ">
        <main className=" w-auto md:w-[400px]">
          <SectionTitle
            title={"Our"}
            colored={"Products"}
            text={
              "Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations"
            }
          />
        </main>
        <main className="flex justify-between place-items-center gap-10 bg-[#262626] rounded-full p-2 mt-4 md:mt-0">
          <div className=" bg-green-bg text-[#000] p-2 rounded-full">
            <h2 className="font-bold text-sm">For Individuals</h2>
          </div>
          <h2 className="font-bold text-sm">For Businesses</h2>
        </main>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-center place-items-center p-5 mt-5">
        {items.map((item, index) => {
          const { icon, text, title } = item;
          return (
            <div
              className="grid place-items-center rounded-lg h-[320px]"
              key={index}
            >
              <div className=" bg-gradient-to-t from-green-lightbg to-[#D1FF4C] grid place-items-center rounded-full h-12 w-12">
                <p className=" text-green-bg font-bold text-xl">{icon}</p>
              </div>
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="text-p text-center px-6">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurProducts;
