import React from "react";
import getData from "../services/getData";
import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function SearchForm({ onSearchParkings }) {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getData(keyword);
    onSearchParkings(response?.businesses);
    setKeyword("");
  };

  return (
    <div className="flex justify-center align-center mb-10 ">
      <form onSubmit={handleSubmit}>
        <h1 className="text-8xl p-8">Find the worst parking lots!</h1>
        <div className="flex border-2 rounded-md p-2 shadow-md ">
          <input
            className="outline-none w-full text-center  "
            type="text"
            placeholder="Search for parking lot"
            value={keyword}
            onChange={handleChange}
          />
          <SearchIcon
            onClick={handleSubmit}
            className="h-8 w-8 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}
