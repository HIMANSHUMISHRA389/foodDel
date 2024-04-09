/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import Order from "./pages/orders/Order";

const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orders" element={<Order/>} />
      </Routes> 
    </Router> 
  );
};

export default App;
