import React from "react";
import ProductItem from "../components/ProductItem";

const Product = () => {
  return (
    <section id="product" className="mx-24 my-8">
      <div className="grid grid-cols-4 gap-6">
        <ProductItem />
      </div>
    </section>
  );
};

export default Product;
