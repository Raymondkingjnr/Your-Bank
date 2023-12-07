import React from "react";
import images from "../constant/images";
import { FaBarsStaggered } from "react-icons/fa6";
import Nav_links from "./Nav_links";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="align-element pt-9">
      <main className="navbar bg-accent-content rounded-full px-5  border border-base-content">
        {/* NAV-START */}
        <div className="navbar-start">
          <aside className="hidden lg:flex place-items-center gap-x-3 object-contain">
            <img src={images.logo} alt="" className=" w-10 h-10" />
            <h2 className="item-header">Your Bank</h2>
          </aside>
          {/* DROP_DOWN */}
          <div className="dropdown">
            <label
              tabIndex={0}
              role="botton"
              className=" btn-neutral lg:hidden"
            >
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-accent-content rounded-box w-52"
            >
              <Nav_links />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Nav_links />
          </ul>
        </div>
        <div className=" navbar-end">
          <Link
            to={"/login"}
            className="font-bold text-sm capitalize text-neutral-300"
          >
            login /
            <span>
              {" "}
              <Link
                to={"sign_up"}
                className="font-bold text-sm capitalize bg-[#CAFF33] p-2 text-neutral rounded-full"
              >
                sign in
              </Link>
            </span>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Navbar;
