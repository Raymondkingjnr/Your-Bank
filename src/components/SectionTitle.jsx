import React from "react";

const SectionTitle = ({ text, title, colored }) => {
  return (
    <div>
      <h2 className="section-header py-6 capitalize">
        {title} <span className="text-[#CAFF33]">{colored}</span>{" "}
      </h2>
      <p className="text-sm leading-8 font-medium ">{text}</p>
    </div>
  );
};

export default SectionTitle;
