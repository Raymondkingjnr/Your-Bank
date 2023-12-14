import React from "react";

const FormInput = ({ type, name, placeholder }) => {
  return (
    <div className="form-control ">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        spellCheck="true"
        className={`input input-bordered rounded-xl md:w-[350px] bg-gray-gray_bg`}
      />
    </div>
  );
};

export default FormInput;
