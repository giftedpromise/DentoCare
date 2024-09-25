import React from "react";

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
    </div>
  );
};

export default DoctorAbout;
