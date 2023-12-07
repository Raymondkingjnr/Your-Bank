import React from "react";

const SectionTitle = ({ text, title, colored }) => {
  return (
    <div>
      <h2 className="section-header py-6">
        {title} <span className="text-[#CAFF33]">{colored}</span>{" "}
      </h2>
      <p className="text-p py-3 leading-8  font-normal ">{text}</p>
    </div>
  );
};

export default SectionTitle;
