import React, { useState, useEffect } from "react";
import { Testimonies } from "../components";
import FormInput from "../components/FormInput";
import { images } from "../constant";
import { MdFacebook } from "react-icons/md";
import { FaGoogle, FaApple } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../feature/AuthSlice";
import { toast } from "react-toastify";

const icons = [<MdFacebook />, <FaGoogle />, <FaApple />];

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
  };

  const user = useSelector((state) => state.auth.user);
  // console.log(user);

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loginUser(user));
      })
      .then(() => {
        toast.success("welcome new back");
      })
      .then(() => {})
      .catch((error) => {
        toast.error(
          error.message ||
            "You Have an issue logging in check credientials again"
        );
      });
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
            onClick={handleLogin}
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
            <div
              className="grid place-items-center w-[50px] h-[50px] rounded-full border"
              key={index}
            >
              <p className=" text-green-bg font-bold ">{icon}</p>
            </div>
          ))}
        </div>
      </section>
      <Testimonies />
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
