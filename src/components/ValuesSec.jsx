import React from "react";
import SectionTitle from "./SectionTitle";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiPresentationChartBar } from "react-icons/hi2";

const values_data = [
  {
    title: "Integrity",
    text: "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.",
  },
  {
    title: "Customer Centricity",
    text: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.",
  },
  {
    title: "Collaboration",
    text: "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.",
  },
  {
    title: "Innovation",
    text: "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.",
  },
];

const benefit_data = [
  {
    icon: <HiPresentationChartBar />,
    title: "Competitive Compensation",
    text: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
  },
  {
    icon: <FaLightbulb />,
    title: "Health and Wellness",
    text: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
  },
  {
    icon: <IoBriefcaseOutline />,
    title: "Retirement Planning",
    text: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
  },
  {
    icon: <BsBriefcaseFill />,
    title: "Work-Life Balance",
    text: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
  },
];

const ValuesSec = () => {
  return (
    <div className=" align-element my-20">
      <main className=" md:w-[700px] text-center md:text-left pl-4">
        <SectionTitle
          title={"our"}
          colored={"values"}
          text={
            "At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."
          }
        />
      </main>
      <main className="grid md:grid-cols-2 gap-9 pt-16">
        {values_data.map((item, index) => (
          <div key={index} className="flex gap-3 p-4">
            <div className=" h-full w-[1px] bg-green-bg" />
            <aside>
              <h1 className=" text-xl mb-5 font-bold text-gray-grey_title">
                {item.title}
              </h1>
              <p className=" text-sm font-medium text-gray-text_color">
                {item.text}
              </p>
            </aside>
          </div>
        ))}
      </main>

      {/* BENEFIT */}
      <div className="mt-20">
        <article>
          <main className=" md:w-[700px] text-center md:text-left pl-4">
            <SectionTitle
              title={"our"}
              colored={"benefits"}
              text={
                "At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."
              }
            />
          </main>
          <main className="grid md:grid-cols-2 gap-9 pt-16">
            {benefit_data.map((item) => (
              <div className=" p-6  bg-gray-gray_bg rounded-xl">
                <aside className="flex gap-2 place-items-center pb-5">
                  <div className=" bg-gradient-to-t from-green-lightbg to-[#D1FF4C] grid place-items-center rounded-full h-12 w-12">
                    <p className=" text-green-bg font-bold text-xl">
                      {item.icon}
                    </p>
                  </div>
                  <h2 className=" text-xl font-bold text-[#fff]">
                    {item.title}
                  </h2>
                </aside>
                <p className=" text-sm font-medium leading-8 text-gray-text_color">
                  {item.text}
                </p>
              </div>
            ))}
          </main>
        </article>
      </div>
    </div>
  );
};

export default ValuesSec;
