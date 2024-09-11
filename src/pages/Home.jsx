import React from "react";

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
                  Our dental clinic offers a full range of services, including
                  routine cleanings, advanced treatments like implants and root
                  canals, cosmetic dentistry, pediatric care, orthodontics, and
                  gum disease treatments. We focus on personalized, high-quality
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
