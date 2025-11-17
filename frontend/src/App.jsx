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



function App() {
  

  return (
    <>
    <Header />
    <Header1 />
      <div className="bg-gray-200 min-h-screen">
    <Herosection />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    
    </div>
    </>
  );
}

export default App;