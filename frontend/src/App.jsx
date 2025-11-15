import { useState } from 'react'
import React from 'react'
import Header from './components/header/Header0.jsx'
import Header1 from './components/header/header1.jsx'
import Herosection from './components/herosection/Herosection.jsx'
import Section1 from './components/herosection/Section1.jsx'


function App() {
  

  return (
    <>
    <Header />
    <Header1 />
      <div className="bg-gray-200 min-h-screen">
    <Herosection />
    <Section1 />
    </div>
    </>
  );
}

export default App;