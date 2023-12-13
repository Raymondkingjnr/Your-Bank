import React from "react";
import SectionTitle from "./SectionTitle";
import { data } from "../constant";
import { BsBriefcaseFill } from "react-icons/bs";
import { FAQ, OpenAccount } from ".";

const JobsSec = () => {
  return (
    <div className=" align-element">
      <main className="md:w-[700px]">
        <SectionTitle
          colored={"job opening"}
          text={
            "Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry"
          }
        />
      </main>
      <main className="grid md:grid-cols-2 gap-12 py-16">
        {data.jobs.map((item) => (
          <div className=" bg-gray-gray_bg px-4 py-2 rounded-lg">
            <h2 className="text-xl font-bold text-[#fff]">{item.title}</h2>
            <article className="flex place-items-center gap-3 my-6">
              <p className=" pl-3 pr-3 py-3 text-gray-text_color text-xs font-semibold border-gray-border_gray rounded-xl bg-[#000]">
                Location: {item.location}
              </p>
              <p className=" pl-3 pr-3 py-3 text-gray-text_color text-xs font-semibold rounded-xl bg-[#000]">
                Department: {item.department}
              </p>
            </article>
            <h2 className="text-xl font-bold text-[#fff]">About Job</h2>
            <p className=" text-gray-text_color text-xs font-semibold leading-8 my-6">
              {item.about_job}
            </p>
            <h1 className="text-xl font-bold text-[#fff]">
              Requirements & Qualifications
            </h1>
            <aside className="my-5">
              {item.requirment.map((item) => (
                <div className="flex place-items-center gap-4">
                  <p>
                    <BsBriefcaseFill />
                  </p>
                  <p className="text-gray-text_color text-xs font-semibold leading-2 my-5">
                    {item}
                  </p>
                </div>
              ))}
            </aside>
            <button className="btn bg-green-bg text-[#000] font-bold capitalize rounded-2xl border-transparent">
              Apply now
            </button>
          </div>
        ))}
      </main>
      <FAQ />
      <OpenAccount />
    </div>
  );
};

export default JobsSec;
