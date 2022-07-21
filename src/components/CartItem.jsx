import React from "react";

const CartItem = () => {
  return (
    <li className="flex justify-between mb-4 ">
      <div className="flex">
        <img
          src="/img/karaage.jpg"
          alt="nama product"
          width={78}
          className="mr-3"
        />
        <div className="flex flex-col justify-between">
          <h3 className="text-lg">Nama product</h3>
          <p>50</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <button className="bg-gray-300 rounded-sm px-4 mx-2">+</button>
        <p>2</p>
        <button className="bg-gray-300 rounded-sm px-4 mx-2">-</button>
      </div>
    </li>
  );
};

export default CartItem;
