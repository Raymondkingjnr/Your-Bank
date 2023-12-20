import React from "react";
import { images } from "../constant";
import { FaBarsStaggered } from "react-icons/fa6";
import Nav_links from "./Nav_links";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../feature/AuthSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <section className="align-element pt-9">
      <main className="navbar bg-green-lightbg rounded-full px-5  border border-base-content">
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
              className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-green-lightbg rounded-box w-52"
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
        <div className="navbar-end">
          {user ? (
            <button
              className=" btn-sm md:btn bg-green-bg text-[#000] font-bold text-sm border-transparent"
              onClick={() => dispatch(logOut())}
            >
              Sign Out
            </button>
          ) : (
            <Link
              to={"/login"}
              className="font-bold text-sm capitalize text-neutral-300"
            >
              login /
              <span>
                {" "}
                <Link
                  to={"/sign_up"}
                  className="font-bold text-sm capitalize bg-[#CAFF33] p-2 text-neutral rounded-full"
                >
                  sign in
                </Link>
              </span>
            </Link>
          )}
        </div>
        {/* <div className=" navbar-end">
         
        </div> */}
      </main>
    </section>
  );
};

export default Navbar;
