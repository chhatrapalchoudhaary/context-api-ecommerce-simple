import React from "react";
import { CartState } from "../../context/Context";
import "./product.css";

const Product = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="product">
      <img className="product-image" src={item.imageURL} alt={item.name} />
      <h3 className="product-title">{item.name}</h3>
      <div className="price-action-wrapper">
        <div className="price-container">
          <p className="price">₹{item.price}</p>
        </div>
        {cart.some((p) => p.id === item.id) ? (
          <button
            className="out-of-stock"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item,
              })
            }
          >
            Remove
          </button>
        ) : (
          <button
            className="purchase-button"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: item,
              });
            }}
            disabled={item.quantity === 0}
          >
            {!item.quantity ? "Out of Stock" : "Add to Cart"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
