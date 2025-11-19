import React, { useState } from "react";
import { ChevronUp } from 'lucide-react';

function Slider({ selectedBrands, onBrandChange }) {
  const [isOpenRatings, setIsOpenRatings] = useState(true);
  const [isCondition, setisCondition] = useState(true);
  const [isPrice, setisPrice] = useState(true);
  const [isFeature , setisFeature] = useState(true);
  const [isBrand, setisBrand] = useState(true);
  const [isCategory, setisCategory] = useState(true);
  const [checkedRatings, setCheckedRatings] = useState({});

  const ratings = [
    { stars: 5, count: "★★★★★" },
    { stars: 4, count: "★★★★☆" },
    { stars: 3, count: "★★★☆☆" },
    { stars: 2, count: "★★☆☆☆" },
  ];

  const handleRatingCheck = (index) => {
    setCheckedRatings(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="w-[240px] flex flex-col gap-6 py-2 ml-1  p-4 rounded-lg">
      
      {/* Category Section */}
      <div>
        <div className="flex justify-between mb-2 cursor-pointer"
        onClick={()=> setisCategory(!isCategory)}
        >
          <h2 className="text-[16px] text-[#1C1C1C] font-semibold">Category</h2>
          <ChevronUp className={`text-[16px] text-gray-500 transition-transform ${isCategory ? "rotate-180": " "  }`} />
        </div>
        {isCategory &&(
        <ul className="flex flex-col gap-2 text-[#505050]">
          <li>Mobile accessory</li>
          <li>Electronic</li>
          <li>Smartphone</li>
          <li>Modern tech</li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">See all</a>
          </li>
        </ul>
        )}
      </div>
      
      
      <div className="w-full h-[1px] bg-gray-300"></div>

      {/* Brands Section */}
      <div>
        <div className="flex justify-between items-center cursor-pointer"
        onClick={()=> setisBrand(!isBrand)}
        >
          <h2 className="font-semibold text-[16px]">Brands</h2>
          <ChevronUp className={`text-gray-500 text-[18px] transition-transform ${isBrand ? "rotate-180": " "}`} />
        </div>

        {isBrand && (
          <>
        <ul className="mt-3 space-y-3 text-[14px] text-gray-700">
          {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map(brand => (
            <li key={brand} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
                checked={selectedBrands.includes(brand)}
                onChange={() => onBrandChange(brand)}
              />
              <span className="cursor-pointer" onClick={() => onBrandChange(brand)}>
                {brand}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-blue-500 text-[14px] mt-3 cursor-pointer hover:underline">See all</p>
        </>
        )}
        <div className="w-full h-[2px] bg-gray-300 my-2"></div>
      </div>

      {/* Feature Section */}
      <div>
        <div className="flex justify-between items-center cursor-pointer"
        onClick={()=> setisFeature(!isFeature)}
        >
          <h2 className="font-semibold text-[16px]">Feature</h2>
          <ChevronUp className={`text-gray-500 text-[18px] transition-transform ${isFeature ? "rotate-180": " "}`} />
        </div>
        {isFeature &&(
          <>
        <ul className="mt-3 space-y-3 text-[14px] text-gray-700">
          {["Metallic", "Plastic Cover", "8GB Ram", "Super Power", "Large Memory"].map(feature => (
            <li key={feature} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p className="text-blue-500 text-[14px] mt-3 cursor-pointer hover:underline">See all</p>
        </>
        )}
        <div className="w-full h-[1px] bg-gray-300 my-2"></div>
      </div>

      {/* Price Range Section */}
      <div>
        <div className="flex justify-between items-center cursor-pointer"
        onClick={()=> setisPrice(!isPrice)}
        >
          <h2 className="font-semibold text-[16px]">Price range</h2>
          <ChevronUp className={`text-gray-500 text-[18px] transition-transform ${isPrice ? "rotate-180":" "}`} />
        </div>
        {isPrice && (
          <>
        
        <input type="range" className="w-full accent-blue-500 mt-3" min="0" max="1000000" />
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            <label className="text-[13px] text-gray-600">Min</label>
            <input type="text" className="w-[110px] h-[40px] border rounded-md px-2 text-sm focus:outline-blue-500" placeholder="0" />
          </div>
          <div className="flex flex-col">
            <label className="text-[13px] text-gray-600">Max</label>
            <input type="text" className="w-[110px] h-[40px] border rounded-md px-2 text-sm focus:outline-blue-500" placeholder="999999" />
          </div>
        </div>
        <button className="mt-4 w-full h-[40px] text-blue-600 bg-white py-2 rounded-md hover:bg-gray-300 hover:text-white transition border border-gray-200">
          Apply
        </button>
        </>

        )}
        <div className="w-full h-[1px] bg-gray-300 my-2"></div>
      </div>

      
     {/* Condition Section */}
<div>
  <div
    className="flex justify-between items-center cursor-pointer"
    onClick={() => setisCondition(!isCondition)}
  >
    <h2 className="font-semibold text-[16px]">Condition</h2>
    <ChevronUp
      className={`text-gray-500 transition-transform ${
        isCondition ? "rotate-180" : ""
      }`}
    />
  </div>

  {isCondition && (
    <>
      {["Any", "Refurbished", "Brand New", "Grid items"].map((condition) => (
        <div key={condition} className="flex items-center gap-2 mt-3">
          <input
            type="radio"
            name="condition"
            className="w-4 h-4 border border-black rounded-full"
          />
          <span>{condition}</span>
        </div>
      ))}

      <div className="mt-3">
        <p className="text-blue-500 text-[14px] cursor-pointer hover:underline">
          See All
        </p>
      </div>
    </>
  )}

  <div className="w-full h-[1px] bg-gray-300 my-2"></div>
</div>


      {/* Ratings Section */}
      <div className="mt-4">
        <div
          className="mb-4 flex cursor-pointer items-center justify-between"
          onClick={() => setIsOpenRatings(!isOpenRatings)}
        >
          <h3 className="text-lg font-semibold text-gray-800">Ratings</h3>
          <ChevronUp
            className={`text-gray-500 transition-transform ${isOpenRatings ? "rotate-180" : ""}`}
          />
        </div>
        {isOpenRatings && (
          <ul className="space-y-3">
            {ratings.map((rating, index) => (
              <li key={index} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={checkedRatings[index] || false}
                  onChange={() => handleRatingCheck(index)}
                  className="h-4 w-4 cursor-pointer"
                />
                <span className="text-lg text-amber-400">{rating.count}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

    </section>
  );
}

export default Slider;
