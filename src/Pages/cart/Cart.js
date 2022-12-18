import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { CartState } from "../../context/Context";
import "./cart.css";

const Cart = () => {
  const {
    state: { cart, products },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [cart]);

  return (
    <>
      <Announcement />
      <Navbar displaySearchBar={false} />
      <div className="cart-container">
        <div className="cart-wrapper">
          <h1 className="cart-title">YOUR CART</h1>
          <div className="cart-top">
            <Link to="/products" className="link-decoration">
              <button className="top-button">CONTINUE SHOPPING</button>
            </Link>
            <div className="top-texts">
              <h3 className="top-text">Shopping Bag({cart.length})</h3>
            </div>
            <button className="top-button">CHECKOUT NOW</button>
          </div>
          <div className="cart-bottom">
            <div className="cart-info">
              {cart &&
                cart.length > 0 &&
                cart.map((item) => {
                  return (
                    <div className="cart-product" key={item.id}>
                      <div className="cart-product-detail">
                        <img
                          className="cart-image"
                          src={item.imageURL}
                          alt={item.name}
                        />
                        <div className="cart-details">
                          <span className="cart-product-name">
                            <b>Product:</b> {item.name}
                          </span>
                          <span className="cart-product-id">
                            <b>ID:</b> {item.id}
                          </span>
                          <div
                            className="cart-product-color"
                            style={{ color: `${item.color}` }}
                          >
                            {item.color}
                          </div>
                          <span className="cart-product-size">
                            <b>Type:</b> {item.type}
                          </span>
                        </div>
                      </div>
                      <div className="price-details">
                        <div className="product-amout-container">
                          <AiOutlinePlus
                            onClick={() => {
                              if (
                                item.quantity < products[item.id + 1].quantity
                              ) {
                                setError("");
                                dispatch({
                                  type: "ADD_CART_QTY",
                                  payload: {
                                    id: item.id,
                                    quantity: 1,
                                  },
                                });
                              } else {
                                setError("No More Quantitiy Available");
                              }
                            }}
                          />
                          {item.quantity}
                          <AiOutlineMinus
                            onClick={() => {
                              setError("");
                              dispatch({
                                type: "REMOVE_FROM_CART_QTY",
                                payload: {
                                  id: item.id,
                                  quantity: 1,
                                },
                              });
                            }}
                          />
                        </div>
                        <div className="product-price">
                          ₹{item.price * item.quantity}
                        </div>
                        <p className="error-text">{error}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="summary">
              <h1 className="summary-title">ORDER SUMMARY</h1>
              <div className="summary-item">
                <h3 className="summary-text">Subtotal</h3>
                <p className="summary-price">₹{total}</p>
              </div>
              <div className="summary-item">
                <h3 className="summary-text">Total</h3>
                <p className="summary-price">₹{total}</p>
              </div>
              <button className="cart-bottom-button">CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
