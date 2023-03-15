import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOption.json")
      .then(res => res.json())
      .then(data => setAppointmentOptions(data));
  }, []);

  return (
    <section className="my-10">
      <p className="text-center text-secondary font-semibold">
        Available Appointment on {format(selectedDate, "PP")}
      </p>
      <div className="mx-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map(appointmentOption => (
          <AppointmentOption
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
