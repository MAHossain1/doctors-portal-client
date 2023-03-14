import React from "react";

const Review = ({ review }) => {
  const { name, img, customerSay, location } = review;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{customerSay}</p>
        <div className="flex items-center">
          <div className="avatar mr-4">
            <div className="w-18 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold">{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
