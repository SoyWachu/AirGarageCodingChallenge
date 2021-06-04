import React from "react";
import Parking from "./Parking";

export default function Parkinglist({ data }) {
  return (
    <div className="grid grid-cols-8 gap-4 p-6 ">
      {data?.map((e) => {
        return (
          <Parking
            image={e.image_url}
            rating={e.rating}
            address={e.location.display_address}
            review={e.review_count}
            link={e.url}
            title={e.name}
            score={(e.review_count * e.rating) / (e.review_count + 1)}
          />
        );
      })}
    </div>
  );
}
