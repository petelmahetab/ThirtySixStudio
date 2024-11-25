import React from 'react'
import CanvasImages from '../CanvasImages'
import { useEffect,useRef,useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
// Load 150 images here p. You need to create the ref using useRef() which you've already imported
export default function Canvas({details}) {
    const {startIndex,numImages,duration,size,top,left,zIndex}=details;
    const [index,setIndex]=useState({value:details.startIndex})
    const canvasRef=useRef(null)

    useGSAP(()=>{
        gsap.to(index,{
            value:startIndex+numImages-1,//150-1=149
            duration:duration,
            ease:"linear",
            repeat:-1,
            onUpdate:()=>{
                setIndex({value: Math.round(index.value)}) // Fixed syntax
            },
        })
    })
    useEffect(() => {
        //Canvas is the element that we are refering to
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const image = new Image();
        image.src = CanvasImages[index.value];
        
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
        };
        
    }, [index.value]);//Array means that the useEffect will run only once when the component is mounted
    return (
        <canvas 
          ref={canvasRef}
          id="Canvas"
          style={{
            width: `${size}px`,
            height: `${size}px`
          }}
        />
      )
   
  }  

