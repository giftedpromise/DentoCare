import React, { useState } from "react";
import doctorImg from "../../assets/images/doc.jpg";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import { Feedback } from "./Feedback";

const DoctorsDetails = () => {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorImg} alt="doctor image" className="w-full" />
              </figure>
              <div>
                {" "}
                <span className="bg-[#CCFDF3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Orthodontist
                </span>
                <h3 className="text-headingColor tex-[22px] leading-9 mt-3 font-bold">
                  Dr. Oddey Rahman
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="star icon" /> 4.9
                  </span>
                  <span className=" text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400]">
                    (272)
                  </span>
                </div>
                <p className="text_para text-[14px] md:text-[15px] lg:max-w-[398px]">
                  I am dedicated to creating beautiful, healthy smiles for
                  patients of all ages.
                </p>
              </div>
            </div>
            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-primaryColor"
                }py-2 px-5 mr-5 text-[16px] leading-8 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  "border-b border-solid border-primaryColor"
                }py-2 px-5 mr-5 text-[16px] leading-8 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <Feedback />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsDetails;
