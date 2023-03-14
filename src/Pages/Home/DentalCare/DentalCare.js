import React from "react";
import treatment from "../../../assets/images/treatment.png";

const DentalCare = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          alt=""
          className="lg:w-1/2 rounded-lg shadow-2xl"
        />
        <div className="lg:pl-16 mt-6">
          <h1 className="text-5xl font-bold">
            Expectational Dental Care,
            <br /> on Your Terms
          </h1>
          <p className="py-6">
            Getting prompt dental treatment is important if you experience any
            dental issues such as toothaches, sensitivity, or bleeding gums.
            Delaying treatment can lead to more serious dental problems and
            potentially more expensive and invasive treatments in the future.
            Don't wait, prioritize your dental health by seeking treatment as
            soon as possible.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
