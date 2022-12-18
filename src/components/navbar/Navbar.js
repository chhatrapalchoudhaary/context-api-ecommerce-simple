import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";
import "./navbar.css";

const Navbar = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left"></div>
        <div className="navbar-center">
          <Link to="/" className="link-decoration">
            <h1 className="logo">TREE REX</h1>
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/products" className="link-decoration">
            <span className="menu-item">Products</span>
          </Link>

          <div className="shopping-cart">
            <Link to="/cart" className="link-decoration">
              <HiOutlineShoppingCart style={{ fontSize: "24px" }} />
            </Link>

            <div className="navbar-badge">
              <span>{cart.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
