import React from "react";
import { images } from "../constant";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user || !user.displayName) {
    return null; // Return null or a placeholder if user is not available
  }

  const getInitial = user.displayName
    .split(" ")
    .map((name) => name[0])
    .join("");
  return (
    <div className="reletive align-element ">
      <img
        src={images.abstract_header}
        alt=""
        className=" absolute w-16 h-16 top-0 left-0 rounded-full"
      />
      {user ? (
        <div className="flex justify-between place-items-center gap-x-2 p-3 rounded-xl w-fit float-right my-2">
          <h1 className=" font-bold text-gray-200">Welcome</h1>
          <div className=" grid place-items-center w-[40px] h-[40px] rounded-full bg-green-lightbg">
            <h3 className=" font-bold text-gray-200"> {getInitial}</h3>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
