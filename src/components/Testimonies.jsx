import React from "react";
import SectionTitle from "./SectionTitle";
import { data, images } from "../constant";

const Testimonies = () => {
  return (
    <div className="align-element py-10">
      <div className=" flex flex-col justify-between gap-8 md:flex-row place-items-center">
        <main className=" w-auto md:w-[400px]">
          <SectionTitle
            title={"Our"}
            colored={"Testimonies"}
            text={
              "Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"
            }
          />
        </main>
        <main className="flex justify-between place-items-center gap-10 bg-[#262626] w-[300px] rounded-full p-2">
          <div className=" bg-green-bg text-[#000] p-2 rounded-full">
            <h2 className="font-bold text-sm">For Individuals</h2>
          </div>
          <h2 className="font-bold text-sm">For Businesses</h2>
        </main>
      </div>
      <div className="gap-8 carousel flex items-center place-items-center shadow-bg rounded-box carousel-center mt-10">
        {data.carousel_items.map((item, index) => {
          const { text, name } = item;
          return (
            <main className="py-6 relative   z-0" key={index}>
              <div className="grid border w-[240px] lg:w-[350px]   rounded-lg bg-gray-gray_bg border-gray-border_gray p-6 text-center  carousel-item">
                <p className="text-sm font-medium leading-8">{text}</p>
                <h4 className=" mt-8 text-sm font-semibold text-green-bg">
                  {name}
                </h4>
              </div>
              <img
                src={images.text}
                alt=""
                className=" absolute z-40 top-0 left-[8rem] lg:left-40"
              />
            </main>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonies;
