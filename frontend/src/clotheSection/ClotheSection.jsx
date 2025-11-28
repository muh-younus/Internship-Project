import React from "react";
import Navbar from "../homePage/header/Header0.jsx";
import Navbar2 from "../homePage/header/header1.jsx";
import Breadcrumb from "../breadcrumb/Breadcrumb.jsx";
import Herosection from "./Herosection.jsx";
import Description from "./Description.jsx";
import Product from "./Product.jsx";
import Banner from "./Banner.jsx";
import Footer from "../homePage/herosection/Mainfooter.jsx";
import Footer1 from "../card/Footer1.jsx"
function ClotheSection() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="bg-[#F7FAFC] min-h-screen">
        <div className=" ml-13 py-3">
          {/* Breadcrumb */}
          <Breadcrumb
            paths={[{ name: "Home", link: "/" }, { name: "Clothes" }]}
          />
        </div>
        <Herosection />
        <Description />
        <Product />
        <Banner />
        <div className="bg-white">
        <Footer />
        </div>
        <Footer1/>

        

      </div>
    </>
  );
}

export default ClotheSection;
