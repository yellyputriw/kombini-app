import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

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
            <NavLink
              to="/cart"
              activeClassName="text-cyan-900 font-bold"
              className="relative">
              Cart
              <span className="absolute top-0 text-xs rounded-full bg-orange-400 px-1">
                {cartQuantity}
              </span>
            </NavLink>
          </li>
          <li className="mx-4">
            <Link
              to="/auth"
              className="border border-cyan-900 rounded-md py-2 px-6 hover:bg-cyan-900 hover:text-white">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
