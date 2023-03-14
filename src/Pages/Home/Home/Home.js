import React from "react";
import Services from "../../Services/Services/Services";
import Banner from "../Banner/Banner";
import DentalCare from "../DentalCare/DentalCare";
import Information from "../Information/Information";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Information></Information>
      <Services></Services>
      <DentalCare></DentalCare>
    </div>
  );
};

export default Home;
