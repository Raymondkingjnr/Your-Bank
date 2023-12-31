import React from "react";
import SectionTitle from "./SectionTitle";
import { images } from "../constant";
import { FaBookOpen } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { BiSolidBank, BiSolidDollarCircle } from "react-icons/bi";
import { HiBanknotes } from "react-icons/hi2";
import { IoBusinessSharp } from "react-icons/io5";
import { HiPresentationChartBar } from "react-icons/hi";

const items = [
  {
    icon: <GiCash />,
    text: "Managing Personal Finances",
  },
  {
    icon: <MdSavings />,
    text: "Saving for the Future",
  },
  {
    icon: <BiSolidBank />,
    text: "Homeownership",
  },
  {
    icon: <FaBookOpen />,
    text: "Education Funding",
  },
];
const for_business = [
  {
    icon: <IoBusinessSharp />,
    text: "Startups and Entrepreneurs",
  },
  {
    icon: <HiBanknotes />,
    text: "Cash Flow Management",
  },
  {
    icon: <HiPresentationChartBar />,
    text: "Business Expansion",
  },
  {
    icon: <BiSolidDollarCircle />,
    text: "Payment Solutions",
  },
];

const Usecase = () => {
  return (
    <div>
      <section className=" align-element mt-8 pb-6">
        <SectionTitle
          colored={"Our Case"}
          text={
            "At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions"
          }
        />
        <div className=" grid lg:grid-cols-2 gap-10 mt-[3rem]">
          <article className=" bg-gray-gray_bg relative grid rounded-xl place-content-center h-[400px]">
            <main className=" absolute left-0 top-0 w-40">
              <img src={images.abstract_left} alt="" />
            </main>
            <main className=" grid place-content-center relative z-10 grid-cols-2 gap-10">
              {items.map((item, index) => {
                const { icon, text } = item;
                return (
                  <div
                    className="grid bg-[#000] p-5 place-content-center place-items-center items-center rounded-lg w-[120px] md:w-[180px]"
                    key={index}
                  >
                    <div className=" bg-gradient-to-t from-green-lightbg to-[#D1FF4C] grid place-items-center rounded-full h-12 w-12">
                      <p className=" text-green-bg font-bold text-xl">{icon}</p>
                    </div>
                    <p className="text-center pt-3 text-xs font-medium">
                      {text}
                    </p>
                  </div>
                );
              })}
            </main>
          </article>
          {/*  */}
          <article className="">
            <h2 className="text-lg font-bold">For Individuals</h2>
            <p className="text-sm font-normal py-4 text-gray-text_color leading-8">
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </p>

            <div className="grid grid-cols-3 place-content-center items-center place-items-center mt-16">
              <aside className="grid place-content-center place-items-center">
                <h3 className="text-3xl font-bold text-green-bg ">78%</h3>
                <p className="text-xs font-bold text-gray-text_color pt-2 text-center">
                  Secure Retirement <br /> Planning
                </p>
              </aside>
              <aside className="grid place-content-center place-items-center">
                <h3 className="text-3xl font-bold text-green-bg ">68%</h3>
                <p className="text-xs font-bold text-gray-text_color pt-2 text-center">
                  Manageable Debt <br /> Consolidation
                </p>
              </aside>
              <aside className="grid place-content-center place-items-center">
                <h3 className="text-3xl font-bold text-green-bg ">91%</h3>
                <p className="text-xs font-bold text-gray-text_color pt-2 text-center">
                  Reducing financial <br /> burdens
                </p>
              </aside>
            </div>
            <button className="btn bg-gray-gray_bg rounded-3xl border-transparent text-gray-text_color mt-10">
              Learn More
            </button>
          </article>
        </div>
      </section>
      {/* FOR BUSINESSE */}
      <section className=" align-element mt-8 pb-6">
        <div className=" grid lg:grid-cols-2 gap-10 mt-[3rem]">
          {/*  */}
          <article className="">
            <h2 className="text-lg font-bold">For Business</h2>
            <p className="text-sm font-normal py-4 text-gray-text_color leading-8">
              For businesses, we empower growth with working capital solutions
              that optimize cash flow, and our tailored financing options fuel
              business expansion. Whatever your financial aspirations, YourBank
              is committed to providing the right tools and support to achieve
              them
            </p>

            <div className="grid grid-cols-3 place-content-center items-center place-items-center mt-16">
              <aside className="grid place-content-center place-items-center">
                <h3 className="text-3xl font-bold text-green-bg ">65%</h3>
                <p className="text-xs font-bold text-gray-text_color pt-2 text-center">
                  Cash Flow <br /> Management
                </p>
              </aside>
              <aside className="grid place-content-center place-items-center">
                <h3 className="text-3xl font-bold text-green-bg ">70%</h3>
                <p className="text-xs font-bold text-gray-text_color pt-2 text-center">
                  Drive Business <br /> Expansion
                </p>
              </aside>
              <aside className="grid place-content-center place-items-center">
                <h3 className="text-3xl font-bold text-green-bg ">45%</h3>
                <p className="text-xs font-bold text-gray-text_color pt-2 text-center">
                  Streamline payroll <br /> processing
                </p>
              </aside>
            </div>
            <button className="btn bg-gray-gray_bg rounded-3xl border-transparent text-gray-text_color mt-10">
              Learn More
            </button>
          </article>
          <article className=" bg-gray-gray_bg relative grid rounded-xl place-content-center h-[400px]">
            <main className=" absolute right-0 top-0 w-40">
              <img src={images.abstract_right} alt="" />
            </main>
            <main className=" grid place-content-center relative z-10 grid-cols-2 gap-10">
              {for_business.map((item, index) => {
                const { icon, text } = item;
                return (
                  <div
                    className="grid bg-[#000] p-5 place-content-center place-items-center items-center rounded-lg w-[120px] md:w-[180px]"
                    key={index}
                  >
                    <div className=" bg-gradient-to-t from-green-lightbg to-[#D1FF4C] grid place-items-center rounded-full h-12 w-12">
                      <p className=" text-green-bg font-bold text-xl">{icon}</p>
                    </div>
                    <p className="text-center pt-3 text-xs font-medium">
                      {text}
                    </p>
                  </div>
                );
              })}
            </main>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Usecase;
