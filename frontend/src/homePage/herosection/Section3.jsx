import React from "react";
import Mainimage from "./image/section3-mainimage.png";
import Watch from "./image/watch.png";
import Phone from "./image/phone.png";
import Mug from "./image/mug.png";
import Iphone from "./image/iphone.png";
import Headphone from "./image/headphone.png";
import Headphone2 from "./image/headphone2.png";
import Laptop from "./image/laptop.png";
import Camera from "./image/camera.png";



function Section2() {
  return (
    <>
      <section className="w-[1180px]  h-[257px]  bg-gray-500 mx-auto mt-5 rounded flex flex-1    border border-gray-300 ">
        <div
          className="w-[280px] h-full bg-cover bg-left p-5"
          style={{ backgroundImage: `url(${Mainimage})` }}
        >
          <h2 className="text-[20px] font-weight-[600] font-inter font-bold line-height-[26px] mb-3 leading-[-0.2px]">
            Consumer
            <br /> electronics and <br/> gadgets
          </h2>
          <button className="w-[123px] h-[40px] font-bold rounded bg-[#FFFFFF]">
            Source now
          </button>
        </div>

        <div className="w-[900px] h-[257px] grid grid-cols-4 grid-rows-2 ">
          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Smart Watches
                </p>
                <p className="text-[#8B96A5] text-[12px] font-normal font-inter">
                  From
                  <br />
                  USD 19
                </p>
              </div>

              {/* Image on the right, bottom-aligned */}
              <div className="flex flex-col pb-5 justify-end">
                <img
                  className="w-[82px] h-[82px] object-contain"
                  src={Watch}
                  alt="Watch"
                />
              </div>
            </div>
          </div>

          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Cameras
                </p>
                <p className="text-[#8B96A5] text-[12px] font-normal font-inter">
                  From
                  <br />
                  USD 19
                </p>
              </div>

              {/* Image on the right, bottom-aligned */}
              <div className="flex flex-col pb-5 justify-end">
                <img
                  className="w-[82px] h-[82px] object-contain"
                  src={Camera}
                  alt="Camera"
                />
              </div>
            </div>
          </div>
          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Headphone
                </p>
                <p className="text-[#8B96A5] text-[12px] font-normal font-inter">
                  From
                  <br />
                  USD 19
                </p>
              </div>

              {/* Image on the right, bottom-aligned */}
              <div className="flex flex-col pb-5 justify-end">
                <img
                  className="w-[82px] h-[82px] object-contain"
                  src={Headphone}
                  alt="Headphone"
                />
              </div>
            </div>
          </div>
         <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Smart Watches
                </p>
                <p className="text-[#8B96A5] text-[12px] font-normal font-inter">
                  From
                  <br />
                  USD 19
                </p>
              </div>

              {/* Image on the right, bottom-aligned */}
              <div className="flex flex-col pb-5 justify-end">
                <img
                  className="w-[82px] h-[82px] object-contain"
                  src={Mug}
                  alt="Mug"
                />
              </div>
            </div>
          </div>
          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Gaming Set
                </p>
                <p className="text-[#8B96A5] text-[12px] font-normal font-inter">
                  From
                  <br />
                  USD 19
                </p>
              </div>

              {/* Image on the right, bottom-aligned */}
              <div className="flex flex-col pb-5 justify-end">
                <img
                  className="w-[82px] h-[82px] object-contain"
                  src={Headphone}
                  alt="Headphone"
                />
              </div>
            </div>
          </div>
          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Laptop & PC
                </p>
                <p className="text-[#8B96A5] text-[12px] font-normal font-inter">
                  From
                  <br />
                  USD 19
                </p>
              </div>

              {/* Image on the right, bottom-aligned */}
              <div className="flex flex-col pb-5 justify-end">
                <img
                  className="w-[82px] h-[82px] object-contain"
                  src={Laptop}
                  alt="Laptop"
                />
              </div>
            </div>
          </div>
          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  SmartPhone
                </p>
                <p className="text-[#8B96A5] text-[12px] font-normal font-inter">
                  From
                  <br />
                  USD 19
                </p>
              </div>

              {/* Image on the right, bottom-aligned */}
              <div className="flex flex-col pb-5 justify-end">
                <img
                  className="w-[82px] h-[82px] object-contain"
                  src={Phone}
                  alt="Phone"
                />
              </div>
            </div>
          </div>
          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Electric Kettle
                </p>
                <p className="text-[#8B96A5] text-[12px] font-normal font-inter">
                  From
                  <br />
                  USD 19
                </p>
              </div>

              {/* Image on the right, bottom-aligned */}
              <div className="flex flex-col pb-5 justify-end">
                <img
                  className="w-[82px] h-[82px] object-contain"
                  src={Iphone}
                  alt="Iphone"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
