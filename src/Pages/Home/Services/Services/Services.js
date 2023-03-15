import React from "react";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      img: fluoride,
      name: "Fluoride Treatment",
      description:
        "Fluoride treatment is important for strengthening teeth, preventing cavities, and improving overall dental health.",
    },
    {
      id: 2,
      img: cavity,
      name: "Cavity Filling",
      description:
        "Cavity filling is important to prevent tooth decay from progressing, relieve pain, and restore tooth function.",
    },
    {
      id: 3,
      img: whitening,
      name: "Teeth Whitening",
      description:
        "Teeth whitening is important to improve the appearance of teeth, boost confidence, and enhance overall dental aesthetics.",
    },
  ];

  return (
    <div className="my-24">
      <h1 className="text-secondary text-center text-xl font-bold">
        OUR SERVICES
      </h1>
      <h3 className="text-3xl text-center">Services We Provide</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {serviceData.map(service => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
