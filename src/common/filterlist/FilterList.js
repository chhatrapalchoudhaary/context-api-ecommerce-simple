import React from "react";
import { CartState } from "../../context/Context";
import "./filterlist.css";

const FilterList = ({ filter, type }) => {
  const types = [...new Set(filter)];
  const { productDispatch } = CartState();
  return (
    <>
      {types &&
        types.map((item) => {
          return (
            <li
              className="filter-item"
              key={item}
              onClick={() =>
                productDispatch({
                  type: `FILTER_BY_${type.toUpperCase()}`,
                  payload: item,
                })
              }
            >
              {item}
            </li>
          );
        })}
    </>
  );
};

export default FilterList;
