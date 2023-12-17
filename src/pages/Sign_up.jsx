import React, { useEffect, useState } from "react";
import { Testimonies } from "../components";
import FormInput from "../components/FormInput";
import { images } from "../constant";
import { MdFacebook } from "react-icons/md";
import { FaGoogle, FaApple } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const icons = [<MdFacebook />, <FaGoogle />, <FaApple />];

const Sign_up = () => {
  const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(signInWithEmailAndPassword(auth, values.email, values.password))
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName: values.firstName });
      })
      .then(() => {
        toast.success("Account created successfuly");
      })
      .catch((err) => {
        toast.error(err.message || "There was an error creating your account");
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
          <h1 className=" text-xl font-bold text-green-bg">Sign Up </h1>
          <p className=" font-medium text-sm text-gray-text_color pt-6 px-5">
            Join our community today! Create an account to unlock exclusive
            features and personalized experiences.
          </p>
        </div>

        <div className=" grid md:grid-cols-2  place-items-center gap-4 my-8">
          <FormInput
            type={"text"}
            name={"firstName"}
            placeholder={"Enter First Name"}
            handleChange={handleChange}
          />
          <FormInput
            type={"text"}
            name={"lastName"}
            placeholder={"Enter Last Name"}
            handleChange={handleChange}
          />
          <FormInput
            type={"email"}
            name={"email"}
            placeholder={"Enter Email"}
            handleChange={handleChange}
          />
          <FormInput
            type={"password"}
            name={"password"}
            placeholder={"Enter your Password"}
            handleChange={handleChange}
          />
        </div>
        <div className="flex place-content-center place-items-center flex-col">
          <button
            className="btn border-transparent w-[250px]  md:w-[400px]  rounded-2xl mt-8 bg-gray-gray_bg text-[#fff] hover:text-[#000] transition duration-300 hover:bg-green-bg"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
        <main className=" pt-4">
          <h1 className=" font-bold text-sm capitalize">
            already have an account ?{" "}
            <Link to={"/login"} className=" text-green-bg">
              Log In
            </Link>
          </h1>
        </main>
        <main className="mt-10 flex place-items-center">
          <div className=" w-[70px] md:w-[120px] h-[1px] bg-[#fff] rounded-2xl" />
          <p className="px-5 font-bold text-[#fff] text-xs">Or Continue with</p>
          <div className=" w-[70px] md:w-[120px] h-[1px] bg-[#fff] rounded-2xl" />
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

export default Sign_up;
