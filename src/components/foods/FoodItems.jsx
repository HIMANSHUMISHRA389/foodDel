/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import "./Food.css";
import { assets } from "../../assets/assets";
const FoodItems = ({ id, image, name, description, price, category }) => {
  const value = useContext(Context);

  return (
    <div className="food_list_container">
      <div key={id} className="food_list_div">
        <img src={image} className="food_list_image" />
        <div className="food_list_buttons_div">
          {!value.countItems[id] ? (
            <div>
              <img
                className="food_list_button"
                src={assets.add_icon_white}
                onClick={() => value.add_item(id)}
              />
            </div>
          ) : (
            <div>
              <img
                className="food_list_button"
                src={assets.add_icon_green}
                onClick={() => value.add_item(id)}
              />
              <span>{value.countItems[id]}</span>

              <img
                className="food_list_button"
                src={assets.remove_icon_red}
                onClick={() => value.remove_item(id)}
              />
            </div>
          )}
        </div>

        <div>
          <div>
            <span>{name}</span>
            <img className="food_list_stars" src={assets.rating_starts} />
          </div>
          <div>
            <span>{description}</span>
            <span>{price + " $ "}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
