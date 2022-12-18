import React, { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { CartState } from "../../context/Context";
import "./pricefilter.css";

const PriceFilter = ({}) => {
  const [expand, setExpand] = useState(false);

  const { productDispatch } = CartState();
  return (
    <>
      <div className="filter-wrapper">
        <div className="filter">
          <div className="filter-title">price</div>
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
          {expand && (
            <>
              <li
                className="filter-item"
                onClick={() =>
                  productDispatch({
                    type: `FILTER_BY_PRICE`,
                    payload: 0,
                  })
                }
              >
                ₹ 0 - ₹ 250
              </li>
              <li
                className="filter-item"
                onClick={() =>
                  productDispatch({
                    type: `FILTER_BY_PRICE`,
                    payload: 251,
                  })
                }
              >
                ₹ 251 - ₹ 450
              </li>
              <li
                className="filter-item"
                onClick={() =>
                  productDispatch({
                    type: `FILTER_BY_PRICE`,
                    payload: 450,
                  })
                }
              >
                ₹ 450+
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default PriceFilter;
