import React from 'react'
import Mainimage from "./image/section4-Mainimage.png"

function Section4() {
  return (
    <>
      <section
        className="relative w-[1180px] h-[290px] mx-auto mt-5 py-3 rounded border border-gray-300 overflow-hidden flex items-center justify-between p-5"
      >

        {/* Background Image */}
        <img
          src={Mainimage}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Blue Overlay Shade */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-700/50 to-blue-500/30"></div>

        {/* LEFT TEXT CONTENT */}
        <div className="relative z-10 w-[440px]">
          <h2 className="text-[30px] font-bold text-white leading-tight mb-2">
            An easy way to send<br />requests to all suppliers
          </h2>
          <p className="text-white text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing<br />
            elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* RIGHT FORM BOX */}
        <div className="relative z-10 w-[460px] h-[265px] p-3 bg-white  rounded shadow-lg">
          <h3 className="text-[20px] font-bold mb-3">Send quote to suppliers</h3>

          <input
            type="text"
            placeholder="What item you need?"
            className="w-full text-black border border-gray-300 p-2 rounded mb-3"
          />

          <textarea
            placeholder="Type more details"
            className="w-full h-[53px] text-black border border-gray-300 p-2 rounded mb-3"
          ></textarea>

          <div className="flex items-center gap-3 mb-3">
            <input
              type="text"
              placeholder="Quantity"
              className="w-[206] h-[40px] border border-gray-300 p-2 rounded"
            />
            <select className="w-[111px] border border-gray-300 p-2 rounded text-gray-600">
              <option>Pcs</option>
              <option>Kg</option>
              <option>Pack</option>
            </select>
          </div>

          <button className="bg-[#127FFF] text-white w-[110px] py-1  px-2 rounded">
            Send Inquiry
          </button>
        </div>

      </section>
    </>
  )
}

export default Section4
