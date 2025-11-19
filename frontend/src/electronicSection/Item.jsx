import React, { useState } from "react";
import Sidebar from "./Slider.jsx";
import ProductList from "./Productlist.jsx";

const ProductPage = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Handles toggle for brands in Sidebar
  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#F7FAFC]">
      <div className="flex flex-col md:flex-row gap-4 mx-auto w-[1180px] p-4">
        {/* Sidebar / Filters */}
        <div className="w-full md:w-1/4">
          <Sidebar
            selectedBrands={selectedBrands}
            onBrandChange={handleBrandChange}
          />
        </div>

        {/* Product List */}
        <div className="w-full md:w-3/4">
          <ProductList selectedBrands={selectedBrands} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
