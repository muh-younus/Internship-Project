import React from "react";
import Clock from "./image/Clock.png";
import Laptop from "./image/Laptop.png";
import Phone from "./image/Phone.png";
import Camera from "./image/Camera.png";
import Headphone from "./image/Headphone.png";

function Section1() {
  return (
    <>
      <section className="w-[1180px]  h-[240px]  bg-white mx-auto mt-5 rounded flex flex-1   border border-gray-300 ">
        <div className=" rounded flex flex-col gap-3 mr-[47px] p-5">
          <div className="w-[198px] h-[113]">
            <h3 className="text-[20px] font-weight-[600] font-inter line-height-[28px] leading-[-0.2px] ">
              Deal and Offer
            </h3>
            <p className="text-[16px] style-regular text-[#8B96A5] font-weight-[400] font-inter line-height-[24px] leading-[-0.2px]">
              Hygiene equipment
            </p>
            <div className="flex flex-row gap-2 mt-2">
              <div className="w-[45px] h-[50px] text-[12px] font-weight-[400] rounded bg-[#606060] font-inter items-center">
                <h2 className="text-[16px] font-weight-[700px] text-[#ffff] font-inter font-bold flex justify-center flex-row">
                  04
                </h2>
                <p className="text-[12px] style-regular font-weight-[400px] text-[#DEE2E7] font-inter  flex justify-center flex-row">
                  Days
                </p>
              </div>
              <div className="w-[45px] h-[50px] text-[12px] font-weight-[400] rounded bg-[#606060] font-inter items-center">
                <h2 className="text-[16px] font-weight-[700px] text-[#ffff] font-inter font-bold flex justify-center flex-row">
                  13
                </h2>
                <p className="text-[12px] style-regular font-weight-[400px] text-[#DEE2E7] font-inter  flex justify-center flex-row">
                  Hour
                </p>
              </div>
              <div className="w-[45px] h-[50px] text-[12px] font-weight-[400] rounded bg-[#606060] font-inter items-center">
                <h2 className="text-[16px] font-weight-[700px] text-[#ffff] font-inter font-bold flex justify-center flex-row">
                  34
                </h2>
                <p className="text-[12px] style-regular font-weight-[400px] text-[#DEE2E7] font-inter  flex justify-center flex-row">
                  Min
                </p>
              </div>
              <div className="w-[45px] h-[50px] text-[12px] font-weight-[400] rounded bg-[#606060] font-inter items-center">
                <h2 className="text-[16px] font-weight-[700px] text-[#ffff] font-inter font-bold flex justify-center flex-row">
                  56
                </h2>
                <p className="text-[12px] style-regular font-weight-[400px] text-[#DEE2E7] font-inter  flex justify-center flex-row">
                  Sec
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[179px] h-[235px] border border-gray-300 flex flex-col justify-center items-center gap-2 ">
          <div>
            <img className="w-[140px] h-[140px]" src={Clock} alt="" />
          </div>
          <p className="text-[16px] font-weight-[400] font-inter leading-[-0.2px] line-height-[24px]">
            Smart watches
          </p>
          <button className="bg-[#FFE3E3] text-[#EB001B] px-[10px] text-[14px] py-[4px] font-weight-[500] rounded-full">
            -25%
          </button>
        </div>
        <div className="w-[179px] h-[235px] border border-gray-300 flex flex-col justify-center items-center gap-2">
          <div>
            <img
              className="w-[140px] h-[140px] object-contain"
              src={Laptop}
              alt=""
            />
          </div>
          <p className="text-[16px] font-weight-[400] font-inter leading-[-0.2px] line-height-[24px]">
            Laptops
          </p>
          <button className="bg-[#FFE3E3] text-[#EB001B] px-[10px] text-[14px] py-[4px] font-weight-[500] rounded-full">
            -15%
          </button>{" "}
        </div>
        <div className="w-[179px] h-[235px] border border-gray-300 flex flex-col justify-center items-center gap-2">
          <div>
            <img
              className="w-[140px] h-[140px] object-obtain object-contain"
              src={Camera}
              alt=""
            />
          </div>
          <p className="text-[16px] font-weight-[400] font-inter leading-[-0.2px] line-height-[24px]">
            GoPro Camera
          </p>
          <button className="bg-[#FFE3E3] text-[#EB001B] px-[10px] text-[14px] py-[4px] font-weight-[500] rounded-full">
            -45%
          </button>{" "}
        </div>
        <div className="w-[179px] h-[235px] border border-gray-300 flex flex-col justify-center items-center gap-2">
          <div>
            <img
              className="w-[140px] h-[140px] object-contain"
              src={Headphone}
              alt=""
            />
          </div>
          <p className="text-[16px] font-weight-[400] font-inter leading-[-0.2px] line-height-[24px]">
            Headphone
          </p>
          <button className="bg-[#FFE3E3] text-[#EB001B] px-[10px] text-[14px] py-[4px] font-weight-[500] rounded-full">
            -55%
          </button>{" "}
        </div>
        <div className="w-[179px] h-[235px]  flex flex-col justify-center items-center gap-2">
          <div>
            <img
              className="w-[140px] h-[140px] object-contain"
              src={Phone}
              alt=""
            />
          </div>
          <p className="text-[16px] font-weight-[400] font-inter leading-[-0.2px] line-height-[24px]">
            Phone
          </p>
          <button className="bg-[#FFE3E3] text-[#EB001B] px-[10px] text-[14px] py-[4px] font-weight-[500] rounded-full">
            -25%
          </button>{" "}
        </div>
      </section>
    </>
  );
}

export default Section1;
