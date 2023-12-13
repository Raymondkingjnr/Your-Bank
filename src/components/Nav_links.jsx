import React from "react";
import { Link } from "react-router-dom";
import { data } from "../constant";

const Nav_links = () => {
  return (
    <div className=" lg:flex">
      {data.Links.map((link, index) => {
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
