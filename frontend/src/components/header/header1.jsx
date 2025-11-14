import React from 'react'
import { FaBars } from 'react-icons/fa'
import Arrow from "./image/down-arrow-image.png";
import { FaChevronDown } from 'react-icons/fa'

function header1() {
  return (
    <>
    <header className="h-[56px] w-full bg-white p-5 flex flex-row   border-t border-b border-[#E6E6E6]">
     
     <div
     className="flex flex-row gap-8 position-relative left-[140px] ml-4 justify-center items-center w-[620px] h-[24px]"
     >
        <p className="flex font-weight-[500] line-height-[22px] text-[16px]"><FaBars className="w-[24px] h-[24px] text-black pr-2"/>All Category</p>
        <p className="flex font-weight-[500] line-height-[22px] text-[16px]">Hot Offer</p>
        <p className="flex font-weight-[500] line-height-[22px] text-[16px]">Gift boxes</p>
        <p className="flex font-weight-[500] line-height-[22px] text-[16px]">Projects</p>
        <p className="flex font-weight-[500] line-height-[22px] text-[16px]">Menu item</p>
        <p className="flex font-weight-[500] line-height-[22px] text-[16px] justify-end">Help   <FaChevronDown className="w-[4px] h-[4px]"/>    </p>
     </div>

     <div className="flex flex-row gap-6 justify-end items-center position-relative ml-[350px] w-[200px] h-[24px]">
        <button className="flex items-center gap-1 text-sm text-[#1C1C1C]">
          English, USD
          <FaChevronDown className="w-[12px] h-[7.5px] text-[#8B96A5]" />
        </button>
        <button className="flex items-center gap-1 text-sm text-[#1C1C1C]">
          Ship to 
          <FaChevronDown className="w-[12px] h-[7.5px] text-[#8B96A5]" />
        </button>
     </div>
    </header>
    </>
  )
}

export default header1
