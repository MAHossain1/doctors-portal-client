import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="my-20" style={{ background: `url(${appointment})` }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            alt=""
            className="-mt-32 -mb-4 hidden md:block lg:block lg:w-1/2 rounded-lg"
          />
          <div>
            <h1 className="text-xl text-secondary font-bold">Appointment</h1>
            <h3 className="text-4xl text-white my-4 font-bold">
              Make an appointment Today
            </h3>
            <p className="py-6 text-white">
              Scheduling regular dental checkups is crucial for maintaining good
              oral health. Our appointment section offers convenient scheduling
              options to fit your busy lifestyle. Don't neglect your dental
              health - book your next appointment with us today.
            </p>
            <PrimaryButton>Get Appointed</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
