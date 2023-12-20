import React, { useState, useEffect } from "react";
import FormInput from "../components/FormInput";
import { Testimonies } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { reset_password } from "../feature/AuthSlice";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth);
  const initialState = {
    email: "",
  };

  const [value, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReset = () => {
    dispatch(reset_password(value.email));
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [isLoading]);

  return (
    <div className=" py-20 ">
      <section className=" grid place-items-center my-20">
        {isLoading ? (
          <h1 className=" text-center font-bold text-base">Reset Link Sent</h1>
        ) : (
          <FormInput
            type={"email"}
            name={"email"}
            placeholder={"enter email"}
            handleChange={handleChange}
          />
        )}
        <button
          className=" btn bg-green-bg text-[#000] font-bold text-sm border-transparent mt-8"
          onClick={handleReset}
        >
          Reset password
        </button>
      </section>
      <Testimonies />
    </div>
  );
};

export default ResetPassword;
