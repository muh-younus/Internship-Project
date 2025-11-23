import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Image from "../homePage/header/image/down-arrow-image.png";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


function Header1() {
  return (
    <>
      <header className="px-10">
        <div  className="h-[70px] w-full bg-white px-3 flex flex-row  justify-between items-center">        <div className="flex gap-2 w-[150px] pl-5 h-[46px]">
          <i className="bg-[#0D6EFD] w-[38.26px] shadow-[5px_0_10px_rgba(000,000,000,0.25)] h-[40.17px] rounded-[8px] flex justify-center items-center text-[#FFFFFF]">
            <FaShoppingBag />
          </i>
          <h3 className="text-3xl text-[#8CB7F5]">Brand</h3>
        </div>

      

        <div className="w-[228px] h-[41px] flex flex-row gap-4 justify-center items-center">
          <div className="w-[37px] h-[41]  ">
            <i className="w-[20px] h-[19px] text-[#8B96A5] flex justify-center items-center ">
              <FaUser />
            </i>
            <p className="text-[12px] text-[#8B96A5] mx-auto">Profile</p>
          </div>
          <div className="w-[37px] h-[41]  ">
            <div className="w-[37px] h-[41]  ">
              <i className="w-[20px] h-[19px] text-[#8B96A5] flex justify-center items-center ">
                <FaEnvelope />
              </i>
              <p className="text-[12px] text-[#8B96A5] mx-auto">Message</p>
            </div>
          </div>
          <div className="w-[37px] h-[41]  ">
            <div className="w-[37px] h-[41]  ">
              <i className="w-[20px] h-[19px] text-[#8B96A5] flex justify-center items-center ">
                <FaHeart />
              </i>
              <p className="text-[12px] text-[#8B96A5] mx-auto">Order</p>
            </div>
          </div>
          <div className="w-[37px] h-[41]  ">
            
            <div className="w-[37px] h-[41]  ">
              <i className="w-[20px] h-[19px] text-[#8B96A5] flex justify-center items-center ">
                <FaShoppingCart />
              </i>
              <p className="text-[12px] text-[#8B96A5] mx-auto">Mycart</p>
            </div>
           
          </div>
        </div>
        </div>

      </header>
    </>
  );
}

export default Header1;
