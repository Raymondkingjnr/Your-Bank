import React from "react";
import { MdOutlineOnlinePrediction, MdOutlineSecurity } from "react-icons/md";
import { GrMultiple } from "react-icons/gr";
import { AiOutlineMonitor } from "react-icons/ai";
import SectionTitle from "./SectionTitle";

const items = [
  {
    icon: <MdOutlineOnlinePrediction />,
    title: "Secure Online Banking Platform",
    text: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
  },
  {
    icon: <GrMultiple />,
    title: "Multi-Factor Authentication",
    text: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
  },
  {
    icon: <AiOutlineMonitor />,
    title: "Fraud Monitoring",
    text: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
  },
  {
    icon: <MdOutlineSecurity />,
    title: "Secure Mobile Banking",
    text: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
  },
];

const ProtectSec = () => {
  return (
    <section className=" align-element">
      <main className=" md:w-[700px]">
        <SectionTitle
          title={"How We "}
          colored={"Protect You"}
          text={
            "At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times"
          }
        />
      </main>
      <main className="grid md:grid-cols-2 gap-9 py-16">
        {items.map((item) => (
          <div className=" p-6  bg-gray-gray_bg rounded-xl">
            <aside className="flex gap-2 place-items-center pb-5">
              <div className=" bg-gradient-to-t from-green-lightbg to-[#D1FF4C] grid place-items-center rounded-full h-12 w-12">
                <p className=" text-green-bg font-bold text-xl">{item.icon}</p>
              </div>
              <h2 className="font-bold text-header text-[#fff]">
                {item.title}
              </h2>
            </aside>
            <p className=" text-p leading-8 text-gray-text_color">
              {item.text}
            </p>
          </div>
        ))}
      </main>
    </section>
  );
};

export default ProtectSec;
