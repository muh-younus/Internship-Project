import React from 'react';
import Header from "./Header.jsx"  // FIXED PATH
import Herosection from "./Herosection.jsx";
import Delivery from "./Delivery.jsx"
import Cardsection from "./Cardsection.jsx"

function Card() {
  return (
    <>
      <Header />
      <div className="bg-[#F7FAFC] min-h-screen">
        <Herosection/>
        <Delivery/>
        <Cardsection/>

      </div>
    </>
  );
}

export default Card;
