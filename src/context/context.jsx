/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";
const Context = createContext(null);
console.log(food_list)
const MyContext = ({ children }) => {
  const [countItems, setCount] = useState({});
console.log(countItems)
  const add_item = (id) => {
    if (!countItems[id]) {
      setCount((prev)=>({...prev, [id]: 1 }));
    } else {
        setCount((prev) => ({ ...prev, [id]: prev[id]+1 }));
    }
  };

  const remove_item=(id)=>{
setCount((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  }

  const value = {
    food_list,
    add_item,
    countItems,
    remove_item
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { MyContext, Context };
