import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../redux/cart-slice";

const ProductItem = ({ id, name, price, img }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartAction.addToCart({
        id,
        name,
        price,
        img,
      })
    );
  };

  return (
    <div key={id} className="border rounded-md shadow-lg">
      <img src={img} alt={name} />
      <div className="px-4 py-2 flex justify-between items-center">
        <div>
          <h3 className="mb-1 text-2xl font-medium">{name}</h3>
          <p className="mb-1 text-red-600 font-semibold">¥{price}</p>
        </div>
        <div>
          <button
            onClick={addToCartHandler}
            className="mb-1 px-2 py-1 bg-orange-600 text-white rounded-lg text-end">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
