import React from "react";
import SectionTitle from "./SectionTitle";
import { images } from "../constant";

const Missionsex = () => {
  return (
    <div className=" align-element">
      <main className=" md:w-[700px]">
        <SectionTitle
          colored={"Mission & Vision"}
          text={
            "We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development"
          }
        />
      </main>
      <main className="py-20">
        <div className=" flex flex-col md:flex-row gap-16 place-items-center pb-10">
          <img
            src={images.mission_1}
            alt=""
            className=" object-contain w-[300px]"
          />
          <div className="flex gap-3">
            <div className=" h-[350px] lg:h-[200px] w-[1px] bg-green-bg" />
            <aside>
              <h2 className="text-2xl font-bold text-[#fff]">Mission</h2>
              <p className=" text-sm font-medium text-gray-text_color leading-7 py-6">
                At YourBank, our mission is to empower our customers to achieve
                financial success. We are dedicated to delivering innovative
                banking solutions that cater to their unique needs. Through
                personalized services, expert guidance, and cutting-edge
                technology, we aim to build strong, lasting relationships with
                our customers. Our mission is to be their trusted partner,
                helping them navigate their financial journey and realize their
                dreams.
              </p>
            </aside>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-16 place-items-center pb-10">
          <div className="flex gap-3">
            <div className=" h-[350px] lg:h-[200px] w-[1px] bg-green-bg" />
            <aside>
              <h2 className="text-2xl font-bold text-[#fff]">Vision</h2>
              <p className=" text-sm font-medium text-gray-text_color leading-7 py-6">
                Our vision at YourBank is to redefine banking by creating a
                seamless and personalized experience for our customers. We
                envision a future where banking is accessible, transparent, and
                tailored to individual preferences. Through continuous
                innovation and collaboration, we strive to be at the forefront
                of the industry, setting new standards for customer-centric
                banking. Our vision is to be the preferred financial
                institution, known for our unwavering commitment to excellence,
                trust, and customer satisfaction.
              </p>
            </aside>
          </div>
          <img
            src={images.mission_2}
            alt=""
            className=" object-contain w-[300px]"
          />
        </div>
      </main>
    </div>
  );
};

export default Missionsex;
