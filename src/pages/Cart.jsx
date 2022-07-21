import React from "react";
import CartList from "../components/CartList";
import Invoice from "../components/Invoice";

const Cart = () => {
  return (
    <section id="cart" className="grid grid-cols-2 mx-24 my-8">
      <CartList />
      <Invoice />
    </section>
  );
};

export default Cart;
