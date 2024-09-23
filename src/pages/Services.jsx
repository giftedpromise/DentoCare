import React from "react";
import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <section>
      <div className="container lg:px-[48px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] mt-[30px]">
          {services.map((item, index) => (
            <div key={index} className="mt-6 lg:mt-0">
              <ServiceCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
