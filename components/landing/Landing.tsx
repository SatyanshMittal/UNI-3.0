import React from "react";
import Navbar from "./Navbar";
import Box from "./Box";
import About from "./About";
import Community from "./Community";

export default function Landing() {
  return (
    <>
    <div className=" bg-black relative w-full h-screen">
      <Navbar />
      <div className="absolute z-20 w-full h-screen rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10"/>
      <Box/>
      <About />
      <Community />

      </div>
    </>
  );
}
