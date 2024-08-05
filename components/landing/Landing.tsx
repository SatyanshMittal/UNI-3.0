import React from "react";
import Navbar from "./Navbar";
import Spline from "./Spline";
import Box from "./Box";
import Nextpg from "./Nextpg";

export default function Landing() {
  return (
    <>
    <div className=" bg-black relative w-full h-screen">
      <Navbar />
      <div className="absolute z-20 w-full h-screen rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10"/>
      <Spline />
      <Box/>
      <Nextpg />

      </div>
    </>
  );
}
