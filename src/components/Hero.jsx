import React from "react";
import { TiTick } from "react-icons/ti";
import { GoPlus } from "react-icons/go";
import SectionTitle from "./SectionTitle";
import { TbCurrencyDollar } from "react-icons/tb";
import { FaPoundSign, FaEthereum } from "react-icons/fa";
import { LuBitcoin } from "react-icons/lu";
import { images } from "../constant";

const icons = [
  {
    icon: <TbCurrencyDollar />,
  },
  {
    icon: <FaPoundSign />,
  },
  {
    icon: <LuBitcoin />,
  },
  {
    icon: <FaEthereum />,
  },
];

const Hero = () => {
  return (
    <section className=" align-element grid md:grid-cols-2 place-content-center overflow-x-hidden gap-9  py-20">
      <div className="px-8">
        <article className="flex place-items-center gap-2 rounded-full bg-green-lightbg w-[300px] p-2">
          <div className="grid place-items-center w-8 h-8 bg-[#caff33] rounded-full">
            <p className="text-[#000]">
              <TiTick />
            </p>
          </div>

          <p className="text-sm font-bold text-gray-text_color">
            No LLC Required, No Credit Check.
          </p>
        </article>
        <main className="">
          <SectionTitle
            title={"Welcome to YourBank Empowering "}
            colored={"Your Financial Journey"}
            text={
              "At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers needs"
            }
          />
        </main>
        <button className="btn bg-[#CAFF33] capitalize border-transparent text-[#000] text-sm font-bold rounded-2xl mt-9">
          open account
        </button>
      </div>

      {/*  */}

      <div className="grid place-content-center relative ">
        <aside className="flex absolute z-[20] place-items-center gap-4 rounded-lg top-3 left-4 p-3 bg-[#22251B]">
          <div className="grid place-items-center w-7 h-7 rounded-full bg-[#caff33] ">
            <p className="text-[#000]">
              <GoPlus />
            </p>
          </div>
          <div>
            <h2>+ $5000</h2>
            <p>Monthly Income</p>
          </div>
        </aside>
        <main className="relative z-[10] p-8 mt-14 rounded-lg w-[400px]  bg-[#1A1A1A]   liner-border">
          <h3 className="item-header float-left pb-[3rem]">Your Transaction</h3>
          <div>
            <img
              src={images.container_img}
              alt=""
              className=" w-[300px] object-contain"
            />
          </div>
          <h3 className="item-header pt-6">Money Exchange</h3>

          <div className="flex justify-between place-content-center place-items-center mt-10 rounded-md p-5 bg-[#1c1c1c]">
            <article>
              <div className="flex place-items-center gap-2">
                <img src={images.india_img} alt="" className="w-6 h-6" />
                <h3 className="text-sm font-bold ">INR</h3>
              </div>
              <p className="text-p pt-4">Indian Rupees</p>
              <h2 className="pt-6 text-sm font-normal">50,000</h2>
            </article>
            <article>
              <div className="flex place-items-center gap-2">
                <img src={images.usa_img} alt="" className="w-6 h-6" />
                <h3 className="text-sm font-bold ">USA</h3>
              </div>
              <p className="text-p pt-4">United States Dollar</p>
              <h2 className="pt-6 text-sm font-normal">12.00</h2>
            </article>
            <div className="divider"></div>
          </div>
          <article className="grid mt-9">
            <button className="btn bg-[#22251B] text-[#caff33] font-bold text-sm rounded-full border-transparent">
              Exchange
            </button>
          </article>
        </main>
        <div className=" absolute right-0 top-0">
          <img src={images.abstract_hero} alt="" className=" w-52 " />
        </div>
        <article className="flex justify-between place-items-center  mt-6  bg-[#22251B] rounded-full px-5 py-3 gap-3 float-right">
          <p className="text-sm font-bold ">Supported Currency</p>
          <div className="flex gap-3 place-items-center px-5 py-2 rounded-full bg-gray-gray_bg">
            {icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="grid place-content-center w-7 h-7 rounded-full bg-[#22251B]"
                >
                  <p className="text-[#caff33]">{icon.icon}</p>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
