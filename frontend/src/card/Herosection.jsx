import React, { useState } from "react";
import Shirt from "../homePage/herosection/image/shirt.png";
import Bag from "../homePage/herosection/image/bag.png";
import Pot from "../homePage/herosection/image/pot.png";

function Herosection() {
  const Product = [
    { id: 1, image: Shirt, price: "$78.99" },
    { id: 2, image: Bag, price: "$88.99" },
    { id: 3, image: Pot, price: "$34.99" },
  ];

  // State for each product's quantity
  const [selectedQuantities, setSelectedQuantities] = useState(
    Product.map(() => "QTY:1")
  );
  const [openDropdowns, setOpenDropdowns] = useState(Product.map(() => false));

  const handleSelect = (index, value) => {
    const newQuantities = [...selectedQuantities];
    newQuantities[index] = value;
    setSelectedQuantities(newQuantities);

    const newOpen = [...openDropdowns];
    newOpen[index] = false;
    setOpenDropdowns(newOpen);
  };

  const toggleDropdown = (index) => {
    const newOpen = [...openDropdowns];
    newOpen[index] = !newOpen[index];
    setOpenDropdowns(newOpen);
  };

  return (
    <section className="w-[1180px] mx-auto p-5">
      <h2 className="text-[24px] leading-[32px] font-semibold">
        My Cart({Product.length})
      </h2>

      <div className="flex flex row gap-3">

      <div className="w-[880px] bg-white rounded border border-[#DEE2E7] p-3 flex flex-col gap-5">
        {Product.map((item, index) => (
          <div key={item.id} className="flex justify-between p-3 border-b border-[#DEE2E7]">
            <div className="flex gap-3">
              <div className="w-[80px] h-[80px] bg-[#DEE2E7] border border-[#E0E0E0] rounded flex justify-center items-center">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover w-[52px] h-[59px]"
                />
              </div>
              <div>
                <h2 className="text-[16px] font-medium">
                  T-shirts with multiple colors, for men and lady
                </h2>
                <p className="text-[16px] text-[#8B96A5]">
                  Size: medium, Color: blue, Material: Plastic
                  <br /> Seller: Artel Market
                </p>
                <div className="mt-3">
                  <button className="text-[#FA3434] border border-[#DEE2E7] px-3 py-1 rounded mr-2">
                    Remove
                  </button>
                  <button className="text-[#0D6EFD] border border-[#DEE2E7] px-3 py-1 rounded">
                    Save for later
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-[16px] font-medium">{item.price}</p>

              <div className="relative inline-block text-left mt-2">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="px-4 py-2 border border-[#DEE2E7] w-[150px] h-[40px] text-black rounded-md flex justify-between items-center"
                >
                  {selectedQuantities[index]}
                  {/* Line-style arrow */}
                  <span
                    className={`ml-2 w-3 h-3 inline-block border-r-2 border-b-2 border-[#8B96A5] transform transition-transform duration-200 ${
                      openDropdowns[index] ? "rotate-45" : "rotate-135"
                    }`}
                  ></span>
                </button>

                {openDropdowns[index] && (
                  <div className="absolute mt-2 w-40 bg-white border border-[#8B96A5] rounded-lg shadow-lg z-10">
                    <ul className="py-2">
                      {["QTY:1", "QTY:2", "QTY:3"].map((qty) => (
                        <li
                          key={qty}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSelect(index, qty)}
                        >
                          {qty}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div 
      className=""
      >
        <div className="w-[280px] h-[110px] border border-[#E0E0E0] rounded bg-white py-3 px-2   items-center">
            <p className="text-[16px] font-weight-[400] font-inter text-[#505050]">Have a coupen?</p>
            <input type="text" className="border rounded border-[#E0E0E0] text-[16px] font-weight-[400] font-inter px-2 py-1  " placeholder="Add coupon " /> 
            <input type="button" className="border rounded border-[#E0E0E0] text-[16px] text-blue-500 font-weight-[400] font-inter px-2 py-1  " value="Apply " /> 
        </div>
        <div></div>

      </div>
      </div>
    </section>
  );
}

export default Herosection;
