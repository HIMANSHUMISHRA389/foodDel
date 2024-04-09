/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import "./Food.css";
import { assets } from "../../assets/assets";
import FoodItems from "./FoodItems";
import Footer from "../footer/Footer";
const Food = ({ category }) => {
  const value = useContext(Context);
console.log(category)
const array = !category ||category==null
  ? value.food_list
  : value.food_list.filter((elm) => elm.category == category);
console.log(array)
console.log(value.food_list)
  return (
    <div className="food_list_main">
      <h2>Food Items Near You</h2>
      <div className="food_list_container">
        {array.map((elm, i) => {
          return (
            <FoodItems
              key={i}
              id={elm._id}
              image={elm.image}
              name={elm.name}
              description={elm.description}
              price={elm.price}
              category={elm.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Food;
