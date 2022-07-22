import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="py-3">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={Math.random()}
            item={{
              id: item.id,
              img: item.img,
              name: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartList;
