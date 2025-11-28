import React from "react";
import { FaShoppingBag, FaGooglePlay } from "react-icons/fa";
import { Apple } from "lucide-react";

function Mainfooter() {
  return (
    <>
      
        <div className="w-[1180px] h-[324px] flex flex-row mx-auto gap-20 py-10  ">
          <div>
            <div className="flex flex-row gap-1 mb-2">
              <i className="bg-[#0D6EFD] w-[44px] shadow-[5px_0_10px_rgba(0,0,0,0.25)] h-[44px] rounded-[8px] flex justify-center items-center text-[#FFFFFF]">
                <FaShoppingBag />
              </i>
              <h3 className="text-xl text-[#8CB7F5]">Brand</h3>
            </div>
            <p className="text-[16px] font-inter text-[#505050] leading-[24px]">
              Best information about the company
              <br /> gies here but now lorem ipsum is
            </p>
          </div>

          <div>
            <h1>About</h1>
            <ul className="text-[#8B96A5]">
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div>
            <h1>Partnership</h1>
            <ul className="text-[#8B96A5]">
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div>
            <h1>Information</h1>
            <ul className="text-[#8B96A5]">
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div>
            <h1>For User</h1>
            <ul className="text-[#8B96A5]">
              <li>Login</li>
              <li>Register</li>
              <li>Setting</li>
              <li>My Orders</li>
            </ul>
          </div>

          <div>
            <h1>Get app</h1>
            <ul className="flex flex-col gap-3 mt-3">
              <li className="w-[124px] h-[42px] bg-black rounded flex flex-row px-2">
                <div className="flex items-center">
                  <Apple className="text-white" />
                </div>
                <div className="text-white text-[8px] my-auto ml-2">
                  <p>
                    Download on the
                    <br />
                    <span className="font-bold">App Store</span>
                  </p>
                </div>
              </li>

              <li className="w-[124px] h-[42px] bg-black rounded flex flex-row px-2">
                <div className="flex items-center">
                  <FaGooglePlay className="text-white" />
                </div>
                <div className="text-white text-[8px] my-auto ml-2">
                  <p>
                    Download on the
                    <br />
                    <span className="font-bold">Google Play</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      
    </>
  );
}

export default Mainfooter;
