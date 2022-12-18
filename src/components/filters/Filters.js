import React, { useEffect, useState } from "react";
import FilterItem from "../../common/filteritem/FilterItem";
import PriceFilter from "../../common/pricefilter/PriceFilter";
import { CartState } from "../../context/Context";
import "./filters.css";

const Filters = ({ data, setSideBarFilterValue }) => {
  const [filterList, setFilterList] = useState({});
  const { productDispatch } = CartState();
  useEffect(() => {
    createFilterList({ data });
  }, [data]);

  const sendFilterData = (filter, typeVal) => {
    setSideBarFilterValue(filter, typeVal);
  };

  const createFilterList = ({ data }) => {
    let setData = { color: [], gender: [], price: [], type: [] };
    data &&
      data.map((item) => {
        return Object.keys(item).map((key) => {
          if (
            key === "color" ||
            key === "price" ||
            key === "gender" ||
            key === "type"
          ) {
            return (setData = {
              ...setData,
              [key]: [...setData[key], item[key]],
            });
          }
        });
      });
    setFilterList(setData);
  };

  return (
    <>
      <button
        className="clear-button"
        onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
      >
        Clear All Filters
      </button>
      <h3 className="filters-title">FILTERS</h3>
      <div className="filter-container">
        <FilterItem
          list={filterList}
          type="color"
          sendFilterData={sendFilterData}
        />
        <FilterItem
          list={filterList}
          type="type"
          sendFilterData={sendFilterData}
        />
        <FilterItem
          list={filterList}
          type="gender"
          sendFilterData={sendFilterData}
        />
        <PriceFilter sendFilterData={sendFilterData} />
      </div>
    </>
  );
};

export default Filters;
