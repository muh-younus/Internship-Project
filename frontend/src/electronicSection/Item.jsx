import React from "react";
import Sidebar from "./Slider.jsx";
import ProductList from "./Productlist.jsx";

const ProductPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#F7FAFC]">   {/* FULL BODY COLOR HERE */}
      <div className="flex gap-4 mx-auto w-[1180px] p-4">
        <Sidebar className="w-1/4" />
        <ProductList className="w-3/4" />

      </div>
    </div>
  );
};

export default ProductPage;
