import React from "react";
import { Testimonies } from "../components";
import FormInput from "../components/FormInput";
import { images } from "../constant";
import { MdFacebook } from "react-icons/md";
import { FaGoogle, FaApple } from "react-icons/fa6";

const icons = [<MdFacebook />, <FaGoogle />, <FaApple />];

const Login = () => {
  return (
    <div>
      <section className=" grid place-content-center relative place-items-center bg-[#1E1E1E] rounded-xl py-20 my-20 max-w-4xl mx-auto">
        <img
          src={images.abstract_right}
          alt="imag"
          className=" absolute top-0 right-0 h-[15rem] w-[15rem]"
        />
        <div className="text-center">
          <h1 className=" text-xl font-bold text-green-bg">Login </h1>
          <p className=" font-medium text-sm text-gray-text_color pt-6">
            Welcome back! Please log in to access your account.
          </p>
        </div>
        <main>
          <form className=" flex flex-col md:flex-row place-items-center gap-4 my-8">
            <FormInput
              type={"email"}
              name={"email"}
              placeholder={"Enter Email"}
            />
            <FormInput
              type={"password"}
              name={"password"}
              placeholder={"Enter Password"}
            />
          </form>
        </main>
        <a href="#" className=" font-bold text-base">
          Forgot password?
        </a>
        <div className="flex flex-col">
          <button className="btn border-transparent w-[250px]  lg:w-[400px] rounded-2xl bg-gray-gray_bg mt-8 text-[#fff] hover:text-[#000] transition duration-300 hover:bg-green-bg">
            Login
          </button>
          <button className="btn border-transparent w-[250px]  lg:w-[400px]  rounded-2xl mt-8 bg-gray-gray_bg text-[#fff] hover:text-[#000] transition duration-300 hover:bg-green-bg">
            Sign Up
          </button>
          <main className="mt-10 flex place-items-center">
            <div className="w-[120px] h-[1px] bg-[#fff] rounded-2xl" />
            <p className="px-5 font-bold text-[#fff] text-sm">
              Or Continue with
            </p>
            <div className="w-[120px] h-[1px] bg-[#fff] rounded-2xl" />
          </main>
        </div>
        <div className="flex gap-10 mt-10">
          {icons.map((icon) => (
            <div className="grid place-items-center w-[50px] h-[50px] rounded-full border">
              <p className=" text-green-bg font-bold ">{icon}</p>
            </div>
          ))}
        </div>
      </section>
      <Testimonies />
    </div>
  );
};

export default Login;
