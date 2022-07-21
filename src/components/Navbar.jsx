import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full h-20 shadow-md flex justify-between items-center px-36">
      <div>
        <h1 className="text-3xl m-0">Kombini App</h1>
      </div>
      <nav>
        <ul className="flex items-center">
          <li className="mx-4">
            <NavLink to="/home" activeClassName="text-cyan-900 font-bold">
              Home
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink to="/product" activeClassName="text-cyan-900 font-bold">
              Product
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink to="/cart" activeClassName="text-cyan-900 font-bold">
              Cart
            </NavLink>
          </li>
          <li className="mx-4">
            <button className="border border-cyan-900 rounded-md py-2 px-6 hover:bg-cyan-900 hover:text-white">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
