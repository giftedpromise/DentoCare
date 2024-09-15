import React from "react";

const ServiceCard = ({ item }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div
      className="py-[30px] px-3 lg:px-5 shadow-lg rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl h-[280px]" // Set the same height
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
