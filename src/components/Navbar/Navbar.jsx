import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(false);
console.log(active)
  return (
    <div className="mainNavbar">
      <div className="navbar_logo">
        <img src={assets.logo} />
      </div>
      <div className="navbar_links">
        <ul>
          <li
            onClick={() => setActive("home")}
            className={active == "home" ? "active" : ""}
          >
            home
          </li>
          <li
            onClick={() => setActive("menu")}
            className={active == "menu" ? "active" : ""}
          >
            Menu
          </li>
          <li
            onClick={() => setActive("contacts")}
            className={active == "contacts" ? "active" : ""}
          >
            contacts
          </li>
          <li
            onClick={() => setActive("orders")}
            className={active == "orders" ? "active" : ""}
          >
            orders
          </li>
        </ul>
      </div>
      <div className="navbar_icons">
        <div>
          <img src={assets.search_icon} />
          <img src={assets.basket_icon} />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
