import React from "react";
import { FaShoppingBag, FaUser, FaEnvelope, FaShoppingCart, FaHeart } from "react-icons/fa";
import Image from "./image/down-arrow-image.png";
import { Link } from "react-router-dom";

function Header0() {
  return (
    <header className="h-[86px] w-full bg-white p-5 flex justify-around items-center">

      {/* Brand Section */}
      <div className="flex gap-2 w-[150px] px-2 h-[46px]">
        <div className="bg-[#0D6EFD] w-[38px] h-[40px] shadow-[5px_0_10px_rgba(0,0,0,0.25)] rounded-[8px] flex justify-center items-center text-white">
          <FaShoppingBag />
        </div>
        <h3 className="text-3xl text-[#8CB7F5]">Brand</h3>
      </div>

      {/* Search Bar */}
      <div className="w-[665px] h-[40px] border-2 border-[#0D6EFD] flex items-center rounded-[6px]">
        <input
          type="search"
          placeholder="Search"
          className="w-[421px] h-full px-3 outline-none border-r border-[#0D6EFD] rounded-l-[6px]"
        />

        <p className="pl-3 flex items-center gap-3 w-[145px] h-[40px]">
          All Category
          <img src={Image} alt="down arrow" className="w-3 h-3" />
        </p>

        <input
          type="button"
          value="Search"
          className="w-[103px] h-[40px] bg-[#0067FF] rounded-r-[6px] text-white"
        />
      </div>

      {/* Icons Section */}
      <div className="w-[228px] h-[41px] flex gap-4 justify-center items-center">

        {/* Profile */}
        <div className="w-[37px] h-[41px]">
          <div className="flex justify-center items-center w-[20px] h-[19px] text-[#8B96A5] mx-auto">
            <FaUser />
          </div>
          <p className="text-[12px] text-[#8B96A5] text-center">Profile</p>
        </div>

        {/* Message */}
        <div className="w-[37px] h-[41px]">
          <div className="flex justify-center items-center w-[20px] h-[19px] text-[#8B96A5] mx-auto">
            <FaEnvelope />
          </div>
          <p className="text-[12px] text-[#8B96A5] text-center">Message</p>
        </div>

        {/* Orders */}
        <div className="w-[37px] h-[41px]">
          <div className="flex justify-center items-center w-[20px] h-[19px] text-[#8B96A5] mx-auto">
            <FaHeart />
          </div>
          <p className="text-[12px] text-[#8B96A5] text-center">Order</p>
        </div>

        {/* Cart */}
        
          <div className="w-[37px] h-[41px]">
            <Link to="/cart">
            <div className="flex justify-center items-center w-[20px] h-[19px] text-[#8B96A5] mx-auto">
              <FaShoppingCart />
            </div>
            <p className="text-[12px] text-[#8B96A5] text-center">Mycart</p>
            </Link>
          </div>
        

      </div>
    </header>
  );
}

export default Header0;
