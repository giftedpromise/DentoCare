import React from "react";
import heroImg01 from "../assets/images/doctor-img04.jpg";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img05.jpeg";

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
                  className="w-[370px] h-[524px] object-cover"
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
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing best dental services
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
