import React from "react";
import SectionTitle from "./SectionTitle";
import { data } from "../constant";

const Press = () => {
  return (
    <section className=" align-element">
      <main>
        <SectionTitle
          colored={"Press Releases"}
          text={
            "Stay updated with the latest happenings and exciting developments at YourBank through our press releases."
          }
        />
      </main>
      <main className="grid md:grid-cols-2 place-items-center gap-12 my-16">
        {data.press_data.map((item) => (
          <div className="p-3 bg-gray-gray_bg rounded-lg">
            <img src={item.image} alt="" className=" w-fit object-contain" />
            <h2 className="pt-10 item-header">{item.title}</h2>
            <article className="flex place-items-center gap-3 my-6">
              <p className=" pl-3 pr-3 py-3 text-gray-text_color text-xs font-semibold border-gray-border_gray rounded-xl bg-[#000]">
                Location: {item.location}
              </p>
              <p className=" pl-3 pr-3 py-3 text-gray-text_color text-xs font-semibold rounded-xl bg-[#000]">
                Date: {item.date}
              </p>
            </article>
            <p className=" text-p">{item.text}</p>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Press;
