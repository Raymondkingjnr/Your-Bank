import React, { useState, useEffect } from "react";
import { Testimonies } from "../components";
import FormInput from "../components/FormInput";
import { images } from "../constant";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signInWithGoogle } from "../feature/AuthSlice";

const icons = [<FaGoogle />];

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
  };

  const { user, isLoading } = useSelector((state) => state.auth);
  console.log(user);

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignIn = async () => {
    dispatch(signIn(values.email, values.password));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <div className="py-20">
      {/* <Navbar /> */}
      <section className=" grid place-content-center relative place-items-center bg-[#1E1E1E] rounded-xl py-20  max-w-4xl mx-auto">
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
        <main className=" flex flex-col md:flex-row place-items-center gap-4 my-8">
          <FormInput
            type={"email"}
            name={"email"}
            placeholder={"Enter Email"}
            handleChange={handleChange}
          />
          <FormInput
            type={"password"}
            name={"password"}
            placeholder={"Enter Password"}
            handleChange={handleChange}
          />
        </main>
        <a href="#" className=" font-bold text-base">
          Forgot password?
        </a>
        <div className="flex flex-col">
          <button
            className="btn border-transparent w-[250px]  lg:w-[400px] rounded-2xl bg-gray-gray_bg mt-8 text-[#fff] hover:text-[#000] transition duration-300 hover:bg-green-bg"
            disabled={isLoading}
            onClick={handleSignIn}
          >
            Login
          </button>
          <button className="btn border-transparent w-[250px]  lg:w-[400px]  rounded-2xl mt-8 bg-gray-gray_bg text-[#fff] hover:text-[#000] transition duration-300 hover:bg-green-bg">
            <Link to={"/sign_up"}>Sign Up</Link>
          </button>
        </div>
        <main className="mt-10 flex place-items-center">
          <div className="w-[70px] md:w-[120px] h-[1px] bg-[#fff] rounded-2xl" />
          <p className="px-5 font-bold text-[#fff] text-xs">Or Continue with</p>
          <div className="w-[70px] md:w-[120px] h-[1px] bg-[#fff] rounded-2xl" />
        </main>
        <div className="flex gap-10 mt-10">
          {icons.map((icon, index) => (
            <button
              className="grid place-items-center w-[50px] h-[50px] rounded-full border"
              key={index}
              onClick={() => dispatch(signInWithGoogle())}
            >
              {icon}
            </button>
          ))}
        </div>
      </section>
      <Testimonies />
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
