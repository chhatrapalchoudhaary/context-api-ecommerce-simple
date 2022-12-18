import React, { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import FilterList from "../filterlist/FilterList";
import "./filteritem.css";

const FilterItem = ({ type, list }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="filter-wrapper">
      <div className="filter">
        <div className="filter-title">{type}</div>
        <MdExpandMore
          style={{ display: expand ? "none" : "block" }}
          onClick={() => setExpand(true)}
        />
        <MdExpandLess
          style={{ display: expand ? "block" : "none" }}
          onClick={() => setExpand(false)}
        />
      </div>
      <ul className="filter-expanded">
        {expand && <FilterList filter={list[type]} type={type} />}
      </ul>
    </div>
  );
};

export default FilterItem;
