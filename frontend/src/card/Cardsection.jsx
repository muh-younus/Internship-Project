import React from "react";
import Wallet from "../homePage/herosection/image/Wallet.png";
import Watch from "../homePage/herosection/image/watch.png";
import Headphone from "../homePage/herosection/image/white headphone.png";
import Jeadn from "../homePage/herosection/image/jean.png";
import Mug from "../homePage/herosection/image/mug.png";
import Appliance from "../homePage/herosection/image/appliance.jpg";

function Product() {
  const ProductList = [
    {
      img: Wallet,
      name: "Xiaomi Red 8",
      type: "Orignal",
      price: "$32.00-$40.00",
    },
    {
      img: Watch,
      name: "Xiaomi Red 8",
      type: "Orignal",
      price: "$32.00-$40.00",
    },
    {
      img: Headphone,
      name: "Xiaomi Red 8",
      type: "Orignal",
      price: "$32.00-$40.00",
    },
    {
      img: Jeadn,
      name: "Xiaomi Red 8",
      type: "Orignal",
      price: "$32.00-$40.00",
    },
    { img: Mug, name: "Xiaomi Red 8", type: "Orignal", price: "$32.00-$40.00" },
    {
      img: Appliance,
      name: "Xiaomi Red 8",
      type: "Orignal",
      price: "$32.00-$40.00",
    },
  ];
  return (
    <>
      <section className="w-[1180px] h-[350px] mx-auto mt-5 rounded mt-3  bg-white py-3 px-4">
        <h2 className="font-inter text-[20px] font-semibold leading-[-0.2px] font-weight-[600] line-height-[28px]">
          Related products
        </h2>

        <div className="flex flex-wrap gap-4 p-2">
          {ProductList.map((item, index) => (
            <div key={index} className="w-[172px] h-[254px]">
              <div className="w-[172px] h-[172px] mb-3 bg-gray-200 flex items-center justify-center rounded">
                <img
                  src={item.img}
                  alt={item.name}
                  className="object-contain w-[132px] h-[132px]"
                />
              </div>

              <div>
                <p className="text-[16px] style-regular font-weight-[400] font-inter text-[#505050]">
                  {item.name}
                  <br />
                  {item.type}
                </p>
                <p className="font-inter text-[16px] style-regular text-[#8B96A5] font-weight-[400]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Product;
