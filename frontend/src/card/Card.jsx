import React from 'react';
import Header from "./Header.jsx"  // FIXED PATH
import Herosection from "./Herosection.jsx";

function Card() {
  return (
    <>
      <Header />
      <div className="bg-[#F7FAFC] min-h-screen">
        <Herosection/>

      </div>
    </>
  );
}

export default Card;
