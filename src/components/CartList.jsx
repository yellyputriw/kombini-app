import React from "react";
import CartItem from "./CartItem";

const CartList = () => {
  return (
    <div className="py-3">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <ul>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
    </div>
  );
};

export default CartList;
