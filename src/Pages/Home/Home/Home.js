import React from "react";
import Services from "../../Services/Services/Services";
import Banner from "../Banner/Banner";
import DentalCare from "../DentalCare/DentalCare";
import Information from "../Information/Information";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Information></Information>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
