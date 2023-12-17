import React, { useEffect } from "react";
import { Testimonies } from "../components";
import FormInput from "../components/FormInput";
import { images } from "../constant";
import { MdFacebook } from "react-icons/md";
import { FaGoogle, FaApple } from "react-icons/fa6";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { loginUser, setLoadin } from "../feature/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const icons = [<MdFacebook />, <FaGoogle />, <FaApple />];

export const action = async ({ request, dispatch }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);

  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch(loginUser(user));
      return updateProfile(user, { displayName: data.firstName });
    })
    .then(() => {
      toast.success("account created successfully");
    })
    .then(() => {
      return null;
    })
    .catch((error) => {
      toast.error(
        error.message ||
          "You Have an issue logging in check your credientials again"
      );
      return null;
    });
  return redirect("/");
};

const Sign_up = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            userName: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoadin(false));
      }
    });
  }, [dispatch]);

  // useEffect(() => {
  //   if (user) {
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 2000);
  //   }
  // }, [user]);

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
        <Form method="POST">
          <div className=" grid md:grid-cols-2  place-items-center gap-4 my-8">
            <FormInput
              type={"text"}
              name={"firstName"}
              placeholder={"Enter First Name"}
            />
            <FormInput
              type={"text"}
              name={"lastName"}
              placeholder={"Enter Last Name"}
            />
            <FormInput
              type={"email"}
              name={"email"}
              placeholder={"Enter Email"}
            />
            <FormInput
              type={"password"}
              name={"password"}
              placeholder={"Enter your Password"}
            />
          </div>
          <div className="flex place-content-center place-items-center flex-col">
            <button
              disabled={setLoadin}
              className="btn border-transparent w-[250px]  md:w-[400px]  rounded-2xl mt-8 bg-gray-gray_bg text-[#fff] hover:text-[#000] transition duration-300 hover:bg-green-bg"
            >
              Sign Up
            </button>
          </div>
        </Form>
        <main className="mt-10 flex place-items-center">
          <div className=" w-[70px] md:w-[120px] h-[1px] bg-[#fff] rounded-2xl" />
          <p className="px-5 font-bold text-[#fff] text-sm">Or Continue with</p>
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
