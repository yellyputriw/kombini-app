import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../redux/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, name, quantity, total, price, img } = props.item;

  const addItemHandler = () => {
    dispatch(
      cartAction.addToCart({
        id,
        name,
        price,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(
      cartAction.removeFromCart({
        id,
        price,
      })
    );
  };

  return (
    <li className="flex justify-between mb-4 ">
      <div className="flex">
        <img src={img} alt="nama product" width={78} className="mr-3" />
        <div className="flex flex-col justify-between">
          <h3 className="text-lg">{name}</h3>
          <p>{price}</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <button
          onClick={removeItemHandler}
          className="bg-gray-300 rounded-sm px-4 mx-2">
          -
        </button>
        <p>{quantity}</p>
        <button
          onClick={addItemHandler}
          className="bg-gray-300 rounded-sm px-4 mx-2">
          +
        </button>
        <p>{total}</p>
      </div>
    </li>
  );
};

export default CartItem;
