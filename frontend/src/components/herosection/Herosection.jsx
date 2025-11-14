import React from 'react'
import Image from "./image/HeroImage.png";
import { FaUser } from 'react-icons/fa'

function Herosection() {
  return (
    
    <>
    
    <section className="w-[1180px]  h-[360px] bg-white mx-auto flex flex-row gap-2 mt-2 ">
        <div
         className="w-[250px] h-[360px] bg-gray100 flex flex-col gap-4 "
         >
          <p className="hover:bg-[#CBEFDF] hover:rounded px-2 leading-[17px]">Automobile</p>
          <p className="hover:bg-[#CBEFDF] hover:rounded text-[16px] p-1 leading-[16px]">Clothes and wear</p>
          <p className="hover:bg-[#CBEFDF] hover:rounded text-[16px] p-1 leading-[16px]">Home interiors</p>
          <p className="hover:bg-[#CBEFDF] hover:rounded text-[16px] p-1 leading-[16px]">Computer and tech</p>
          <p className="hover:bg-[#CBEFDF] hover:rounded text-[16px] p-1 leading-[16px]">Tools,equipments</p>
          <p className="hover:bg-[#CBEFDF] hover:rounded text-[16px] p-1 leading-[16px]">Sports and outdoor</p>
          <p className="hover:bg-[#CBEFDF] hover:rounded text-[16px] p-1 leading-[16px]">Animal and pets</p>
          <p className="hover:bg-[#CBEFDF] hover:rounded text-[16px] p-1 leading-[16px]">Machinery tools</p>
          <p className="hover:bg-[#CBEFDF] hover:rounded text-[16px] p-1 leading-[16px]">More Category</p>  
            
        </div>
        <div className="w-[665px] h-[360px] ">
            <img src={Image} alt="" />
        </div>
        <div className="w-[240px] h-[350px] flex flex-col gap-1 ml-2">
            
            <div className="w-[200px] h-[150px] bg-[#CBEFDF] rounded flex flex-col  gap-2 justify-center items-center">
                <div className="flex flex-row gap-1">
                    <p className="w-[44px] h-[44px] rounded-full  flex justify-center bg-[#91B1E7] text-white items-center size text-[30px]"><FaUser/> </p>
                    <h3 className="text-[16px] font-weight-[400]">Hi, user<br/>Let's get stated</h3>
                </div>
                <button className="w-[180px] h-[30px] rounded bg-[#127FFF] text-white">Join Now</button>
                <button className="w-[180px] h-[30px] rounded bg-white text-[#0D6EFD]">Login</button>
            </div>
            <div className="w-[200px] h-[95px]  bg-[#f38332] rounded">
                <h3 className="text-white pl-3 pt-2 text-[16px] font-weight-[400]">Get US $10 off<br/> with a new<br/> supplier</h3>
            </div>
            <div className="w-[200px] h-[90px]  bg-[#55bdc3] rounded">
                <h3 className="text-white pl-3 pt-2 text-[16px] font-weight-[400]">Get US $10 off<br/> with a new<br/> supplier</h3>
            </div>
           
        </div>

    </section>
   
    
    </>
  )
}

export default Herosection
