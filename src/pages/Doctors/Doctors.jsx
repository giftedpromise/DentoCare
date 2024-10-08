import React from "react";
import DoctorCard from "./../../components/Doctors/DoctorCard";
import { doctors } from "./../../assets/data/doctors";
import Testimonials from "../../components/Testimonials/Testimonials";

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center lg:px-[48px]">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-center">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              {" "}
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container lg:px-[48px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 ">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container lg:px-[48px]">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              What our patients are saying about us
            </h2>
            <p className="text_para text-center">
              World-class dental care for everyone. Our practice delivers
              unmatched expertise and exceptional service.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default Doctors;
