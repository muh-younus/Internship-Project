import React from 'react'
import Clock from "./image/Clock.png"

function Section1() {
  return (
    <>
    <section 
    className="w-[1180px]  h-[240px] bg-white mx-auto mt-5 rounded flex flex-1  mt-1 "
    >
        <div
        className=" rounded flex flex-col gap-3 mr-[46px] p-5"
        >
          <div
          className="w-[198px] h-[113]"
          >
           <h3 className="text-[20px] font-weight-[600] font-inter line-height-[28px] leading-[-0.2px] ">Deal and Offer</h3>
            <p className="text-[16px] style-regular text-[#8B96A5] font-weight-[400] font-inter line-height-[24px] leading-[-0.2px]">Hygiene equipment</p>
            <div
            className="flex flex-row gap-2 mt-2"
            >
              <div className="w-[45px] h-[50px] text-[12px] font-weight-[400] rounded bg-[#606060] font-inter items-center">
 <h2 className="text-[16px] font-weight-[700px] text-[#ffff] font-inter font-bold flex justify-center flex-row">04</h2>
 <p className="text-[12px] style-regular font-weight-[400px] text-[#DEE2E7] font-inter  flex justify-center flex-row">Days</p>
              </div>
              <div className="w-[45px] h-[50px] text-[12px] font-weight-[400] rounded bg-[#606060] font-inter items-center">
 <h2 className="text-[16px] font-weight-[700px] text-[#ffff] font-inter font-bold flex justify-center flex-row">13</h2>
 <p className="text-[12px] style-regular font-weight-[400px] text-[#DEE2E7] font-inter  flex justify-center flex-row">Hour</p>
              </div>
              <div className="w-[45px] h-[50px] text-[12px] font-weight-[400] rounded bg-[#606060] font-inter items-center">
 <h2 className="text-[16px] font-weight-[700px] text-[#ffff] font-inter font-bold flex justify-center flex-row">34</h2>
 <p className="text-[12px] style-regular font-weight-[400px] text-[#DEE2E7] font-inter  flex justify-center flex-row">Min</p>
              </div>
              <div className="w-[45px] h-[50px] text-[12px] font-weight-[400] rounded bg-[#606060] font-inter items-center">
                 <h2 className="text-[16px] font-weight-[700px] text-[#ffff] font-inter font-bold flex justify-center flex-row">56</h2>
                 <p className="text-[12px] style-regular font-weight-[400px] text-[#DEE2E7] font-inter  flex justify-center flex-row">Sec</p>
              </div>
            </div>
          </div>
            


        </div>

        <div className="w-[179px] h-[235px] border border-gray-300 flex flex-col gap-2 ">
          <div>
            <img src={Clock} alt="" />
          </div>
          <p>Smart watches</p>
          <button>-25%</button>
           </div>
        <div className="w-[179px] h-[235px] border border-gray-300 flex flex-col gap-2 "> </div>
        <div className="w-[179px] h-[235px] border border-gray-300 flex flex-col gap-2 "> </div>
        <div className="w-[179px] h-[235px] border border-gray-300 flex flex-col gap-2 "> </div>
        <div className="w-[179px] h-[235px] border border-gray-300 flex flex-col gap-2 "> </div>
    </section>
    </>
  )
}

export default Section1
