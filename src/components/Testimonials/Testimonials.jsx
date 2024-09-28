import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/avatar1.jpg";
import patientAvatar2 from "../../assets/images/avatar2.jpg";
import patientAvatar3 from "../../assets/images/avatar3.jpg";
import patientAvatar4 from "../../assets/images/avatar4.jpg";
import patientAvatar5 from "../../assets/images/avatar5.jpg";
import patientAvatar6 from "../../assets/images/avatar6.jpg";
import { HiStar } from "react-icons/hi"; // Corrected the import for the star icon

const Testimonials = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <figure className="w-[52px] h-[42px]">
                <img
                  src={patientAvatar}
                  className="w-full rounded"
                  alt="userimage"
                />
              </figure>

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Matthew Rapheal
                </h4>
                <div className="flex items-center mt-3">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-8 text-textColor font-[400]">
              I couldn't be more thrilled with the care I received at DentalMed
              Clinic. Their attention to detail and commitment to providing
              top-notch care was evident throughout my visit.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <figure className="w-[52px] h-[52px]">
                <img
                  src={patientAvatar3}
                  className="w-full rounded"
                  alt="userimage"
                />
              </figure>

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Daniel James
                </h4>
                <div className="flex items-center mt-3">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Excellent care and service at DentalMed! The team was welcoming
              and attentive. I left with a brighter smile and a great
              impression. Highly recommend this practice!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <figure className="w-[52px] h-[52px]">
                <img
                  src={patientAvatar2}
                  className="w-full rounded"
                  alt="userimage"
                />
              </figure>

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  David Peter
                </h4>
                <div className="flex items-center mt-3">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-6 text-textColor font-[400]">
              Fantastic experience at DentalMed! The staff was friendly,
              professional, and made me feel completely comfortable. My visit
              was smooth and painless, and my smile has never looked better.
              Highly recommend!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <figure className="w-[52px] h-[52px]">
                <img
                  src={patientAvatar6}
                  className="w-full rounded"
                  alt="userimage"
                />
              </figure>

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Amina Adamu
                </h4>
                <div className="flex items-center mt-3">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-6 text-textColor font-[400]">
              I had a wonderful experience at DentalMed. The staff was
              incredibly friendly. My teeth feel amazing, and I couldn’t be
              happier with the results!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <figure className="w-[52px] h-[52px]">
                <img
                  src={patientAvatar4}
                  className="w-full rounded"
                  alt="userimage"
                />
              </figure>

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Michael Daniel
                </h4>
                <div className="flex items-center mt-3">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Highly impressed with the professionalism and care at DentalMed.
              Dr. Esther is knowledgeable and compassionate, making the whole
              process easy and stress-free. My dental health has never been
              better!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <figure className="w-[52px] h-[52px]">
                <img
                  src={patientAvatar5}
                  className="w-full rounded"
                  alt="userimage"
                />
              </figure>

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Queeneth Okoro
                </h4>
                <div className="flex items-center mt-3">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-6 text-textColor font-[400]">
              I can’t say enough good things about DentalMed. The office is
              clean and modern, the staff is kind and attentive, and Dr.Grace
              did an amazing job with my treatment. I’m so glad I found this
              place!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
