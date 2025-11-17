import React from "react";
import Image1 from "./image/sect1.png";
import Image2 from "./image/sect2.png";
import Image3 from "./image/sect3.png";
import Image4 from "./image/sect4.png";

function Section6() {
  return (
    <>
      <section className="w-[1180px] h-[696px] mx-auto mt-5 rounded">
        <h2 className="text-[24px] font-semibold font-inter mb-4 leading-[32px]">
          Recommended Items
        </h2>

        <div className="flex gap-2">
          {[Image1, Image2, Image3, Image4].map((item, index) => (
            <div
              key={index}
              className="w-[280px] h-[200px] bg-white rounded shadow  flex flex-col "
            >
              <img
                src={item}
                alt={`Item ${index + 1}`}
                className="w-[280px] h-[120px] object-cover rounded"
              />
              <div className="py-1 px-2">
                
                <p className="text-black text-[16px] font-inter font-weight-[500] font-normal  leading-[22px]">
                 Source from<br/>industry hubs
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Section6;
