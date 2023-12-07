import React from "react";
import images from "../constant/images";

const Header = () => {
  return (
    <div className="reletive">
      <img
        src={images.abstract_header}
        alt=""
        className=" absolute w-16 h-16 top-0 left-0 rounded-full"
      />
    </div>
  );
};

export default Header;
