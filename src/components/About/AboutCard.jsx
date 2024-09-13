import React from "react";
import AboutImg from "../../assets/images/about.jpg";

const AboutCard = () => {
  return (
    <div
      className="max-w-[18rem] p-6 rounded-lg bg-white relative shadow-xl"
      style={{
        boxShadow:
          "0 -3px 15px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1)", // Custom shadow for top and bottom
      }}
    >
      {/* Browser window icons */}
      <div className="absolute top-6 left-8 flex space-x-1">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Doctor Info */}
      <div className="flex items-center space-x-4 mt-6">
        {/* Image */}
        <img
          src={AboutImg}
          alt="Dr. Chisom"
          className="lg:w-16 lg:h-16 w-12 h-12 rounded-full object-cover"
        />

        {/* Doctor Details */}
        <div>
          {/* Side-by-side Gray Lines */}
          <div className="flex space-x-2 mb-2">
            <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
          </div>

          {/* Doctor name and title */}
          <h3 className="lg:text-lg text-[10px] font-bold text-gray-900">
            Dr. Chisom Ngani
          </h3>
          <p className="lg:text-sm text-[10px] text-gray-500">
            Chief Medical Officer
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
