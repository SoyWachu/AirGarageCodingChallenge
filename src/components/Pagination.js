import React from "react";

export default function Pagination({
  parkingsPerPage,
  totalParkings,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalParkings / parkingsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="flex justify-center align-center pt-4 ">
        {pageNumbers === 0
          ? null
          : pageNumbers.map((number) => {
              return (
                <button
                  onClick={() => paginate(number)}
                  className="bg-gray-400 p-4 m-1 focus-none"
                  key={number}
                >
                  {number}
                </button>
              );
            })}
      </ul>
    </div>
  );
}
