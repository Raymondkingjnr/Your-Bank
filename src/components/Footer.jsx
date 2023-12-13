import React from "react";
import { images, data } from "../constant";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaLocationDot,
  FaXTwitter,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa6";

const items = [
  {
    icon: <IoMail />,
    text: "hello@skillbirdge.com",
  },
  {
    icon: <FaPhoneAlt />,
    text: "+91 91813 23 2309",
  },
  {
    icon: <FaLocationDot />,
    text: "Somewhere in the World ",
  },
];

const icons = [<FaFacebookF />, <FaXTwitter />, <FaLinkedin />];

const Footer = () => {
  return (
    <div className="align-element py-10 bg-gray-gray_bg rounded-xl">
      <main className="grid place-content-center place-items-center">
        <div className="flex gap-2 place-content-center place-items-center">
          <img src={images.logo} alt="" className=" w-10 h-10" />
          <h1>YourBank</h1>
        </div>
        <div className="flex gap-4 mt-6">
          {data.Links.map((link, index) => {
            return (
              <li key={index} className=" list-none">
                <Link to={link.Path} className=" capitalize text-sm font-bold ">
                  {link.text}
                </Link>
              </li>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row gap-5 pt-10 border-gray-border_gray  py-4">
          {items.map((item) => (
            <div className="flex gap-3 place-items-center">
              <p className=" text-green-bg"> {item.icon}</p>
              <p className="text-[#E4E4E7] text-sm font-semibold">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </main>
      <main className="flex flex-col md:flex-row gap-y-8 place-items-center items-center mt-12 p-4 border-gray-border_gray rounded-lg justify-between bg-neutral-950">
        <div className="flex gap-3 place-items-center">
          {icons.map((item) => (
            <div className="grid place-content-center w-10 h-10 rounded-full bg-green-bg">
              <p className=" text-gray-border_gray">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-sm font-semibold">YourBank All Rights Reserved</p>
        <p className="text-sm font-semibold">
          Privacy Policy | Terms of Service
        </p>
      </main>
    </div>
  );
};

export default Footer;
