import React from "react";
import ParkingList from "./ParkingList";
import Pagination from "./Pagination";
import SearchForm from "./SearchForm";
import { useState } from "react";

export default function ParkingSearch() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [parkingsPerPage] = useState(16);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastParking = currentPage * parkingsPerPage;
  const indexOfFirstParking = indexOfLastParking - parkingsPerPage;
  const currentParkings = data.slice(indexOfFirstParking, indexOfLastParking);

  return (
    <div>
      <SearchForm onSearchParkings={(parkings) => setData(parkings)} />
      <ParkingList data={currentParkings} />
      <Pagination
        parkingsPerPage={parkingsPerPage}
        totalParkings={data.length}
        paginate={paginate}
      />
    </div>
  );
}
