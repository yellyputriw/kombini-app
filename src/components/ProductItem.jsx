import React from "react";
import { productData } from "../utils/product";

const ProductItem = () => {
  return (
    <>
      {productData.map((data) => (
        <div key={data.id} className="border rounded-md shadow-lg">
          <img src={data.img} alt={data.name} />
          <div className="px-4 py-2 flex justify-between items-center">
            <div>
              <h3 className="mb-1 text-2xl font-medium">{data.name}</h3>
              <p className="mb-1 text-red-600 font-semibold">¥{data.price}</p>
            </div>
            <div>
              <button className="mb-1 px-2 py-1 bg-orange-600 text-white rounded-lg text-end">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductItem;
