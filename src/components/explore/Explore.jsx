/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Explore.css";
import { menu_list } from "../../assets/assets";
const Explore = ({setcat}) => {
  

  
  const [state, setState] = useState("menu_image");
  const call=(i,menu_name)=>{
    setState(i)
    setcat(menu_name)
  }
  return (
    <div className="menu_list_container">
      <div>
        <h1>Explore Our Menu</h1>
        <p>
          lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
          velit id orci pharetra suscipit. Sed scelerisque leo ac eros cursus
          consectetur.
        </p>
      </div>
      <div className="menu_list_items">
        {menu_list.map((elm, i) => (
          <div key={i}>
            <img
              src={elm.menu_image}
              className={state == i ? "active" : ""}
              onClick={() => call(i,elm.menu_name)}
            />

            <p className="menu_name">{elm.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
