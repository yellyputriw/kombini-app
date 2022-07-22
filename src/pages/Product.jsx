import React from "react";
import ProductItem from "../components/ProductItem";
import { productData } from "../utils/product";

const Product = () => {
  return (
    <section id="product" className="mx-24 my-8">
      <div className="grid grid-cols-4 gap-6">
        {productData.map((data) => (
          <ProductItem
            id={data.id}
            key={data.id}
            img={data.img}
            name={data.name}
            price={data.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
