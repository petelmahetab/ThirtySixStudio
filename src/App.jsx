import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 

import Canvas from './Componet/canvas'
 // Make sure this path matches your folder structure

function App() {
  // console.log("app")
  return (
    <div className="w-full min-h-screen bg-red">
   <Canvas/>
    </div>
  )
}

export default App