import React from "react";
import chair from "../../../assets/images/chair.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero my-component my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="rounded-lg lg:w-1/2 shadow-2xl"
          alt="tairena"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Taking care of your teeth is essential for maintaining good oral
            health. Regular brushing, flossing, and dental checkups can help
            prevent dental problems and keep your teeth healthy and strong.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
