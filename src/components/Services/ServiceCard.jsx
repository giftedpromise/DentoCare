import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ item }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div
      className="relative py-[30px] px-3 lg:px-5 shadow-lg rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl h-[350px]" // Set the same height
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      <Link
        to="/doctors"
        className="absolute bottom-4 right-4 w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
      >
        <BsArrowRight className="group-hover:text-white w-6 h-5" />
      </Link>
    </div>
  );
};

export default ServiceCard;
