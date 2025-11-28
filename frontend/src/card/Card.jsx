import React from 'react';
import Header from "./Header.jsx"  // FIXED PATH
import Herosection from "./Herosection.jsx";
import Delivery from "./Delivery.jsx"
import Cardsection from "./Cardsection.jsx"
import Footer from "./Footer1.jsx"
import Cardsection1 from './Cardsection.jsx';
import Footermain from "../homePage/herosection/Mainfooter.jsx"
import Breadcrumb from '../breadcrumb/Breadcrumb.jsx';

function Card() {
  return (
    <>
      <Header />
      
      <div className="bg-[#F7FAFC] min-h-screen pb-10">
        <Herosection/>  
        <Delivery/>
        <Cardsection1/>
        
        

      </div>
      
      <Footermain/>
      <Footer/>
    


    </>
  );
}

export default Card;
