import React from "react";
import About from "../components/About/About";
import heroImg01 from "../assets/images/doctor-img04.jpg";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img05.jpeg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar.jpeg";
import faqImg from "../assets/images/faqImg.jpg";
import { Link } from "react-router-dom";
import FeatureImg from "../assets/images/feature3.jpg";
import { BsArrowRight } from "react-icons/bs";
import ServicesList from "../components/Services/ServicesList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";

const Home = () => {
  return (
    <>
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container lg:px-[48px]">
          <div className="flex flex-col lg:flex-row gap-[98px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[50px] md:leading-[64px]">
                  We help our patients achieve a healthier, longer life through
                  excellent dental care.
                </h1>
                <p className="text_para">
                  Dentalmed offers a full range of services, including routine
                  cleanings, advanced treatments like implants and root canals,
                  cosmetic dentistry, pediatric care, orthodontics, and gum
                  disease treatments. We focus on personalized, high-quality
                  care in a comfortable and welcoming environment to ensure
                  lifelong oral health for all ages.
                </p>
                <button className="btn">Book Your Appointment</button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years Of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Percent Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img
                  className="w-[370px] h-[524px] object-cover rounded"
                  src={heroImg01}
                  alt="hero iamge1"
                />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img
                  src={heroImg03}
                  alt=""
                  className="w-[270px] h-[270px] object-cover rounded "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container lg:px-[48px]">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing best dental services
            </h2>
            <p className="text_para text-center">
              Exceptional dental care for everyone. Our clinic provides
              unparalleled expertise and top-quality treatment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="icon01" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Looking for expert dental care? Discover our team of skilled
                  professionals ready to help you achieve a healthy, beautiful
                  smile.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="icon02" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Conveniently located for your dental needs. Find the nearest
                  clinic and start your journey to exceptional oral health.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:borde-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="icon03" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Ready for a healthier smile? Book an appointment with our
                  expert team and receive personalized, high-quality dental
                  care.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:borde-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <section>
        <div className="container lg:px-[48px]">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our dental services</h2>
            <p className="text_para text-center">
              Exceptional dental care for everyone. Our clinic delivers
              unparalleled expertise and personalized oral health services.
            </p>
          </div>

          <ServicesList />
        </div>
      </section>
      <section>
        <div className="container lg:px-[48px]">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual consultation <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text_para">Schedule the appointment directly</li>
                <li className="text_para">
                  Search for your Dentist here, and contact their office.
                </li>
                <li className="text_para">
                  Check out dentists currently accepting new patients and use
                  the online scheduling tool to book your appointment.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img
                src={FeatureImg}
                alt=""
                className="w-[470px] h-[470px] rounded object-cover"
              />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue,24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <figure className="w-[40px] h-[40px] rounded-full cursor-pointer">
                    <img
                      src={avatarIcon}
                      className="w-full rounded-full"
                      alt="userimage"
                    />
                  </figure>
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Collins David
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container lg:px-[48px]">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text_para text-center">
              World-class dental care for everyone. Our advanced dental
              treatments offer unmatched precision and expertise
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      <section>
        <div className="container lg:px-[48px]">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img
                src={faqImg}
                alt="faqImg"
                className="w-[470px] h-[675px] object-cover rounded"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most questions by our Dear patients</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
