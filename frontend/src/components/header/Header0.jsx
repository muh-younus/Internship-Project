import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Image from "./image/down-arrow-image.png";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"; 


function Header0() {
  return (
    <>
      <header className="h-[86px] w-full bg-white p-5 flex flex-row  justify-around items-center">
        <div className="flex gap-2 w-[150px] px-2 h-[46px]">
          <i className="bg-[#0D6EFD] w-[38.26px] shadow-[5px_0_10px_rgba(000,000,000,0.25)] h-[40.17px] rounded-[8px] flex justify-center items-center text-[#FFFFFF]">
            <FaShoppingBag />
          </i>
          <h3 className="text-3xl text-[#8CB7F5]">Brand</h3>
        </div>

        <div className="w-[665px] h-[40px] border border-[#0D6EFD] flex items-center border-2 border-[#0D6EFD] rounded-[6px]">
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search"
            className="w-[421px] h-full  px-3 outline-none border-[0.5px] border-[#0D6EFD] rounded-tl-[6px] rounded-bl-[6px] "
          />
          <p className="pl-3 flex flex-row items-center gap-3 w-[145px] h-[40px] font-normal">
            All Category
            <img src={Image} alt="down arrow" className="w-3 h-3" />{" "}
          </p>
          <input
            type="button"
            value="Search"
            className="ml-3 w-[103px] float-right pr-3  h-[40px] bg-[#0067FF] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px] text-white"
          />
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
      </header>
    </>
  );
}

export default Header0;
