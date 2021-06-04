import React from "react";
import ReactStars from "react-rating-stars-component";
import NotAvailable from "../assets/notAvailable.jpg";

export default function Parking({
  image,
  rating,
  address,
  review,
  link,
  title,
  score,
}) {
  return (
    <div className="flex justify-center align-center shadow-md">
      <div className="w-96 flex-col border-2 justify-center text-center">
        <a className="text-center" rel="noreferrer" target="_blank" href={link}>
          <h1 className="font-bold p-2">{title}</h1>
          <img
            className="h-52 w-52 cursor-pointer"
            alt="Parking lot"
            src={image ? image : NotAvailable}
          />
        </a>
        <div className="p-4">
          <span>Address: {address.join(" ")}</span>
          <p>Rating: {rating}</p>
          <p>Review count: {review}</p>
          <ReactStars
            count={5}
            size={24}
            value={Math.round(score)}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </div>
  );
}
