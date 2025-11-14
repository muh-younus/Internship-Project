import { useState } from 'react'
import React from 'react'
import Header from './components/header/Header.jsx'
import Header1 from './components/header/header1.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Header1 />
    </>
  )
}

export default App
