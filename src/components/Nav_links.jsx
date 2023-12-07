import React from "react";
import { Link } from "react-router-dom";

const Links = [
  {
    Path: "/",
    text: "home",
  },
  {
    Path: "security",
    text: "security",
  },
  {
    Path: "about",
    text: "about",
  },
  {
    Path: "career",
    text: "career",
  },
];

const Nav_links = () => {
  return (
    <div className=" lg:flex">
      {Links.map((link, index) => {
        return (
          <li key={index}>
            <Link to={link.Path} className=" capitalize text-sm font-bold ">
              {link.text}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Nav_links;
