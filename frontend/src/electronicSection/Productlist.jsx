import React from "react";
import Camera from "../homePage/herosection/image/camera.png";
import Phone from "../homePage/herosection/image/phone1.png";
import Watch from "../homePage/herosection/image/watch.png";
import Headphone from "../homePage/herosection/image/white headphone.png";
import Laptop from "../homePage/herosection/image/laptop.png";
import Phone2 from "../homePage/herosection/image/phone2.png";
import Phone3 from "../homePage/herosection/image/phone3.png";
import { Heart, ChevronUp, Star } from 'lucide-react';

function Productlist({ selectedBrands }) {
  const products = [
    { id: 1, name: "Canon Camera EOS 2000, Black 10x zoom", price: 998.0, originalPrice: 1128.0, rating: 7.8, orders: 154, image: Camera, description: "Lorem ipsum...", category: "Phone", brand: "Samsung" },
    { id: 2, name: "Canon Camera EOS 2000, Black 10x zoom", price: 998.0, originalPrice: 1128.0, rating: 6.2, orders: 154, image: Phone, description: "Lorem ipsum...", category: "Phone", brand: "Huawei" },
    { id: 3, name: "Canon Camera EOS 2000, Black 10x zoom", price: 998.0, originalPrice: 1128.0, rating: 4.5, orders: 154, image: Phone2, description: "Lorem ipsum...", category: "Phone", brand: "Pocco" },
    { id: 4, name: "Canon Camera EOS 2000, Black 10x zoom", price: 998.0, originalPrice: 1128.0, rating: 8.3, orders: 154, image: Laptop, description: "Lorem ipsum...", category: "Laptop", brand: "Lenovo" },
    { id: 5, name: "Canon Camera EOS 2000, Black 10x zoom", price: 998.0, originalPrice: 1128.0, rating: 9.0, orders: 154, image: Watch, description: "Lorem ipsum...", category: "Watch", brand: "Apple" },
    { id: 6, name: "Canon Camera EOS 2000, Black 10x zoom", price: 998.0, originalPrice: 1128.0, rating: 7.0, orders: 154, image: Headphone, description: "Lorem ipsum...", category: "Headphone", brand: "Apple" },
  ];

  const filteredProducts =
    selectedBrands.length === 0
      ? products
      : products.filter((product) => {
          if (!selectedBrands.includes(product.brand)) return false;
          if (['Samsung', 'Huawei', 'Pocco'].includes(product.brand)) {
            return ['Phone', 'Laptop'].includes(product.category);
          }
          return true;
        });

  const isGridMode = selectedBrands.some(brand => ['Samsung', 'Huawei', 'Pocco'].includes(brand));

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={14}
          fill={i <= Math.round(rating / 2) ? "currentColor" : "none"}
          className={i <= Math.round(rating / 2) ? "text-orange-400" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="mx-auto">
      <div className={isGridMode ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
        {filteredProducts.map((product) =>
          isGridMode ? (
            <div key={product.id} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-shadow">
              <div className="relative aspect-square mb-4 flex items-center justify-center shadow transition-transform hover:shadow-lg hover:shadow-black hover:scale-105 rounded-lg">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="object-contain w-3/4 h-3/4 mix-blend-multiply" />
              </div>
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">{renderStars(product.rating)}</div>
                  </div>
                  <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-blue-500 transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
                <h3 className="text-gray-600 text-sm leading-relaxed line-clamp-2 font-medium">{product.name}</h3>
              </div>
            </div>
          ) : (
            <div key={product.id} className="flex gap-4 p-4 w-full bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-48 h-48 object-contain p-2 rounded-xl transition-all duration-500 ease-out transform hover:scale-105" />
              </div>
              <div className="flex-grow py-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-base text-gray-900 pr-4">{product.name}</h3>
                  <button className="text-blue-500 hover:text-blue-600 flex-shrink-0 w-8 h-8 p-1 rounded-full hover:bg-blue-50 transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>}
                </div>
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <div className="flex items-center gap-1">{renderStars(product.rating)}</div>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{product.orders} orders</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-green-600 font-medium">Free Shipping</span>
                </div>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline">View details</button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Productlist;
