import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import { useState } from 'react';
import { ChevronUp } from 'lucide-react';


function Slider() {

     const [isOpen, setIsOpen] = useState(true);
  const [checked, setChecked] = useState({});

  const ratings = [
    { stars: 5, count: '★★★★★' },
    { stars: 4, count: '★★★★☆' },
    { stars: 3, count: '★★★☆☆' },
    { stars: 2, count: '★★☆☆☆' },
  ];

  const handleCheck = (index) => {
    setChecked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <>
      <section className="w-[240px] h-[1448px]  flex flex-col gap-4 py-2 ml-1">
        <div>
            <div className="flex flex-row justify-between mb-2">
          <h2 className="text-[16px]  text-[#1C1C1C] font-semibold">Category</h2>
          <i><FiChevronUp className="text-[16px] "/></i>
          </div>
          <ul
          className="flex flex-col gap-2 text-[#505050]"
          >
            <li>Mobile accessory</li>
            <li>Electronic</li>
            <li>Smartphone</li>
            <li>Modern tech</li>
            <li><a href="" className="text-blue-600">See all</a></li>
           
          </ul>
        </div>
         <div className="w-full h-[1px] bg-gray-300"></div>


         <div>
      {/* Header with arrow */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[16px]">Brands</h2>
        <FiChevronUp className="text-gray-500 text-[18px]" />
      </div>

      {/* List */}
      <ul className="mt-3 space-y-3 text-[14px] text-gray-700">

        <li className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>Samsung</span>
        </li>

        <li className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>Apple</span>
        </li>

        <li className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>Huawei</span>
        </li>

        <li className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>Pocco</span>
        </li>

        <li className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>Lenovo</span>
        </li>

      </ul>

      {/* See All */}
      <p className="text-blue-500 text-[14px] mt-3 cursor-pointer hover:underline">
        See all
      </p>
      <div className="w-full h-[2px] bg-gray-300"></div>

    </div>

     <div>
      {/* Header with arrow */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[16px]">Feature</h2>
        <FiChevronUp className="text-gray-500 text-[18px]" />
      </div>

      {/* List */}
      <ul className="mt-3 space-y-3 text-[14px] text-gray-700">

        <li className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>Metallic</span>
        </li>

        <li className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>Plastic Cover</span>
        </li>

        <li className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>*GB Ram</span>
        </li>

        <li className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>Super Power</span>
        </li>

        <li className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>Large Memory</span>
        </li>

      </ul>

      {/* See All */}
      <p className="text-blue-500 text-[14px] mt-3 cursor-pointer hover:underline">
        See all
      </p>
      <div className="w-full h-[1px] bg-gray-300"></div>

    </div>

    
    <div className="mt-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[16px]">Price range</h2>
        <FiChevronUp className="text-gray-500 text-[18px]" />
      </div>

      {/* Slider */}
      <div className="mt-3">
        <input
          type="range"
          className="w-full accent-blue-500"
          min="0"
          max="1000000"
        />
        
      </div>

      {/* Min & Max Inputs */}
      <div className="flex justify-between mt-4">
        <div className="flex flex-col">
          <label className="text-[13px] text-gray-600">Min</label>
          <input
            type="text"
            className="w-[110px] h-[40px] border rounded-md px-2 text-sm text-gray-700 focus:outline-blue-500"
            placeholder="0"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[13px] text-gray-600">Max</label>
          <input
            type="text"
            className="w-[110px] h-[40px] border rounded-md px-2 text-sm text-gray-700 focus:outline-blue-500"
            placeholder="999999"
          />
        </div>
      </div>

      {/* Apply Button */}
      <button className="mt-4 w-[228px] h-[40px]  text-blue-600 bg-white py-2 rounded-md hover:bg-gray-300 hover:text-white transition">
        Apply
      </button>
    </div>
     <main className="flex  items-center justify-center ">
      <div className=" ">
        {/* Header */}
        <div
          className="mb-4 flex cursor-pointer items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold text-gray-800">Ratings</h3>
          <svg
            className={`h-5 w-5 transform transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

        {/* Ratings List */}
        {isOpen && (
          <ul className="space-y-3">
            {ratings.map((rating, index) => (
              <li key={index} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={checked[index] || false}
                  onChange={() => handleCheck(index)}
                  className="h-4 w-4 cursor-pointer"
                />
                <span className="text-lg text-amber-400">{rating.count}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
      </section>
    </>
  );
}

export default Slider;
