import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './homePage/header/Header0.jsx';
import Header1 from './homePage/header/header1.jsx';
import Herosection from './homePage/herosection/Herosection.jsx';
import Section1 from './homePage/herosection/Section1.jsx';
import Section2 from './homePage/herosection/Section2.jsx';
import Section3 from './homePage/herosection/Section3.jsx';
import Section4 from './homePage/herosection/Section4.jsx';
import Section5 from './homePage/herosection/Section5.jsx';
import Section6 from './homePage/herosection/Section6.jsx';
import Flagsection from './homePage/herosection/Flagsection.jsx';
import Footer from './homePage/herosection/Footer.jsx';  
import Mainfooter from './homePage/herosection/Mainfooter.jsx';
import Product from './electronicSection/Product.jsx';
// import Phonesection from './electronicSection/Phonesection.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Header />
            <Header1 />
            <div className="bg-[#F7FAFC] min-h-screen">
              <Herosection />
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
              <Flagsection />
            </div>
            <Footer />
            <Mainfooter />
          </>
        }/>

        {/* Product Page */}
        <Route path="/product" element={<Product />} />
        {/* <Route path="/phone" element = {<Phonesection/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
