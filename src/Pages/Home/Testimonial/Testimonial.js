import React from "react";
import comment from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Henry",
      customerSay:
        "I recently received dental care services and was impressed by the level of professionalism and care provided by the dental team...",
      location: "Arizona",
      img: people1,
    },
    {
      _id: 2,
      name: "Phil Khatum",
      customerSay:
        "I was pleasantly surprised by the dental care service. The dentist was attentive and addressed all my concerns, and the office was clean and modern. I would definitely return for future dental needs.",
      location: "Nevada",
      img: people2,
    },
    {
      _id: 3,
      name: "Jorzina Rodrigez",
      customerSay:
        "The dental care service was excellent. The staff was friendly and knowledgeable, and the treatment was efficient and painless.",
      location: "Welington",
      img: people3,
    },
  ];

  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary">Testimonial</h2>
          <h4 className=" text-2xl">What Our Patients Says</h4>
        </div>
        <figure>
          <img className="lg:w-48 w-24" src={comment} alt="" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {reviews.map(review => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
