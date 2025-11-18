import React from "react";
import Camera from "../homePage/herosection/image/camera.png";
import Phone from "../homePage/herosection/image/phone1.png";
import Watch from "../homePage/herosection/image/watch.png";
import Headphone from "../homePage/herosection/image/white headphone.png";
import Laptop from "../homePage/herosection/image/laptop.png";
import Phone2 from "../homePage/herosection/image/phone2.png";
import Phone3 from "../homePage/herosection/image/phone3.png";
import { Heart } from "lucide-react";
import { ChevronUp } from 'lucide-react';



function Productlist() {
  const products = [
    {
      id: 1,
      name: "Canon Camera EOS 2000, Black 10x zoom",
      price: 998.0,
      originalPrice: 1128.0,
      rating: 7.8,
      orders: 154,
      image: Phone,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      name: "Canon Camera EOS 2000, Black 10x zoom",
      price: 998.0,
      originalPrice: 1128.0,
      rating: 7.8,
      orders: 154,
      image: Phone2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      name: "Canon Camera EOS 2000, Black 10x zoom",
      price: 998.0,
      originalPrice: 1128.0,
      rating: 7.8,
      orders: 154,
      image: Phone3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      name: "Canon Camera EOS 2000, Black 10x zoom",
      price: 998.0,
      originalPrice: 1128.0,
      rating: 7.8,
      orders: 154,
      image: Laptop,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      name: "Canon Camera EOS 2000, Black 10x zoom",
      price: 998.0,
      originalPrice: 1128.0,
      rating: 7.8,
      orders: 154,
      image: Watch,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      name: "Canon Camera EOS 2000, Black 10x zoom",
      price: 998.0,
      originalPrice: 1128.0,
      rating: 7.8,
      orders: 154,
      image:Headphone,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <div className=" mx-auto  ">
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex gap-4 p-4 w-[920px] h-[230px] bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div className="flex-shrink-0">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-xl transition-all duration-500 ease-out transform hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:brightness-110 hover:-translate-y-1"
                />
              </div>

              {/* Product Details */}
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-sm text-gray-900 pr-4">
                    {product.name}
                  </h3>
                  <button className="text-red-500 hover:text-red-600 flex-shrink-0 w-8 h-8 shadow-md p-2">
                    <Heart size={20} />
                  </button>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Rating & Orders & Shipping */}
                <div className="flex items-center gap-3 mb-2 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-700">{product.rating}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{product.orders} orders</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-green-600 font-semibold">
                    Free Shipping
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {product.description}
                </p>

                {/* View Details Link */}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                >
                  View details
                </a>
              </div>
            </div>
          ))}


        </div>
        <div className="flex flex-row gap-4 align-center justify-end my-10">

            <div
            className="w-[94px]   flex flex-row justify-center   items-center  bg-white"
            >
                <p className="text-[16px] mr-2">Show 10</p>
                <span><ChevronUp size={20} /></span>
            </div>
            <div>
              <span className="text-[16px] border-[0.3px] border-gray-200  bg-white px-3">&lt;</span>
              <span className="text-[16px] border-[0.3px] border-gray-200  bg-gray-300 px-3">1</span>
              <span className="text-[16px] border-[0.3px] border-gray-200  bg-white px-3">2</span>
              <span className="text-[16px] border-[0.3px] border-gray-200  bg-white px-3">3</span>
              <span className="text-[16px] border-[0.3px] border-gray-200  bg-white px-3">&gt;</span>
            </div>
        </div>
      </div>
    </>
  );
}

export default Productlist;
