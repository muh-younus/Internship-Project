import React from 'react'
import Flag from "../homePage/herosection/image/America.png";
import {ChevronUp} from "lucide-react"


function Footer() {
  return (
    <>
    <footer
    className="bg-[#EFF2F4] w-full h-[68px] flex items-center justify-center"
    >
        <main 
        className="w-[1180px] h-[68px] flex justify-between items-center"
        >
            <p>© 2023 Ecommerce</p>
            <p
            className="flex justify-center items-center gap-1"
            >
                <img src={Flag} className="w-[24px] h-[17px]" alt="" />
                <span>English</span>
                <ChevronUp/>
               
            </p>

        </main>

    </footer>
    </>
  )
}

export default Footer
