import React from "react";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="w-full h-[180px] bg-[#EFF2F4] flex flex-col gap-3 items-center p-3 ">
        <h2 className="font-inter font-semibold text-[20px] leading-[-0.2px] line-height-[28px] text-black font-weight-[600] ">
          Subscribe on our newsletter
        </h2>
        <p className="text-[16px] font-inter  text-[#606060] style-regular leading-[-0.2px] line-height-[24px] ">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="flex flex-row gap-2 ">
          <p className="w-[274px] h-[38px] bg-white rounded  p-2 text-[#8B96A5] flex flex-row gap-1">
            <Mail  className="text-[#8B96A5] w-4"/> Email
          </p>
          <button className="text-white px-6 py-1 rounded bg-[#127FFF]">
            Subcribe
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
