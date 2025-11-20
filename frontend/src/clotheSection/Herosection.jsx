import React from "react";
import ShirtImage from "../homePage/herosection/image/shirt.png";
import {FaStar} from 'react-icons/fa'

function Herosection() {

    const list =[]
    for(let i=0;i<5;i++){
        list.push(<FaStar/>)
    }   
  return (
    <section className="w-[1180px]  h-[580px] bg-white mx-auto  flex flex-row gap-2 p-3  rounded ">
      <div className="w-[380px] h-[514px]   mx-auto mx-auto ">
        <div className="w-[380px] h-[380px] border border-[#E6E6E6]">
          <img
            src={ShirtImage}
            alt="Shirt Image"
            classname="w-[380px] h-[380px] object-cover"
          />
        </div>

        <div className="flex flex-row gap-2 mt-3">
          <div className="w-[56px] h-[62px] border border-gray-200 ">
            {" "}
            <img
              src={ShirtImage}
              className="object-cover min-h-[56px]"
              alt="image"
            />
          </div>
          <div className="w-[56px] h-[62px] border border-gray-200 ">
            {" "}
            <img
              src={ShirtImage}
              className="object-cover min-h-[56px]"
              alt="image"
            />
          </div>
          <div className="w-[56px] h-[62px] border border-gray-200 ">
            {" "}
            <img
              src={ShirtImage}
              className="object-cover min-h-[56px]"
              alt="image"
            />
          </div>
          <div className="w-[56px] h-[62px] border border-gray-200 ">
            {" "}
            <img
              src={ShirtImage}
              className="object-cover min-h-[56px]"
              alt="image"
            />
          </div>
          <div className="w-[56px] h-[62px] border border-gray-200 ">
            {" "}
            <img
              src={ShirtImage}
              className="object-cover min-h-[56px]"
              alt="image"
            />
          </div>
          <div className="w-[56px] h-[62px] border border-gray-200 ">
            {" "}
            <img
              src={ShirtImage}
              className="object-cover min-h-[56px]"
              alt="image"
            />
          </div>
        </div>
      </div>

      <div className="w-[430px] h-[514px]  border border-[#E6E6E6] mx-auto">
        <p className="text-green-600 text-[16px] leading-[-0.2px]">
          &#10003; stock
        </p>
        <h2 className="text-bold text-[20px] font-weight-[600] line-height-[20px] font-inter">
          Mens Long Sleeve T-shirt Cotton Base
          <br /> Layer Slim Muscle
        </h2>

        <div>

             <ul>
      <li>{list}</li>
    </ul>

        </div>
      </div>
      <div className="w-[280px] h-[325px] border border-[#E6E6E6] mx-auto"></div>
    </section>
  );
}

export default Herosection;
