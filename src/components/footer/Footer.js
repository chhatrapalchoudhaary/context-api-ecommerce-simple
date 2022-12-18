import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { AiFillHome, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo">TREE REX STORE</h1>
        <div className="footer-description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </div>
        <div className="social-container">
          <div className="social-icon">
            <BsFacebook />
          </div>
          <div className="social-icon">
            <BsInstagram />
          </div>
          <div className="social-icon">
            <BsTwitter />
          </div>
          <div className="social-icon">
            <BsPinterest />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <h3 className="footer-title">Useful Links</h3>
        <ul className="footer-center-list">
          <li className="footer-center-listItem">Home</li>
          <li className="footer-center-listItem">Cart</li>
          <li className="footer-center-listItem">Man Fashion</li>
          <li className="footer-center-listItem">Woman Fashion</li>
          <li className="footer-center-listItem">Accessories</li>
          <li className="footer-center-listItem">My Account</li>
          <li className="footer-center-listItem">Order Tracking</li>
          <li className="footer-center-listItem">Wishlist</li>
          <li className="footer-center-listItem">Wishlist</li>
          <li className="footer-center-listItem">Terms</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3 className="footer-title">Contact</h3>
        <div className="contact-item">
          <AiFillHome style={{ marginRight: "10px" }} /> Chhatrapal's Home
          Internet 3420012
        </div>
        <div className="contact-item">
          <AiFillPhone style={{ marginRight: "10px" }} /> +91 000 000 0000
        </div>
        <div className="contact-item">
          <AiOutlineMail style={{ marginRight: "10px" }} /> contact@.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
