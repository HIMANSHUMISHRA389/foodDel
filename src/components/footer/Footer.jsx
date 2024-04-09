/* eslint-disable no-unused-vars */
import React from "react";
import FoodItems from "../foods/FoodItems";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer_main_div">
      <div className="footer_left">
        <div>
          <img src={assets.logo} className="footer_logo"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            ultrices leo. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices .
          </p>
          <div>
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
      </div>
      <div className="footer_middle">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className="footer_right">
        <h2>GET IN TOUCH</h2>
        <p>+1-212-456-7890</p>
        <p>contact@tomato.com</p>
      </div>
    </div>
  );
};

export default Footer;
