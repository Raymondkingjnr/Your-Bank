import React from "react";
import images from "../constant/images";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="reletive align-element ">
      <img
        src={images.abstract_header}
        alt=""
        className=" absolute w-16 h-16 top-0 left-0 rounded-full"
      />
      {user ? (
        <div className=" bg-green-lightbg p-3 rounded-full w-fit float-right my-2">
          <h3 className=" font-bold text-sm ">Welcome {user.displayName} ✅</h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
