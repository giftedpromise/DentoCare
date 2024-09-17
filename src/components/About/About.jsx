import React from "react";
import AboutCard from "./AboutCard";
import AboutImg from "../../assets/images/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container relative lg:px-[48px]">
        {" "}
        {/* Use relative for positioning */}
        <div className="flex justify-between gap-[50px] lg:gap-[130px] flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl-w[270px] z-10 order-2 lg:order-1">
            {/* About image */}
            <img
              src={AboutImg}
              alt="about"
              className="w-[370px] h-[470px] object-cover rounded"
            />

            {/* Position AboutCard absolutely on top of the image */}
            <div className="absolute z-20 bottom-8 lg:bottom-[30%] left-[50%] w-[200px] md:w-[300px] lg:left-[30%]">
              <AboutCard />
            </div>
          </div>

          {/* This is the flex item affecting the positioning */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 flex-shrink-0">
            <h2 className="heading">
              Honored to be recognized among the nation’s finest dental care
              providers.
            </h2>
            <p className="text_para">
              For over 30 years, we have been consistently recognized by
              Nigeria’s News & World Report as one of the top dental practices
              in the nation. Our commitment to excellence and innovation ensures
              that we provide world-class dental care, tailored to each
              patient’s needs. Experience the exceptional difference in oral
              healthcare—your smile deserves nothing less.
            </p>
            <p className="text_para mt-[30px]">
              At our dental clinic, excellence is not a milestone but a daily
              commitment. Each day, we focus on advancing patient care, not by
              resting on past achievements, but by continually looking ahead to
              improve and innovate. Our mission is to provide the highest
              standard of dental care, ensuring that every visit brings you one
              step closer to optimal oral health and a confident smile.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
