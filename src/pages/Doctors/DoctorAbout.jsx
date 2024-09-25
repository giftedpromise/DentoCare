import React from "react";
import { formatDate } from "../../utils/formatDate";

const DoctorAbout = () => {
  return (
    <div>
      {" "}
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Dr. Oddey Rahman
          </span>
        </h3>
        <p className="text_para">
          Dr Oddey is an orthodontist with over 10 years of experience in the
          field of orthodontics, He is dedicated to creating beautiful, healthy
          smiles for patients of all ages. His approach combines advanced
          techniques with personalized care, ensuring that each patient receives
          the highest quality treatment tailored to their unique needs. Whether
          you're seeking traditional braces or modern aligners, he is committed
          to helping you achieve the smile you've always wanted in a comfortable
          and welcoming environment.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Educational Background
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate(new Date("2008-06-23"))} -{" "}
                {formatDate(new Date("2011-04-12"))}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PhD in Orthodontics{" "}
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              University of Alberta,Canada
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate(new Date("2007-02-07"))} -{" "}
                {formatDate(new Date("2008-03-12"))}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Masters in Orthodontics{" "}
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              University of Alberta,Canada
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-medium">
              {formatDate(new Date("2012-07-21"))} -{" "}
              {formatDate(new Date("2016-03-10"))}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Orthodontist
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              EverCare Dentals, New York.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-medium">
              {formatDate(new Date("2016-04-18"))} -{" "}
              {formatDate(new Date("2020-10-10"))}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Chief Orthodontist
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              All smiles Dentals, New York.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
