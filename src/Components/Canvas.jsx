import React from 'react'
import canvasImages from '../CanvasImages'
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
        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = canvasImages[index.value];
        img.onload = () => {
          canvas.width = canvas.offsetWidth * scale;
          canvas.height = canvas.offsetHeight * scale;
          canvas.style.width = canvas.offsetWidth + "px";
          canvas.style.height = canvas.offsetHeight + "px";
    
          ctx.scale(scale, scale);
          ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
        };
      }, [index]);
    //Array means that the useEffect will run only once when the component is mounted
    return (
        <canvas 
          ref={canvasRef}
          id="Canvas"
          className='absolute'
         style={{weight:`${size*1.8}px`,
          height:`${size*1.8}px`,
          top:`${top}%`,
          left:`${left}%`,
          zIndex:`${zIndex}`
        }}
        />
      )
   
  }  

