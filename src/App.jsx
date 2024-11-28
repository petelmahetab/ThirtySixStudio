import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import Canvas from './Components/Canvas'
import {useState} from 'react'
import data from './Components/data'

//Isme UseEffect use hua hai aur osko import nhi hua hai toh Import it

function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full  relative min-h-screen  text-white">
  {/* item will be Array of Objects */}

      {
        data[0].map((canvas,index)=>{
          return <Canvas details={canvas}/>
        })
      }
  
  {
        data[5].map((canvas,index)=>{
          return <Canvas details={canvas}/>
        })
      }
       {
        data[6].map((canvas,index)=>{
          return <Canvas details={canvas}/>
        })
      }
      {
        data[8].map((canvas,index)=>{
          return <Canvas details={canvas}/>
        })
      }
      {
        data[9].map((canvas,index)=>{
          return <Canvas details={canvas}/>
        })
      }
    
     {/* <Header/> */}
    </div>
  )
}

export default App
