import React from 'react'
import CanvasImages from '../CanvasImages'
// Load 150 images here 
export default function Canvas() {
    useEffect(() => {
        console.log(CanvasImages
        );
        
    }, []);
    return <canvas id="canvas"/>
    // return (

    // //   <div className="flex items-center justify-center p-4">
       
    // //   </div>
    // )
  }
