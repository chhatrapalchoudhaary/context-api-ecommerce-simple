import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { CartState } from "../../context/Context";
import "./search.css";

const Search = () => {
  const { productDispatch } = CartState();
  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search"
        onChange={(e) => {
          productDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          });
        }}
      />
      <BiSearchAlt style={{ color: "gray", fontSize: 16 }} />
    </div>
  );
};

export default Search;
