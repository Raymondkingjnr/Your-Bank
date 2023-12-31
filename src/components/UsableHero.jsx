import React from "react";
import SectionTitle from "./SectionTitle";
import { images } from "../constant";

const UsableHero = ({ image, text, title, colored }) => {
  return (
    <main className="align-element">
      <div className=" md:relative pt-6 flex flex-col-reverse gap-y-1 md:flex-row justify-between mt-[2rem] mb-[7rem] lg:mb-[12rem] ">
        <div className=" rounded-t-3xl md:relative md:left-[2rem] lg:left-[8rem] z-20 bg-gray-gray_bg p-6 md:p-10 text-center md:text-left md:w-[400px] lg:w-[600px] h-fit">
          <SectionTitle text={text} title={title} colored={colored} />
        </div>
        <div className="top-8 right-0 md:absolute z-10">
          <img
            src={image}
            alt=""
            className=" w-full md:w-[400px] lg:w-[600px] h-[250px] md:h-fit object-contain"
          />
        </div>
        <div>
          <img
            src={images.abstract_right}
            alt=""
            className=" hidden md:flex w-[10rem] h-[10rem] absolute right-0 top-0 z-0"
          />
        </div>
      </div>
    </main>
  );
};

export default UsableHero;
