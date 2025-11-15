import React from "react";
import Mainimage from "./image/sect1-Background-image.jpg"

function Section2() {
  return (
    <>
      <section className="w-[1180px]  h-[257px]  bg-gray-500 mx-auto mt-5 rounded flex flex-1    border border-gray-300 ">
        <div className="w-[280px] h-full bg-cover bg-left" style={{ backgroundImage: `url(${Mainimage})` }}>
         
        </div>

        <div className="w-[900px] h-[257px] grid grid-cols-4 grid-rows-2 ">
          <div class="bg-red-500 text-white flex items-center justify-center">
            1
          </div>
          <div class="bg-green-500 text-white flex items-center justify-center">
            2
          </div>
          <div class="bg-blue-500 text-white flex items-center justify-center">
            3
          </div>
          <div class="bg-yellow-500 text-black flex items-center justify-center">
            4
          </div>
          <div class="bg-purple-500 text-white flex items-center justify-center">
            5
          </div>
          <div class="bg-pink-500 text-white flex items-center justify-center">
            6
          </div>
          <div class="bg-orange-500 text-white flex items-center justify-center">
            7
          </div>
          <div class="bg-teal-500 text-white flex items-center justify-center">
            8
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
