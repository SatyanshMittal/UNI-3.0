import React from "react";
import Spline from '@splinetool/react-spline/next';
import Lamp from './Lamp'

export default function Landing() {
  return (
    <>
      <div className="relative flex justify-center items-center w-full h-screen">
        <div className="z-10 absolute bg-black w-full h-screen ">
          <Spline scene="https://prod.spline.design/wNyGL11HCHDC5yVC/scene.splinecode" />
        </div>     
        <div className= " z-20 absolute flex justify-center items-center bg w-full h-screen bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 ">
       
          
        </div>  
      </div>
        
    </>
  );
}
