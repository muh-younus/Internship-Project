import { useState } from 'react'
import React from 'react'
import Header from './components/header/Header0.jsx'
import Header1 from './components/header/header1.jsx'
import Herosection from './components/herosection/Herosection.jsx'
import Section1 from './components/herosection/Section1.jsx'
import section2 from './components/herosection/Section2.jsx'
import Section2 from './components/herosection/Section2.jsx'
import Section3 from './components/herosection/Section3.jsx'
import Section4 from './components/herosection/Section4.jsx'
import Section5 from './components/herosection/Section5.jsx'
import Section6 from './components/herosection/Section6.jsx'
import Flagsection from './components/herosection/Flagsection.jsx'
import Footer from './components/herosection/Footer.jsx'  
import Mainfooter from './components/herosection/Mainfooter.jsx'



function App() {
  

  return (
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
  );
}

export default App;