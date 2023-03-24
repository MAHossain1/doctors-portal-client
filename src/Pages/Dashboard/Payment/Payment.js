import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  const { treatment, appointmentDate, price, slot } = booking;
  return (
    <div className="m-10">
      <h1 className="text-3xl">Payment for {treatment}</h1>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
    </div>
  );
};

export default Payment;
