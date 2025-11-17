import React from "react";
import Arab from "./image/Arab.png";
import France from "./image/France.png";
import Italy from "./image/Italy.png";
import Russia from "./image/Russia.png";
import Denmark from "./image/Denmark.png";
import China from "./image/China.png";
import UK from "./image/UK.png";
import America from "./image/America.png";
import Australia from "./image/Australia.png";

function Flagsection() {
  const suppliers = [
    { flag: Arab, country: "Arabic Emirates", url: "shopname.ae" },
    { flag: Australia, country: "Australia", url: "shopname.au" },
    { flag: America, country: "United States", url: "shopname.us" },
    { flag: Russia, country: "Russia", url: "shopname.ru" },
    { flag: Italy, country: "Italy", url: "shopname.it" },
    { flag: Denmark, country: "Denmark", url: "denmark.com.dk" },
    { flag: France, country: "France", url: "shopname.com.fr" },
    { flag: Arab, country: "Arabic Emirates", url: "shopname.ae" },
    { flag: China, country: "China", url: "shopname.cn" },
    { flag: UK, country: "Great Britain", url: "shopname.co.uk" },
  ];

  return (
    <section className="w-[1180px] mx-auto mt-8">
      <h2 className="text-[24px] font-semibold mb-5">Suppliers by region</h2>

      <div className="grid grid-cols-5 gap-y-6">
        {suppliers.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <img src={item.flag} alt={item.country} className="w-[28px] h-[20px]" />
            <div className="h-[36px] line-height-[8px]">
              <p className="text-[16px] font-inter leading-[-0.2px] line-height-[24px]">{item.country}</p>
              <p className="text-gray-500 text-[13px]">{item.url}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Flagsection;
