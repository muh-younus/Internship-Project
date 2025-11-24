import React from 'react'
import { FaLock } from 'react-icons/fa'
import {MessageSquare} from "lucide-react"
import {Truck} from "lucide-react"
function Delivery() {
  return (
    
    <>
    <section className="flex flex-row">
    <div className="w-[880px]   flex flex-row gap-5   ml-15">

        <div className="flex flex-row gap-2">

            <i className="w-[48px] h-[48px] rounded-full bg-[#DEE2E7] flex justify-center items-center"><FaLock  className="text-[#8B96A5] w-[16px] h-[21px]"/></i>
            <p className="text-[16px] leading-[-0.2px] font-weight-[400] font-inter">secure payment <br/><span className="text-[16px] leading-[-0.2px] font-weight-[400] text-[#A9ACB0] font-inter">Have you ever finally just</span></p>
        </div>
        <div className="flex flex-row gap-2">

            <i className="w-[48px] h-[48px] rounded-full bg-[#DEE2E7] flex justify-center items-center"><MessageSquare  className="text-[#8B96A5] w-[16px] h-[21px]"/></i>
            <p className="text-[16px] leading-[-0.2px] font-weight-[400] font-inter">secure payment <br/><span className="text-[16px] leading-[-0.2px] font-weight-[400] text-[#A9ACB0] font-inter">Have you ever finally just</span></p>
        </div>
        <div className="flex flex-row gap-2">

            <i className="w-[48px] h-[48px] rounded-full bg-[#DEE2E7] flex justify-center items-center"><Truck  className="text-[#8B96A5] w-[16px] h-[21px]"/></i>
            <p className="text-[16px] leading-[-0.2px] font-weight-[400] font-inter">secure payment <br/><span className="text-[16px] leading-[-0.2px] font-weight-[400] text-[#A9ACB0] font-inter">Have you ever finally just</span></p>
        </div>
    </div>
   
    </section>
    </>
  )
}

export default Delivery
