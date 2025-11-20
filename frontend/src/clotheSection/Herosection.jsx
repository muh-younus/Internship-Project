import React from "react";
import ShirtImage from "../homePage/herosection/image/shirt.png";
import { FaStar } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import German from "../homePage/herosection/image/German.png";

function Herosection() {
  const list = [];
  for (let i = 0; i < 5; i++) {
    list.push(<FaStar />);
  }
  return (
    <section className="w-[1180px]  h-[580px] bg-white mx-auto  flex flex-row gap-3 p-3  rounded mb-3 ">
      <div className="w-[380px] h-[514px]   mx-auto mx-auto ">
        <div className="w-[380px] h-[380px] border border-[#DEE2E7] rounded">
          <img
            src={ShirtImage}
            alt="Shirt Image"
            classname="w-[380px] h-[380px] object-cover"
          />
        </div>

        <div className="flex flex-row gap-2 mt-3">
          <div className="w-[56px] h-[62px] border border-gray-200 ">
            {" "}
            <img
              src={ShirtImage}
              className="object-cover min-h-[56px]"
              alt="image"
            />
          </div>
          <div className="w-[56px] h-[62px] border border-gray-200 ">
            {" "}
            <img
              src={ShirtImage}
              className="object-cover min-h-[56px]"
              alt="image"
            />
          </div>
          <div className="w-[56px] h-[62px] border border-gray-200 ">
            {" "}
            <img
              src={ShirtImage}
              className="object-cover min-h-[56px]"
              alt="image"
            />
          </div>
          <div className="w-[56px] h-[62px] border border-gray-200 ">
            {" "}
            <img
              src={ShirtImage}
              className="object-cover min-h-[56px]"
              alt="image"
            />
          </div>
          <div className="w-[56px] h-[62px] border border-gray-200 ">
            {" "}
            <img
              src={ShirtImage}
              className="object-cover min-h-[56px]"
              alt="image"
            />
          </div>
          <div className="w-[56px] h-[62px] border border-gray-200 ">
            {" "}
            <img
              src={ShirtImage}
              className="object-cover min-h-[56px]"
              alt="image"
            />
          </div>
        </div>
      </div>

      <div className="w-[430px] h-[514px] flex gap-3 flex-col   mx-auto">
        <div>
          <p className="text-green-600 text-[16px] leading-[-0.2px]">
            &#10003; stock
          </p>
          <h2 className="font-bold text-[20px] font-weight-[600] line-height-[20px] font-inter">
            Mens Long Sleeve T-shirt Cotton Base
            <br /> Layer Slim Muscle
          </h2>
        </div>

        <div>
          <ol className="flex gap-4">
            <li className="flex align-center tex-[16px] items-center  text-[#ff9017]">
              {list} <span className="ml-2">9.3</span>
            </li>
            <li className=" text-[#8B96A5] flex items-center text-[16px] gap-2">
              <FaRegCommentDots /> <span>32 review</span>
            </li>
            <li className=" text-[#8B96A5] flex items-center text-[16px] gap-2">
              <BsBasket /> <span>154 Sold</span>
            </li>
          </ol>
        </div>

        <div className="flex gap-10 w-[430px] h-[72px] align-center  bg-[#fff0df]">
          <div className="flex flex-col justify-center ">
            <h2 className="text-red-500 text-[18px] font-weight-[600] font-semibold">
              $98.00
            </h2>
            <p className="text-[#BDC1C8] text-[13px] font-weight-[400] style-regular">
              50-100 pcs
            </p>
          </div>
          <div className="flex flex-col justify-center border-l-1 border-gray-400 pl-2">
            <h2 className=" text-[18px]   font-weight-[600] font-semibold">
              $98.00
            </h2>
            <p className="text-[#BDC1C8] text-[13px] font-weight-[400] style-regular">
              50-100 pcs
            </p>
          </div>
          <div className="flex flex-col justify-center border-l-1 border-gray-400 pl-2">
            <h2 className=" text-[18px]   font-weight-[600] font-semibold">
              $98.00
            </h2>
            <p className="text-[#BDC1C8] text-[13px] font-weight-[400] style-regular">
              50-100 pcs
            </p>
          </div>
        </div>

        <div className="w-[430px] h-[296px] flex flex-col gap-1 ">
          <div>
            <div className="flex flex-row ">
              <p className="text-[#8B96A5] mb-3 w-[140px]">Price: </p>{" "}
              <p className="text-[#505050]">Negotiable</p>
            </div>
            <hr className="h-[2px] w-[430px] border border-[#E6E6E6] mx-auto" />
          </div>
          <div>
            <div className="flex flex-row ">
              <p className="text-[#8B96A5] mb-3 w-[140px]">Type: </p>{" "}
              <p className=" text-[#505050]">Classic Shoes</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row ">
              <p className="text-[#8B96A5] mb-3 w-[140px]">Material: </p>{" "}
              <p className="text-[#505050] ">Plastic Material</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row ">
              <p className="text-[#8B96A5] mb-3 w-[140px]">Design: </p>{" "}
              <p className="text-[#505050]">Modern nic</p>
            </div>
            <hr className="h-[2px] w-[430px] border border-[#E6E6E6] mx-auto" />
          </div>
          <div>
            <div className="flex flex-row ">
              <p className="text-[#8B96A5] mb-3 w-[140px]">Customization: </p>{" "}
              <p className="text-[#505050]">
                Customized logo and <br />
                design custom packages
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row ">
              <p className="text-[#8B96A5] mb-3 w-[140px]">Protection: </p>{" "}
              <p className="text-[#505050] ">Refund Policy</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row ">
              <p className="text-[#8B96A5] mb-3 w-[140px]">Warrantly: </p>{" "}
              <p className=" text-[#505050]">2 years full warrantly</p>
            </div>
            <hr className="h-[2px] w-[430px] border border-[#E6E6E6] mx-auto" />
          </div>
        </div>
      </div>
      <div className="w-[280px] h-[325px] border border-[#E6E6E6] rounded flex gap-4 flex-col mx-auto p-4">
        <div className="w-[208px] h-[48] flex flex-row gap-4">
          <h2 className="w-[48px] h-[48px] text-[28px] font-weight-[600] flex justify-center font-bold style-inter line-height-[24px] leading-[-0.2px] text-[#4CA7A799] bg-[#C6F3F1]">
            R
          </h2>
          <p>
            Supplier
            <br />
            Guanjoi Trading LLC
          </p>
        </div>
        <hr className="w-full h-2 my-2 text-[#E0E0E0]" />
        <div className="flex flex-col gap-1">
          <p className="flex items-center text-[#8B96A5] gap-1">
            <img src={German} alt="" className="w-[21px] h-[15px]" />
            German, Berlin
          </p>
          <p className="flex items-center text-[#8B96A5] gap-1">
            <MdVerifiedUser />
            Verified Seller
          </p>
          <p className="flex items-center text-[#8B96A5] gap-1">
            <MdLanguage />
            World, Shipping
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="font-weight-[500] style-medium text-[16px] py-1 rounded text-white bg-[#0D6EFD]">
            Send inquiry
          </button>
          <button className="font-weight-[500] style-medium text-[16px] rounded py-1 border border-[#DEE2E7] text-[#0D6EFD]">
            Seller's profile
          </button>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
