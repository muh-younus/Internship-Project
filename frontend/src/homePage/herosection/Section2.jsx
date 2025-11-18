import React from "react";
import Mainimage from "./image/sect1-Background-image.jpg";
import Sofa from "./image/sofa.png";
import Lamp from "./image/lamp.png";
import Foam from "./image/foam.png";
import Pot from "./image/pot.png";
import Mixer from "./image/mixer.png";
import Blender from "./image/blender.png";
import Appliance from "./image/appliance.jpg";
import CoffeeMaker from "./image/coffee-maker.png";


function Section2() {
  return (
    <>
      <section className="w-[1180px]  h-[257px]  bg-gray-500 mx-auto mt-5 rounded flex flex-1    border border-gray-300 ">
        <div
          className="w-[280px] h-full bg-cover bg-left p-5"
          style={{ backgroundImage: `url(${Mainimage})` }}
        >
          <h2 className="text-[20px] font-weight-[600] font-inter font-bold line-height-[26px] leading-[-0.2px]">
            Home and
            <br /> Kitchen
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
                  Soft chairs
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
                  src={Sofa}
                  alt="Sofa"
                />
              </div>
            </div>
          </div>

          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Soft & chairs
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
                  src={Lamp}
                  alt="Lamp"
                />
              </div>
            </div>
          </div>
          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Kitchen Dishes
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
                  src={Foam}
                  alt="Foam"
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
                  src={Pot}
                  alt="Pot"
                />
              </div>
            </div>
          </div>
          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Kitchen mixer
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
                  src={Mixer}
                  alt="Mixer"
                />
              </div>
            </div>
          </div>
          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Blender
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
                  src={Blender}
                  alt="Blender"
                />
              </div>
            </div>
          </div>
          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Home Appliance
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
                  src={Appliance}
                  alt="Appliance"
                />
              </div>
            </div>
          </div>
          <div class="bg-white  p-5 border border-gray-300">
            <div className=" flex justify-between  h-[120px] ">
              {/* Text on the left */}
              <div className="flex flex-col justify-start">
                <p className="text-[16px] font-normal font-inter">
                  Coffee Maker
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
                  src={CoffeeMaker}
                  alt="CoffeeMaker"
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
