import React from 'react'
import Navbar from "../homePage/header/Header0.jsx";
import Nav from "../homePage/header/header1.jsx";
import Items from "./Item.jsx";
import Footer from "../homePage/herosection/Footer.jsx"
import Mainfooter from "../homePage/herosection/Mainfooter.jsx"
import Footer1 from "../card/Footer1.jsx"
import Breadcrumb from '../breadcrumb/Breadcrumb.jsx';

function Product() {
  return (
    <>
      <Navbar />
      <Nav />
       <div className=" ml-13 py-3">
          {/* Breadcrumb */}
          <Breadcrumb
            paths={[{ name: "Home", link: "/" }, { name: "Electronic" }]}
          />
        </div>
      <Items />
      <Footer />
      <Mainfooter />
      <Footer1/>

      
    </>
  )
}

export default Product
