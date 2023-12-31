import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { data } from "../constant";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FQA = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  const showLess = () => {
    setVisibleItems((prevVisibleItems) => Math.max(prevVisibleItems - 4, 0));
  };

  return (
    <div className="align-element">
      <main>
        <SectionTitle
          title={"Frequently"}
          colored={"Asked Questions"}
          text={
            "Still you have any questions? Contact our Team via support@yourbank.com"
          }
        />
      </main>
      <main className="grid gap-y-[2rem] py-5 place-content-center place-items-center">
        <div className="grid md:grid-cols-2 gap-8 ">
          {data.faq_data.slice(0, visibleItems).map((item, index) => {
            const { text, title } = item;
            return (
              <article
                key={index}
                className="bg-[#191919] shadow p-6 mt-10  rounded-lg border border-[#262626]"
              >
                <h3 className="text-base font-bold">{title}</h3>
                <p className=" text-gray-text_color pt-8 text-sm font-medium leading-8">
                  {text}
                </p>
              </article>
            );
          })}
        </div>
        {visibleItems < data.faq_data.length ? (
          <button
            className="flex place-content-center gap-2 blink-2 place-items-center btn rounded-full border-[#262626] p-3 bg-gray-gray_bg text-[#fff]  font-bold"
            onClick={loadMore}
          >
            <p>Load More Faq's</p>
            <p className="mt-[5px] font-bold text-lg">
              <IoIosArrowDown />
            </p>
          </button>
        ) : (
          <button
            onClick={showLess}
            className="flex place-content-center gap-2 blink-2 place-items-center btn rounded-full border-[#262626] p-3 bg-gray-gray_bg text-[#fff]  font-bold"
          >
            <p>Show Less</p>
            <p className="mt-[5px] font-bold text-lg">
              <IoIosArrowUp />
            </p>
          </button>
        )}
      </main>
    </div>
  );
};

export default FQA;
