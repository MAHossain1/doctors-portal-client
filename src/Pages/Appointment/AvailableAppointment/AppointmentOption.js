import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const AppointmentOption = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body mt-8 text-center">
        <h2 className="text-2xl text-secondary font-semibold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className="card-actions justify-center">
          <PrimaryButton>Book Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
