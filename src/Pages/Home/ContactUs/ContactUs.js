import React from "react";
import background from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <section className="mt-20" style={{ background: `url(${background})` }}>
      <div className="text-center pt-4">
        <h2 className="text-xl font-bold text-primary">Contact Us</h2>
        <h4 className="my-4 text-white text-3xl">Stay Connected With Us</h4>
      </div>
      <form className="text-center pb-6">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="mb-4 input input-bordered input-primary w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="mb-4 input input-bordered input-primary w-full max-w-xs"
        />
        <br />
        <textarea
          type="text"
          name="message"
          placeholder="Your message"
          className="mb-6 textarea textarea-primary textarea-bordered textarea-lg w-full max-w-xs"
        ></textarea>
        <br />
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </section>
  );
};

export default ContactUs;
