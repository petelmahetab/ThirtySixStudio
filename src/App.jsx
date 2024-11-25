import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import Canvas from './Components/Canvas'
import {useState} from 'react'

//Isme UseEffect use hua hai aur osko import nhi hua hai toh Import it

function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full min-h-screen bg-black text-white">
  
 <Canvas startIndex={0}/>

     {/* <Header/> */}
    </div>
  )
}

export default App
