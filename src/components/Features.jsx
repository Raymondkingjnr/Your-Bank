import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { data } from "../constant";
import { HiArrowUpRight } from "react-icons/hi2";

const Features = () => {
  const [datas, setdatas] = useState(data.features_data);
  const [value, setValue] = useState(0);

  const { features, items, id } = datas[value];

  return (
    <section className="align-element py-10">
      <div className=" w-auto md:w-[700px]">
        <SectionTitle
          title={"Our"}
          colored={"Features"}
          text={
            "Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience"
          }
        />

        {/* FEATURES */}

        <main className="grid align-middle gap-x-30 md:grid-cols-2 place-content-center">
          <div className="flex flex-col gap-6 mt-[1.3rem] place-items-center h-[250px] mx-2 md:mx-0 bg-gray-gray_bg p-6 rounded-lg">
            {/* BUTTONS */}
            {datas.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`btn active-btn border border-gray-border_gray w-[250px] rounded-full capitalize ${
                    index !== value && "non-active_btn"
                  } `}
                >
                  {item.features}
                </button>
              );
            })}
          </div>
          {/* CONTENT */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 w-[350px] lg:w-[900px] p-5">
            {items.map((item) => {
              const { text, title } = item;
              return (
                <div className="grid bg-[#191919] rounded-lg p-5">
                  <div className="flex justify-between place-items-center">
                    <h3 className=" text-base font-bold">{title}</h3>
                    <p className="text-xl text-[#CAFF33] font-bold">
                      <HiArrowUpRight />
                    </p>
                  </div>
                  <p className="text-xs leading-8 pt-2 font-medium text-gray-text_color">
                    {" "}
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Features;