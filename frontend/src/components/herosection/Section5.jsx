import React from 'react'
import Mainimage from "./image/section4-Mainimage.png"
import Shirt from "./image/shirt.png"
import Jacket from "./image/jacket.jpg"
import Wallet from "./image/wallet.png"
import Bag from "./image/bag.png"
import Jean from "./image/jean.png"
import Pot from "./image/pot.png"
import Headphone from "./image/white headphone.png"
import Mug from "./image/mug.png"
import Dress from "./image/formal dress.png"

function Section4() {
  return (
    <>
      <section className="w-[1180px] h-[696px] mx-auto mt-5 rounded py-1">
        <h2 className="text-[24px] font-semibold font-inter mb-4 leading-[32px]">
          Recommended Items
        </h2>

        <div className="grid grid-cols-5 grid-rows-2 gap-4">

          {[Shirt, Jacket, Dress, Wallet, Bag, Jean, Headphone, Bag, Pot, Mug].map((item, index) => (
            <div key={index} className="w-[220px] h-[310px] bg-white rounded shadow p-3 flex flex-col items-center">
              <img 
                src={item} 
                alt={`Item ${index + 1}`} 
                className="w-[150px] h-[170px] object-cover rounded mb-[35px] 
                           transition-transform duration-300 ease-in-out transform 
                           hover:scale-105 hover:shadow-lg"
              />
              <p className="text-[16px] font-inter font-medium line-height-[22px] mb-1">
                $10.30
              </p>
              <p className="text-[#8B96A5] text-[16px] font-inter font-normal text-center leading-[22px]">
                T-shirts with multiple<br/> colors, for men
              </p>
            </div>
          ))}

        </div>
      </section>
    </>
  )
}

export default Section4
